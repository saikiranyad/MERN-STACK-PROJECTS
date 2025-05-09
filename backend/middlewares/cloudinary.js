const multer = require('multer');
const cloudinary = require('cloudinary').v2;




cloudinary.config({
    cloud_name:'dmsawokur',
    api_key:693684461416176,
    api_secret:'r1U_LepUlNtnYUGyfoFDmqXrpNM'
   

});
exports.upload = (file) => {
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) => {
            resolve({ url: result.url, id: result.public_id });
        });
    });
}
const storage = multer.memoryStorage();