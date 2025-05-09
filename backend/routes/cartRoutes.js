// const express = require('express');
// const { cartitems, addcart, deletecart, updatecart } = require('../controllers/cartController.js');
// const authuser = require('../middlewares/userAuth.js');

// const cartRouter = express.Router();


// cartRouter.get('/cart',authuser,cartitems)
// cartRouter.post('/postcart',authuser,addcart);
// cartRouter.delete('/deletecart',authuser,deletecart);
// cartRouter.put('/updatecart',authuser,updatecart);

// module.exports = cartRouter;



const express = require('express');
const { cartitems, addcart, deletecart } = require('../controllers/cartController.js');
const authuser = require("../middlewares/userAuth");

const cartRouter = express.Router();

// Routes
cartRouter.get('/cart', authuser, cartitems);
cartRouter.post('/postcart', authuser, addcart);
cartRouter.delete('/deletecart', authuser, deletecart);

module.exports = cartRouter;