const jwt = require("jsonwebtoken");


const authuser = async(req,res,next)=>{
    try{
        // const token  = req.cookies.token || req.header("Authorization")?.replace("Bearer","");
        const token  = req.cookies.token || req.header("Authorization")?.replace("Bearer","")
        if(!token){
            return res.status(401).json({success:false,message:"Unauthorized token"});
        }
        jwt.verify(token,"SAIKIRAN",(err,decoded)=>{
            if(err){
                return res.status(403).json({success:false,message:"invalid token"})
            }
            req.user = decoded;
            next();
        })


    }catch(err){
        res.status(500).json({success:false,message:'Internal server error'})
    }
}


module.exports = authuser