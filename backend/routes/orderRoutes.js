const express = require('express');
const orderrouter = express.Router();
const {
  createOrder,
  getAllOrders,
  getUserOrders,
  getSingleOrder,
  updateOrderStatus,
  deleteOrder
} = require('../controllers/orderController');
const authuser = require('../middlewares/userAuth');


orderrouter.post('/create', authuser, createOrder);
orderrouter.get('/sellerorderinformation', authuser, getAllOrders); // Only admin or seller maybe
orderrouter.get('/myorders', authuser, getUserOrders);
orderrouter.get('/:id', authuser, getSingleOrder);
orderrouter.put('/:id', authuser, updateOrderStatus);
orderrouter.delete('/:id', authuser, deleteOrder);

module.exports = orderrouter;
