const userModel = require("../models/userModel.js");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cloudinary = require('cloudinary').v2;
const DataUriParser = require('datauri/parser');
const path = require('path');

const Product = require('../models/productModel.js');

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


const signup = async(req,res)=>{
    const {name,email,password,phonenumber,userType} = req.body;
   
    try{
    
        const emailverify = await userModel.findOne({email});
        if(emailverify){
            res.status(400).json({success:false,message:'user already exists'})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password,salt);
        const user =new userModel( {
            name:name,
            email:email,
            password:hashedpassword,
            phonenumber:phonenumber,
            userType:userType
        })
        const newuser = await user.save();
        console.log(newuser)
       return res.status(200).json({success:true,message:'user signed up succesfull',newuser})

    }catch(err){
        res.status(400).json({success:false,message:'error in signup api',err})
    }

}


const login = async (req, res) => {
    const { email, password } = req.body;
   
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: 'User doesn\'t exist' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Email and password are not correct' });
        }

        const token = jwt.sign({ id: user._id }, 'SAIKIRAN');
        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: "None",
        });

        
      console.log(user)

        return res.status(200).json({ success: true, token, user, message: 'Login successfully done' });

    } catch (err) {
        return res.status(400).json({ success: false, message: 'Error in login API', err });
    }
}


const logout = (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: true,
            sameSite: "None",
        });
        res.status(200).json({ success: true, message: 'Logout successful' });

    } catch (err) {
        res.status(400).json({ success: false, message: 'Error in logout API', err });
    }
};


const getuser = async (req,res)=>{
    try{

        const userId = req.user?.id;
        if(!userId){
            res.status(409).json({success:false,message:'autentication failed'})
        }
        const user = await userModel.findById(userId).select('-password')
        if(!user){
            res.status(400).json({success:false,message:'user not found'})
        }
       return res.status(200).json({success:true,user})

    }catch(err){
        res.status(400).json({success:false,message:'error in get user api',err})
    }

}

// const updateuser = async (req, res) => {
//     try {
//       const userId = req.user.id;
//       if (!userId) {
//         return res.status(401).json({ success: false, message: 'User is not authenticated' });
//       }
  
//       const { name, phonenumber } = req.body;
  
//       const updatedFields = {};
//       if (name) updatedFields.name = name;
//       if (phonenumber) updatedFields.phonenumber = phonenumber;
  
//       // If image upload is expected
//       if (req.file) {
//         const imageBuffer = req.file.buffer;
        
//       }
  
//       const user = await userModel.findByIdAndUpdate(
//         userId,
//         updatedFields,
//         { new: true }
//       ).select('-password');
  
//       if (!user) {
//         return res.status(404).json({ success: false, message: 'User not found' });
//       }
  
//       return res.status(200).json({
//         success: true,
//         message: 'User updated successfully',
//         user
//       });
//     } catch (err) {
//       console.error('Update error:', err);
//       return res.status(500).json({ success: false, message: 'Error in update user API', error: err.message });
//     }
//   };
  


const updateuser = async (req, res) => {
    try {
      const userId = req.user.id;
      if (!userId) {
        return res.status(401).json({ success: false, message: 'User is not authenticated' });
      }
  
      const { name, phonenumber } = req.body;
  
      const updatedFields = {};
      if (name) updatedFields.name = name;
      if (phonenumber) updatedFields.phonenumber = phonenumber;
  
      // If image file is present, convert buffer to Data URI and upload to Cloudinary
      if (req.file) {
        const fileUri = getDataUri(req.file); // <-- convert to base64
        const uploadResult = await cloudinary.uploader.upload(fileUri.content, {
          folder: 'user_profiles'
        });
        updatedFields.avatar = uploadResult.secure_url; // store the image URL
      }
  
      const user = await userModel.findByIdAndUpdate(userId, updatedFields, { new: true }).select('-password');
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
  
      return res.status(200).json({
        success: true,
        message: 'User updated successfully',
        user
      });
    } catch (err) {
      console.error('Update error:', err);
      return res.status(500).json({ success: false, message: 'Error in update user API', error: err.message });
    }
  };
  

  const deleteuser = async (req, res) => {
    try {
        const userId = req.user.id;

        if (!userId) {
            return res.status(409).json({ success: false, message: 'User not authenticated' });
        }

        // Step 1: Delete all products associated with the user
        await Product.deleteMany({ userId: userId });

        // Step 2: Delete the user
        const deletedUser = await userModel.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        return res.status(200).json({ success: true, message: 'User and associated products deleted' });

    } catch (err) {
        return res.status(400).json({ success: false, message: 'Error in delete user API', err });
    }
};
module.exports = {signup,login,logout,getuser,updateuser,deleteuser}