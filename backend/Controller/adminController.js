const userDB =require('../Model/user')


const viewUser = async (req,res)=>{
    try{
        const users =await userDB.find({role:"user"})
        return res.status(200).send(users)

    }catch(err){
        return res.status(500).send(err)
    }
}


const deleteUser =async(req,res)=>{
    try {
        const { id } = req.params;
        const user = await userDB.findById(id);
    
        if (!user) {
          return res.status(404).send("User Not Found");
        }
    
        if (user.role === 'user') {
          await userDB.findByIdAndDelete(id);
          return res.status(200).send("Deleted");
        }
    
        return res.status(403).send("Unauthorized: Not a buyer");
      } catch (error) {
        console.error("Error deleting buyer:", error);
        return res.status(500).send("Internal Server Error");
      }
}


const viewDesigner = async (req,res)=>{
    try{
        const designer =await userDB.find({role:"designer"})
        return res.status(200).send(designer)

    }catch(err){
        return res.status(500).send(err)
    }
}


const deleteDesigner =async(req,res)=>{
    try {
        const { id } = req.params;
        const user = await userDB.findById(id);
    
        if (!user) {
          return res.status(404).send("User Not Found");
        }
    
        if (user.role === 'designer') {
          await userDB.findByIdAndDelete(id);
          return res.status(200).send("Deleted");
        }
    
        return res.status(403).send("Unauthorized: Not a buyer");
      } catch (error) {
        console.error("Error deleting buyer:", error);
        return res.status(500).send("Internal Server Error");
      }
}


module.exports ={viewUser,deleteUser,viewDesigner,deleteDesigner}