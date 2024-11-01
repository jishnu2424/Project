const userDB =require('../Model/user')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const designDB = require('../Model/designs')
const bcrypt = require('bcrypt')
require ('dotenv').config()


const viewUser = async (req,res)=>{
    try{
        const users =await userDB.find()
        return res.status(200).send(users)

    }catch(err){
        return res.status(500).send(err)
    }
}


const viewuserId = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userDB.findById(id);
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(200).json(user);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal server error' });
    }
};



const deleteUser =async(req,res)=>{
    try{
        const {id} = req.params
        await userDB.findByIdAndDelete(id)
        return res.status(200).send("Deleted")

    }catch(err){
        return res.status(500).send(err)
    }
}

const updateUser = async (req,res)=>{
    try {
        const { id } = req.params;
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: "Invalid ID format" });
        }

        const userData = req.body;
        
        const updateduser = await userDB.findByIdAndUpdate(id, userData, { new: true });

        if (!updateduser) {
            return res.status(404).send({ message: "Designer not found" });
        }

        console.log(updateduser);
        return res.status(200).send(updateduser);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}

const addToFavorites = async (req, res) => {
    const { id } = req.params;
    const  userId  = req.userId; 
    try {
        const updateddesign = await designDB.findByIdAndUpdate(
            id,
            { $push: { favorites: userId } }, 
            { new: true }
        );
  
        if (!updateddesign) {
            return res.status(404).json({ error: 'Property not found' });
        }
  
        res.status(200).json(updateddesign);
    } catch (error) {
        console.error('Error adding to favorites:', error);
        res.status(500).json({ error: 'Server error' });
    }
  };

  const deletFromFavorites = async (req,res)=>{
    const { id } = req.params;
    const userId = req.userId;

    try {
      const user = await designDB.findByIdAndUpdate(
        id,
        { $pull: { favorites: userId } },
        { new: true }
      );
      res.status(200).json(user);
      
    } catch (error) {
        console.error(error);
    }
  }


module.exports={updateUser,viewUser,deleteUser,addToFavorites,deletFromFavorites,viewuserId}