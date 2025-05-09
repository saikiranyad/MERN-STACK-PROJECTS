const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        enum: ['Buyer', 'Seller'],
        required: true
    },
    cartitems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cart'
           
        }
    ],
    saveditems:{
        type:Array,
        default:[]
    },
    avatar:{
        type:String,
        default:''
    },
    productsdetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    orders:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Order'
    }],
    comments:{
        type:Array,
        default:[]
    }

},{timestamps:true});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
