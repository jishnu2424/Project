const designerDB =require('../Model/user')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const { log } = require('console')
require ('dotenv').config

const viewDesigner = async (req,res)=>{
    try{
        const designer =await designerDB.find()
        return res.status(200).send(designer)

    }catch(err){
        return res.status(500).send(err)
    }
}


const deleteDesigner =async(req,res)=>{
    try{
        const {id} = req.params
        await designerDB.findByIdAndDelete(id)
        return res.status(200).send("Deleted")

    }catch(err){
        return res.status(500).send(err)
    }
}

const updateDesigner = async (req, res) => {
    try {
        const { id } = req.params;
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: "Invalid ID format" });
        }

        const designerData = req.body;
        
        const updatedDesigner = await designerDB.findByIdAndUpdate(id, designerData, { new: true });

        if (!updatedDesigner) {
            return res.status(404).send({ message: "Designer not found" });
        }

        console.log(updatedDesigner);
        return res.status(200).send(updatedDesigner);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
};


module.exports={updateDesigner,viewDesigner,deleteDesigner}