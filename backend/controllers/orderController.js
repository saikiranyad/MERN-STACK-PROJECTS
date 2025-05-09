// const mongoose = require('mongoose')
// const { sendnotification } = require('../Helpers/Notification');
// const Order = require('../models/orderModel');
// const Product = require('../models/productModel.js');

// // 1. Create an order
// // const createOrder = async (req, res) => {
// //   try {
// //     const { productId, quantity, shippingAddress, paymentMethod, price } = req.body;
// // console.log(req.body.products[0])
// //     // Check if product exists
// //     const product = await Product.findById(req.body)
// //     console.log(product)
// //     // if (!product) {
// //     //   return res.status(404).json({ success: false, message: 'Product not found' });
// //     // }

// //     // Check if payment method is supported
// //     if (paymentMethod !== 'Cash on Delivery') {
// //       return res.status(400).json({ success: false, message: 'Only COD is supported right now.' });
// //     }

// //     // Create new order
// //     const order = new Order({
// //       userId: req.user.id,
// //       productId,
// //       quantity,
// //       shippingAddress,
// //       paymentMethod,
// //       price,
// //       isPaid: false,
// //       status: 'Pending'
// //     });

// //     await order.save();

// //     // Notify seller if not a self-order
// //     // const sellerId = product.userId._id.toString(); 
// //     // if (sellerId !== req.user.id) {
// //     //   await sendnotification(sellerId, req.user.id, 'order', productId);
// //     // }

// //     return res.status(201).json({ success: true, message: 'Order placed successfully', order });
// //   } catch (error) {
// //     console.error('Create Order Error:', error);
// //     return res.status(500).json({ success: false, message: 'Server Error' });
// //   }
// // };




// const createOrder = async (req, res) => {
//   try {
//     const { products, shippingAddress, paymentMethod, price } = req.body;

//     if (!products || !Array.isArray(products) || products.length === 0) {
//       return res.status(400).json({ success: false, message: 'Products array is required' });
//     }

//     const validatedProducts = [];

//     for (const item of products) {
//       let productId, quantity;

//       if (typeof item === 'string') {
//         // case: ["productId1", "productId2"]
//         productId = item;
//         quantity = 1;
//       } else if (typeof item === 'object') {
//         // case: [{ productId, quantity }]
//         productId = item.productId;
//         quantity = item.quantity || 1;
//       }

//       // Validate ObjectId
//       if (!mongoose.Types.ObjectId.isValid(productId)) {
//         return res.status(400).json({ success: false, message: `Invalid productId: ${productId}` });
//       }

//       const productExists = await Product.findById(productId);
//       if (!productExists) {
//         return res.status(404).json({ success: false, message: `Product not found: ${productId}` });
//       }

//       validatedProducts.push({ productId, quantity });
//     }

//     // Check payment method
//     if (paymentMethod !== 'Cash on Delivery') {
//       return res.status(400).json({ success: false, message: 'Only Cash on Delivery is supported at the moment.' });
//     }

//     const order = new Order({
//       userId: req.user.id,
//       products: validatedProducts,
//       shippingAddress,
//       paymentMethod,
//       price,
//       isPaid: false,
//       status: 'Pending'
//     });

//     await order.save();

//     return res.status(201).json({ success: true, message: 'Order placed successfully', order });
//   } catch (error) {
//     console.error('Create Order Error:', error);
//     return res.status(500).json({ success: false, message: 'Server Error', error: error.message });
//   }
// };


// // 2. Get all orders (admin or seller)
// const getAllOrders = async (req, res) => {
//   try {
//     const orders = await Order.find().populate('userId').populate('productId');
//     res.status(200).json({ success: true, orders });
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Error fetching orders', error: error.message });
//   }
// };

// // 3. Get orders by logged-in user
// const getUserOrders = async (req, res) => {
//   try {
//     const userId = req.user.id;

//     const orders = await Order.find({ userId })
//       .populate('products.productId') // populate nested products
//       .sort({ createdAt: -1 }); // newest first

//     res.status(200).json({ success: true, orders });
//   } catch (error) {
//     console.error('Fetch Orders Error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Error fetching user orders',
//       error: error.message
//     });
//   }
// };

// // 2. Get a single order by ID
// const getSingleOrder = async (req, res) => {
//   try {
//     const order = await Order.findById(req.params.id)
//       .populate('userId')
//       .populate('products.productId');

//     if (!order) {
//       return res.status(404).json({ success: false, message: 'Order not found' });
//     }

//     res.status(200).json({ success: true, order });
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Error fetching order', error: error.message });
//   }
// };

// // 3. Update order status
// const updateOrderStatus = async (req, res) => {
//   try {
//     const { status, deliveredAt } = req.body;

//     const order = await Order.findById(req.params.id);

//     if (!order) {
//       return res.status(404).json({ success: false, message: 'Order not found' });
//     }

//     order.status = status || order.status;

//     if (status === 'Delivered' && !order.deliveredAt) {
//       order.deliveredAt = deliveredAt || new Date();
//     }

//     await order.save();

//     res.status(200).json({ success: true, message: 'Order updated', order });
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Error updating order', error: error.message });
//   }
// };

// // 4. Delete an order
// const deleteOrder = async (req, res) => {
//   try {
//     const order = await Order.findByIdAndDelete(req.params.id);

//     if (!order) {
//       return res.status(404).json({ success: false, message: 'Order not found' });
//     }

//     res.status(200).json({ success: true, message: 'Order deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Error deleting order', error: error.message });
//   }
// };

// module.exports = {
//   createOrder,
//   getAllOrders,
//   getUserOrders,
//   getSingleOrder,
//   updateOrderStatus,
//   deleteOrder
// };








const mongoose = require('mongoose');
const Order = require('../models/orderModel');
const Product = require('../models/productModel');
const userModel = require("../models/userModel.js");

// 1. Create Order
const createOrder = async (req, res) => {
  try {
    const userId = req.user.id
    const { products, shippingAddress, paymentMethod, price } = req.body;
console.log(req.body)
    if (!products || !Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ success: false, message: 'Products array is required' });
    }
    const user = await userModel.findById(userId)

    const validatedProducts = [];

    for (const item of products) {
      let productId, quantity;

      if (typeof item === 'string') {
        productId = item;
        quantity = 1;
      } else if (typeof item === 'object') {
        productId = item.productId;
        quantity = item.quantity || 1;
      }

      if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({ success: false, message: `Invalid productId: ${productId}` });
      }

      const productExists = await Product.findById(productId);
      if (!productExists) {
        return res.status(404).json({ success: false, message: `Product not found: ${productId}` });
      }

      validatedProducts.push({ productId, quantity });
    }

    if (paymentMethod !== 'Cash on Delivery') {
      return res.status(400).json({ success: false, message: 'Only Cash on Delivery is supported at the moment.' });
    }

    const order = new Order({
      userId: req.user.id,
      products: validatedProducts,
      shippingAddress,
      paymentMethod,
      price,
      isPaid: false,
      status: 'Pending'
    });
    user.orders.push(order._id)

    await order.save();
    await user.save();
    console.log(order,275)

    return res.status(201).json({ success: true, message: 'Order placed successfully', order,user });
  } catch (error) {
    console.error('Create Order Error:', error);
    return res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

// 2. Get All Orders (Admin)
const getAllOrders = async (req, res) => {
  try {
    const userId = req.user.id
    const orders = await Order.find({userId})
      .populate('userId', 'name email')
      .populate('products.productId');

    res.status(200).json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching orders', error: error.message });
  }
};

// 3. Get Orders by Logged-in User
const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id })
      .populate('products.productId')
      .sort({ createdAt: -1 });
      console.log(orders)

    res.status(200).json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching user orders', error: error.message });
  }
};

// 4. Get a Single Order
const getSingleOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('userId', 'name email')
      .populate('products.productId');

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    res.status(200).json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching order', error: error.message });
  }
};

// 5. Update Order Status
const updateOrderStatus = async (req, res) => {
  try {
    const { status, deliveredAt } = req.body;

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    order.status = status || order.status;

    if (status === 'Delivered' && !order.deliveredAt) {
      order.deliveredAt = deliveredAt || new Date();
    }

    await order.save();

    res.status(200).json({ success: true, message: 'Order updated', order });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating order', error: error.message });
  }
};

// 6. Delete Order
const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    res.status(200).json({ success: true, message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting order', error: error.message });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getUserOrders,
  getSingleOrder,
  updateOrderStatus,
  deleteOrder
};

