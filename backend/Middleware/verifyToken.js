const {error} = require('console')
const jwt = require('jsonwebtoken')


const verifyToken = (req,res,next)=>{
    console.log("inside jwt middleware")
    console.log(req.headers.authorization.split(" "))[1]
    try{
        const token=req.headers.authorization.split(" ")[1]
        if(token){
            const result=jwt.verify(token,process.env.JWT_TOKEN)
            console.log(result)
            req.payload=result.userId
            next()
        }
        else{
            res.status(406).json("Please Login First!")
        }
    }
    catch{
        res.status(406).json("Please Login")
    }

}
module.exports=verifyToken