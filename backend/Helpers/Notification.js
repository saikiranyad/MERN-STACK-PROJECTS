const Notification = require("../models/notificationModel");



const sendnotification = async(touserid,fromuserid,typeofnotification,productid)=>{
    try{
        const messages = {
            newreciepe:"posted new product",
            // like:"like the product",
            comment:"comment on your product",
            replytoreply:"replied to your reply",
            order:'placed an order on your product'
        }
        const newNotification = new Notification({
            to:touserid,
            from:fromuserid,
            typeofnotification,
            message:messages[typeofnotification],
            product:productid
        })
        await newNotification.save();
        // console.log(newNotification)


    }catch(err){
        console.log(err)
    }
}

module.exports = {sendnotification}