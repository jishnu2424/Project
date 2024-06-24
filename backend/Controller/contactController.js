const ContactDB = require('../Model/contactUs')

const addReview= async(req,res)=>{
   try {
    const contactBody = req.body
    const response = await ContactDB.create(contactBody)
    return res.status(200).send(response)
    
   } catch (error) {
    console.log(error)
    return res.status(500).send("Internal server error")
   }
}


const viewContact=async(req,res)=>{
    try {
        const response = await ContactDB.find()
        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send("internal server error") 
    }
}


module.exports={addReview,viewContact}