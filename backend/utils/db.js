const mongoose = require('mongoose');



const connecttodb = async()=>{
    try{
        // const connection = await mongoose.connect('mongodb+srv://sai:sai@cluster0.6kod3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
           const connection = await mongoose.connect(process.env.MONGO_URI)
     
        console.log(`mongodb is  connected`)

    }catch(err){
        console.log(`db is not connected the error is ${err}`)
    }
}
module.exports = connecttodb;