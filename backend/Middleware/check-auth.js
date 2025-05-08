const jwt = require("jsonwebtoken");
const secretKey = process.env.ACCESS_TOKEN_SECRET;

const checkAuth=(req,res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        console.log("token",token);
        const decoded = jwt.verify(token, secretKey);
        console.log("verify",decoded);
                next();
    }
    catch(error){
        return res.status(401).json({
            message:"Invalid Token !!"
        })
    }
}
module.exports = checkAuth;