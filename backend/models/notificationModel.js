const mongoose = require("mongoose");

const NotificationSchema = mongoose.Schema({
    message:{
        type:String
    },
    to:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    from:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    typeofnotification:{
        type:String,
        enum:['cart','comment','order','reply','replytoreply'],
        required:true
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    read:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }

})

const Notification = mongoose.model('Notification',NotificationSchema);
module.exports = Notification