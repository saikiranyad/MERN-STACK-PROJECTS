const express = require('express');
const { signup, login, logout, updateuser, deleteuser, getuser } = require('../controllers/userController.js');
const authuser = require('../middlewares/userAuth.js');
const multer = require('multer');

const userRouter = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage }).single('avatar');



userRouter.post('/signup',signup);
userRouter.post('/login',login);
userRouter.get('/getuser',authuser,getuser)
userRouter.put('/update',authuser,upload,updateuser);

userRouter.post('/logout',authuser,logout);
userRouter.delete('/delete',authuser,deleteuser)

module.exports = userRouter

