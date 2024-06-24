const userDB =require('../Model/user')
const jwt = require('jsonwebtoken')
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
    try{
        const {userId} =req.params
        const userData=req.body
        const updateduser =await userDB.findByIdAndUpdate(userId,userData,{new:true})
        return res.status(200).send(userData)

    }catch(err){
        return res.status(500).send(err)
    }
}


module.exports={updateUser,viewUser,deleteUser}