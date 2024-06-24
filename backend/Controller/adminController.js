const userDB =require('../Model/user')


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


const viewDesigner = async (req,res)=>{
    try{
        const designer =await userDB.find()
        return res.status(200).send(designer)

    }catch(err){
        return res.status(500).send(err)
    }
}


const deleteDesigner =async(req,res)=>{
    try{
        const {id} = req.params
        await userDB.findByIdAndDelete(id)
        return res.status(200).send("Deleted")

    }catch(err){
        return res.status(500).send(err)
    }
}


module.exports ={viewUser,deleteUser,viewDesigner,deleteDesigner}