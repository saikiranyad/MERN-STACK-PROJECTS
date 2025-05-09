// const Cart = require('../models/cartModel.js');
// const Product = require('../models/productModel.js');
// const User = require('../models/userModel.js');

// // Add to Cart
// // const addcart = async (req, res) => {
// //     try {
// //       const userId = req.user.id;
// //       const { productId, quantity } = req.body;
  
// //       const user = await User.findById(userId);
// //       if (!user) return res.status(404).json({ msg: 'User not found' });
// //   const product = await Product.findById(productId)
// //   if (!product) return res.status(404).json({ msg: 'product not found' });
// //       let cartItem = await Cart.findOne({ userId, productId });
  
// //       if (cartItem) {
      
// //         cartItem.quantity += quantity;
// //         await cartItem.save();
// //       } else {
     
// //         cartItem = new Cart({ userId, productId, quantity });
// //         await cartItem.save();
  
     
// //         user.cartitems.push(cartItem._id);
// //         await user.save();
// //       }
  
// //       const populatedCartItem = await Cart.findById(cartItem._id).populate('productId', 'name price images').populate('userId','name avatar phonenumber');
  
// //       res.status(200).json({
// //         success: true,
// //         message: 'Cart updated',
// //         cartItem: populatedCartItem
// //       });
  
// //     } catch (err) {
// //       console.error(err);
// //       res.status(500).json({ msg: 'Error in addcart API', err });
// //     }
// //   };

// const addcart = async (req, res) => {
//   try {
//     const userId = req.user.id;
//     const { productId, quantity } = req.body;

//     const user = await User.findById(userId);
//     if (!user) return res.status(404).json({ msg: 'User not found' });
//     const product = await Product.findById(productId);
//     if (!product) return res.status(404).json({ msg: 'Product not found' });

//     let cartItem = await Cart.findOne({ userId, productId });

//     if (cartItem) {
//       cartItem.quantity += quantity;
//       await cartItem.save();
//     } else {
//       cartItem = new Cart({ userId, productId, quantity });
//       await cartItem.save();

//       user.cartitems.push(cartItem._id);
//       await user.save();
//     }

//     const populatedCartItem = await Cart.findById(cartItem._id)
//       .populate('productId', 'name price images')
//       .populate('userId', 'name avatar phoneNumber');

//     res.status(200).json({
//       success: true,
//       message: 'Cart updated',
//       cartItem: populatedCartItem,
//     });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: 'Error in addcart API', err });
//   }
// };

  


// // Update Cart
// const updatecart = async (req, res) => {
//     try {
//       const userId = req.user.id; // safer than trusting body
//       const { productId, quantity } = req.body;
  
//       const cartItem = await Cart.findOne({ userId, productId });
//       if (!cartItem) {
//         return res.status(404).json({ msg: 'Cart item not found' });
//       }
  
//       cartItem.quantity = quantity;
//       await cartItem.save();
  
//       const updatedCartItem = await Cart.findById(cartItem._id).populate('productId', 'name price images');
  
//       res.status(200).json({
//         success: true,
//         message: 'Cart item updated',
//         cartItem: updatedCartItem,
//       });
  
//     } catch (err) {
//       console.error(err);
//       return res.status(500).json({ msg: 'Error updating cart', err });
//     }
//   };
  

// // Delete Cart Item
// const deletecart = async (req, res) => {
//     try {
//       const userId = req.user.id;
//       const { productId } = req.body;
  
//       const cartItem = await Cart.findOneAndDelete({ userId, productId});
//       if (!cartItem) {
//         return res.status(404).json({ msg: 'Cart item not found' });
//       }
  
//       // Remove cart item reference from user
//       await User.findByIdAndUpdate(userId, {
//         $pull: { cartitems: cartItem._id }
//       });
  
//       res.status(200).json({
//         success: true,
//         message: 'Cart item deleted',
//         deletedCartItem: cartItem,
//       });
  
//     } catch (err) {
//       console.error(err);
//       return res.status(500).json({ msg: 'Error deleting cart item', err });
//     }
//   };
  

// // Get Cart Items
// const cartitems = async (req, res) => {
//     try {
//         const userId = req.user.id

//         const user = await Cart.find({userId}).populate('productId','name images description').populate('userId','name avatar')
//         if (!user) return res.status(404).json({ msg: 'User not found' });

//         res.status(200).json(user);

//     } catch (err) {
//         return res.status(500).json({ msg: err.message });
//     }
// };

// module.exports = { addcart, updatecart, deletecart, cartitems };



const Cart = require('../models/cartModel.js');
const Product = require('../models/productModel.js');
const userModel = require('../models/userModel.js');
// Add to Cart Controller
const addcart = async (req, res) => {
  try {
    const userId = req.user.id;
    const {id:productId, quantity } = req.body;
console.log(req.body)
    const user = await userModel.findById(userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });
    const product = await Product.findById(productId);
    console.log(product)
    if (!product) return res.status(404).json({ msg: 'Product not found' });

    let cartItem = await Cart.findOne({ userId, productId });

    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      cartItem = new Cart({ userId, productId, quantity });
      await cartItem.save();

      user.cartitems.push(cartItem._id);
      await user.save();
    }

    const populatedCartItem = await Cart.findById(cartItem._id)
      .populate('productId', 'name price images')
      .populate('userId', 'name avatar phoneNumber');
console.log(populatedCartItem)
    res.status(200).json({
      success: true,
      message: 'Cart updated',
      cartItem: populatedCartItem,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Error in addcart API', err });
  }
};
// Fetch Cart Items
const cartitems = async (req, res) => {
  try {
    const userId = req.user.id;
    const cartItems = await Cart.find({ userId }).populate('userId').populate('productId');
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart items' });
  }
};

// Remove Item from Cart
const deletecart = async (req, res) => {
  try {
    const { id } = req.body;
    const userId = req.user.id;
    console.log(id,223)

    await Cart.findByIdAndDelete(id).populate('userId').populate('productId');
    const updatedCart = await Cart.find({ userId });
    res.json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: 'Error removing item from cart' });
  }
};

module.exports = { addcart, cartitems, deletecart };

