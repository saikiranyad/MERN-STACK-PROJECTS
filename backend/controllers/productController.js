const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const DataUriParser = require('datauri/parser');
const path = require('path');

const Product = require('../models/productModel.js');
const userModel = require('../models/userModel.js');
const findreplybyid = require('../Helpers/replyhelper.js');
const { sendnotification } = require('../Helpers/Notification.js');

// Cloudinary Configuration
cloudinary.config({
    cloud_name: 'dmsawokur',
    api_key: '693684461416176',
    api_secret: 'r1U_LepUlNtnYUGyfoFDmqXrpNM'
});

const parser = new DataUriParser();

// Convert buffer to data URI
const getDataUri = (file) => {
    const ext = path.extname(file.originalname).toString();
    return parser.format(ext, file.buffer);
};

// Add Product Controller
const addProduct = async (req, res) => {
    try {
        const { name, price, stock, type, category, subcategory, bestSeller, discount, description } = req.body;
        const userId = req.user.id;
        const user = await userModel.findById(userId);
        console.log(user.userType)

        // Check if user is a seller
        if (!user || user.userType !== 'Seller') {
            return res.status(403).json({ success: false, message: 'Only sellers can add products' });
        }

        const imageUrls = [];

        for (const file of req.files) {
            const fileUri = getDataUri(file);
            const result = await cloudinary.uploader.upload(fileUri.content);
            imageUrls.push(result.secure_url);
        }

        const product = new Product({
            userId,
            name,
            price,
            stock,
            type,
            category,
            subcategory,
            bestSeller,
            discount,
            description,
            images: imageUrls,
            seller: userId // optional: associate product with the seller
        });
        console.log(product)
        await product.save();

        res.status(201).json({ success: true, message: 'Product added successfully', product });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


// Get All Products
const getProduct = async (req, res) => {
    try {
        const products = await Product.find().populate('userId');
        res.status(200).json({ success: true, products });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Error fetching products', error });
    }
};

// Get Product By ID
const getproductbyid = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('userId');
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        res.status(200).json({ success: true, product });
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Error fetching product', error });
    }
};

// Update Product
// const updateProduct = async (req, res) => {
//     try {
//       const { id } = req.params;
  
//       // Get the existing product
//       const existingProduct = await Product.findById(id);
//       if (!existingProduct) {
//         return res.status(404).json({ success: false, message: "Product not found" });
//       }
  
//       // Upload image if provided
//       let imageUrls = existingProduct.images;
//       if (req.file) {
//         const fileUri = getDataUri(req.file);
//         const cloudinaryResult = await cloudinary.uploader.upload(fileUri.content);
//         imageUrls = [...imageUrls, cloudinaryResult.secure_url]; // Append new image
//       }
  
//       // Build updated data
//       const updatedData = {
//         ...req.body,
//         images: imageUrls
//       };
  
//       const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, {
//         new: true,
//         runValidators: true
//       });
  
//       res.status(200).json({
//         success: true,
//         message: 'Product updated successfully',
//         updatedProduct
//       });
//     } catch (error) {
//       console.error('Product update error:', error);
//       res.status(500).json({ success: false, message: 'Error updating product', error: error.message });
//     }
//   };

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
console.log(req.body,142)
    // Get the existing product
    const existingProduct = await Product.findById(id);
    if (!existingProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    // Upload image if provided
    let imageUrls = [...existingProduct.images]; // Make sure to create a copy of the existing images
    if (req.file) {
      const fileUri = getDataUri(req.file);
      const cloudinaryResult = await cloudinary.uploader.upload(fileUri.content);
      imageUrls.push(cloudinaryResult.secure_url); // Append new image
    }

    // Build updated data
    const updatedData = {
      ...req.body, // Make sure other fields are included from the body
      images: imageUrls // Update the images array with the new image URLs
    };

    // Update the product with the new data
    const updatedProduct = await Product.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true
    });
    console.log(updatedProduct)

    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      updatedProduct
    });
  } catch (error) {
    console.error('Product update error:', error);
    res.status(500).json({ success: false, message: 'Error updating product', error: error.message });
  }
};






// Delete Product
const deleteproduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting product', error });
    }
};


const getselleruserproducts = async (req, res) => {
    try {
      const userId = req.user.id;
  
      if (!userId) {
        return res.status(401).json({ success: false, message: 'User is not authenticated' });
      }
  
      const userProducts = await Product.find({ userId }).populate('userId');
  
      return res.status(200).json({
        success: true,
        message: 'Products fetched successfully',
        products: userProducts
      });
    } catch (error) {
      console.error('Error fetching seller products:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch products',
        error: error.message
      });
    }
  };

  // const comments = async (req, res) => {
  //   try {
  //     const productId = req.params.id;
  //     const userId = req.user.id;
  //     const { text } = req.body;
  
  //     if (!text || !text.trim()) {
  //       return res.status(400).json({ success: false, message: "Comment text is required" });
  //     }
  
  //     const product = await Product.findById(productId).populate({
  //       path: 'comments.userId', // Populate the userId of the comment
  //       select: 'name avatar' // Select specific fields you want to return from the User model (adjust according to your model)
  //     });
  //     if (!product) {
  //       return res.status(404).json({ success: false, message: "Product not found" });
  //     }
  
  //     const newComment = {
  //       userId,
  //       text,
  //       replies: [],
  //       createdAt: new Date()
  //     };
  
  //     product.comments.push(newComment);
  //     await product.save();
  //     if (product.userId.toString() !== userId) {
  //       await sendnotification(product.userId, userId, 'comment', productId);
  //     }
  
  //     res.status(201).json({
  //       success: true,
  //       message: "Comment added successfully",
  //       comments: product.comments,
  //       product
  //     });
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json({ success: false, message: "Internal server error in comments" });
  //   }
  // };
  


  // const replies = async (req, res) => {
  //   try {
  //     const productId = req.params.id;
  //     const commentId = req.body.commentId; // Comment to which the user is replying
  //     const userId = req.user.id;
  //     const { text } = req.body; // The text of the reply
  
  //     if (!text || !text.trim()) {
  //       return res.status(400).json({ success: false, message: "Reply text is required" });
  //     }
  
  //     const product = await Product.findById(productId).populate({
  //       path: 'comments.replies.userId', // Populate the userId of the comment
  //       select: 'name avatar' // Select specific fields you want to return from the User model (adjust according to your model)
  //     });
  //     if (!product) {
  //       return res.status(404).json({ success: false, message: "Product not found" });
  //     }
  
  //     const comment = product.comments.id(commentId); // Find the specific comment
  //     if (!comment) {
  //       return res.status(404).json({ success: false, message: "Comment not found" });
  //     }
  
  //     // Create a new reply
  //     const newReply = {
  //       userId,
  //       text,
  //       replies: [], // Nested replies can go here if needed
  //       createdAt: new Date()
  //     };
  
  //     // Push the reply to the selected comment's replies
  //     comment.replies.push(newReply);
  //     await product.save();
  //     if (comment.userId.toString() !== userId) {
  //       await sendnotification(comment.userId, userId, 'reply', productId);
  //     }
  
  //     res.status(201).json({
  //       success: true,
  //       message: "Reply added successfully",
  //       replies: comment.replies
  //     });
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json({ success: false, message: "Internal server error in replies" });
  //   }
  // };
  // const replytoreply = async (req, res) => {
  //   try {
  //     const productId = req.params.id;
  //     const { replyId, text } = req.body; // The ID of the reply the user is replying to and the reply text
  //     const userId = req.user.id;
  
  //     if (!text || !text.trim()) {
  //       return res.status(400).json({ success: false, message: "Reply text is required" });
  //     }
  
  //     const product = await Product.findById(productId).populate({
  //       path: 'comments.userId', // Populate the userId of the comment
  //       select: 'name avatar' // Select specific fields you want to return from the User model
  //     }).populate({
  //       path: 'comments.replies.userId', // Populate the userId for replies
  //       select: 'name avatar' // Select specific fields for replies
  //     });
  
  //     if (!product) {
  //       return res.status(404).json({ success: false, message: "Product not found" });
  //     }
  
  //     // Find the specific reply to which the user wants to reply
  //     const reply = findReplyById(product.comments, replyId);
  //     if (!reply) {
  //       return res.status(404).json({ success: false, message: "Reply not found" });
  //     }
  
  //     // Create a new nested reply
  //     const newReply = {
  //       userId,
  //       text,
  //       replies: [], // Nested replies can go here if needed
  //       createdAt: new Date(),
  //     };
  
  //     // Push the new reply to the original reply's replies
  //     reply.replies.push(newReply);
  //     await product.save();
  
  //     if (reply.userId.toString() !== userId) {
  //       await sendnotification(reply.userId, userId, 'replytoreply', productId);
  //     }
  
  //     res.status(201).json({
  //       success: true,
  //       message: "Reply to reply added successfully",
  //       replies: reply.replies,
  //     });
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json({ success: false, message: "Internal server error in replytoreply API" });
  //   }
  // };
  
  // Utility function to find a reply by ID
 
  const comments = async (req, res) => {
    try {
      const { id: productId } = req.params;
      const userId = req.user.id;
      const { text } = req.body;
      const user = await userModel.findById(userId)
      if (!text?.trim()) {
        return res.status(400).json({ success: false, message: "Comment text is required" });
      }
  
      const product = await Product.findById(productId).populate({
        path: 'comments.userId', // Make sure to populate the `userId` in comments
        select: 'name' // Only fetch the name from the User schema (optional)
      });
      if (!product) return res.status(404).json({ success: false, message: "Product not found" });
  
      const newComment = {
        userId,
        text,
        replies: [],
        createdAt: new Date()
      };

      product.comments.push(newComment);
      await product.save();
        user.comments.push(newComment)
      await user.save()
  
      if (product.userId.toString() !== userId) {
        await sendnotification(product.userId, userId, 'comment', productId);
      }
  
      return res.status(201).json({ success: true, message: "Comment added successfully",product });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: "Internal server error in comments" });
    }
  };
  
  const replies = async (req, res) => {
    try {
      const { id: productId } = req.params;
      const { commentId, text } = req.body;
      const userId = req.user.id;
  
      if (!text?.trim()) {
        return res.status(400).json({ success: false, message: "Reply text is required" });
      }
  
      const product = await Product.findById(productId);
      if (!product) return res.status(404).json({ success: false, message: "Product not found" });
  
      const comment = product.comments.id(commentId);
      if (!comment) return res.status(404).json({ success: false, message: "Comment not found" });
  
      const newReply = {
        userId,
        text,
        replies: [],
        createdAt: new Date()
      };
  
      comment.replies.push(newReply);
      await product.save();
  
      if (comment.userId.toString() !== userId) {
        await sendnotification(comment.userId, userId, 'reply', productId);
      }
  
      return res.status(201).json({ success: true, message: "Reply added successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: "Internal server error in replies" });
    }
  };
  
  const findReplyById = (replies, replyId) => {
    for (const reply of replies) {
      if (reply._id.toString() === replyId) return reply;
      const found = findReplyById(reply.replies, replyId);
      if (found) return found;
    }
    return null;
  };
  
  const replytoreply = async (req, res) => {
    try {
      const { id: productId } = req.params;
      const { replyId, text } = req.body;
      const userId = req.user.id;
  
      if (!text?.trim()) {
        return res.status(400).json({ success: false, message: "Reply text is required" });
      }
  
      const product = await Product.findById(productId);
      if (!product) return res.status(404).json({ success: false, message: "Product not found" });
  
      let targetReply = null;
      for (const comment of product.comments) {
        targetReply = findReplyById(comment.replies, replyId);
        if (targetReply) break;
      }
  
      if (!targetReply) {
        return res.status(404).json({ success: false, message: "Reply not found" });
      }
  
      const newReply = {
        userId,
        text,
        replies: [],
        createdAt: new Date()
      };
  
      targetReply.replies.push(newReply);
      await product.save();
  
      if (targetReply.userId.toString() !== userId) {
        await sendnotification(targetReply.userId, userId, 'replytoreply', productId);
      }
  
      return res.status(201).json({ success: true, message: "Reply to reply added successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: "Internal server error in replytoreply" });
    }
  };
  
  // GET API to fetch full comment tree with populated user info
  const getProductComments = async (req, res) => {
    try {
      const productId = req.params.id;
      const product = await Product.findById(productId)
        .populate({
          path: 'comments.userId',
          select: 'name avatar'
        })
        .populate({
          path: 'comments.replies.userId',
          select: 'name avatar'
        });
  
      if (!product) return res.status(404).json({ success: false, message: "Product not found" });
  
      return res.status(200).json({
        success: true,
        comments: product.comments
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: "Failed to fetch comments" });
    }
  };

  const starrating = async (req, res) => {
    try {
      const userId = req.user.id;
      const productId = req.params.id;
      const { rating } = req.body;
  
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }
  
      // Check if the user has already rated
      const existingRating = product.ratings.find(r => r.userId.toString() === userId);
  
      if (existingRating) {
        // Update the existing rating
        existingRating.rating = rating;
      } else {
        // Add new rating
        product.ratings.push({ userId, rating });
      }
  
      await product.save();
  
      // Populate userId inside ratings
      const populatedProduct = await Product.findById(productId).populate('ratings.userId', 'username email');
  
      return res.status(200).json({
        success: true,
        message: existingRating ? 'Rating updated' : 'Rating added',
        product: populatedProduct
      });
  
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: 'Internal server error in starrating' });
    }
  };


  const stocksold = async (req, res) => {
    const { productId, quantitySold } = req.body;
  
    try {
      // Find the product by ID
      const product = await Product.findById(productId);
  
      // If product doesn't exist
      if (!product) {
        return res.status(404).json({
          success: false,
          message: 'Product not found',
        });
      }
  
      // Check if the stock is enough to fulfill the order
      if (product.stock < quantitySold) {
        return res.status(400).json({
          success: false,
          message: 'Insufficient stock',
        });
      }
  
      // Reduce the stock of the product
      product.stock -= quantitySold;
  
      // Save the updated product
      await product.save();
  
      // Return success response
      res.status(200).json({
        success: true,
        message: `${quantitySold} items sold!`,
        updatedProduct: product,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  };
  

  const onlygetallcomments = async (req, res) => {
    try {
      const usercomments = await userModel.find()
      console.log(usercomments)
  
      

      return res.status(200).json({ success: true, usercomments });
    } catch (err) {
      console.error("Error in onlygetallcomments:", err);
      return res.status(500).json({
        success: false,
        message: "Internal server error in onlygetallcomments",
      });
    }
  };



module.exports = { addProduct, getProduct, getproductbyid, updateProduct, deleteproduct,getselleruserproducts,comments,replies,replytoreply,starrating,stocksold,onlygetallcomments };