const jwt = require('jsonwebtoken')
const designDb = require('../Model/designs')
require('dotenv').config()

const addDesign =async(req,res)=>{
    try{
        const body = req.body
        const newdesign = await designDb.create(body)
        return res.status(200).send("post created")
    }catch(err){
        console.log(err);
    }
}


const viewDesign = async(req,res)=>{
    try{
        const findDesign =await designDb.find()
        if (!findDesign){
            return res.status(404).send("design not found")
        }
        return res.status(200).send(findDesign);

    }catch(err){
        console.log(err);
    }
}

const updateDesign = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        
        const design = await designDb.findById(id);
        if (design) {
            await design.updateOne(body);
            return res.status(200).send("Updated");
        }
        return res.status(404).send("Not Found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};


const deleteDesign = async(req,res)=>{
    const {id} = req.params
    const tokenUserId = req.token
    try {
        const findDesign = await designDb.deleteOne({_id:id})
        if(findDesign.userId != tokenUserId){
            return res.status(403).json({ message: "Not Authorized!" });
      }
      await designDb.deleteOne({id:id})
      res.status(200).json({ message: "Post deleted" });

    } catch (error) {
        res.status(500).json(error);

    }
}

module.exports ={addDesign,viewDesign,updateDesign,deleteDesign}