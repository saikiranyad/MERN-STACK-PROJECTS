const express = require('express');
const multer = require('multer');
const authuser = require('../middlewares/userAuth.js');
const { addProduct, getProduct, getproductbyid, updateProduct, deleteproduct,getselleruserproducts, comments, replies, replytoreply,starrating, stocksold, onlygetallcomments} = require('../controllers/productController.js');

// Multer Storage
const storage = multer.memoryStorage();
const upload = multer({ storage }).array('images', 4);

const productRouter = express.Router();

productRouter.post("/addproduct", authuser, upload, addProduct);
productRouter.get("/getproducts",  getProduct);
productRouter.get("/getproduct/:id", authuser, getproductbyid);
productRouter.put("/updateproduct/:id", authuser, upload, updateProduct);
productRouter.delete("/deleteproduct/:id", authuser, deleteproduct);
productRouter.get('/getuserproduct',authuser,getselleruserproducts)
productRouter.post('/:id/comment',authuser,comments);
productRouter.post('/:id/comment/reply',authuser,replies);
productRouter.post('/:id/comment/reply/counterreply',authuser,replytoreply)
productRouter.post('/:id/starrating',authuser,starrating)
productRouter.post('/stocksold',authuser, stocksold);
productRouter.get('/allcomments',onlygetallcomments)
module.exports = productRouter;
