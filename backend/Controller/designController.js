const jwt = require('jsonwebtoken')
const designDb = require('../Model/designs')
const userDB =require('../Model/user')
const DesignDB = require('../Model/designs')
require('dotenv').config()

const addDesign =async(req,res)=>{
    const tokenUserId = req.userId;
    
    try{
        const body = req.body
        if (req.userRole === 'designer'){
        const newdesign = await designDb.create({...body,owner:tokenUserId});
        await userDB.findByIdAndUpdate(tokenUserId,{$push:{designs:newdesign._id}})
        console.log(newdesign);
        return res.status(200).send("post created")
    }
    }catch(err){
        console.log(err);
    }
}


const viewDesign = async(req,res)=>{
    try{
        const userId = req.userId
        const findDesign =await designDb.find({owner:userId})
        if (!findDesign){
            return res.status(404).send("design not found")
        }
        return res.status(200).send(findDesign);

    }catch(err){
        console.log(err);
    }
}



const viewDesigndes = async(req,res)=>{
    try{
        const { id } = req.params; 
        const findDesign =await designDb.find({owner:id})
        if (!findDesign){
            return res.status(404).send("design not found")
        }
        return res.status(200).send(findDesign);

    }catch(err){
        console.log(err);
    }
}



const viewAllDesign = async (req,res)=>{
    try {
        const Design = await designDb.find()
        return res.status(200).send(Design)
    } catch (error) {
        console.error(error);
    }
}

const viewDesignById = async (req, res) => {
    const { id } = req.params; 
    
    try {
        const design = await designDb.findById(id);
        if (!design) {
          return res.status(404).json({ message: "Design not found" });
        }
        return res.status(200).json(design);
      } catch (error) {
        console.error("Error retrieving design:", error);
        return res.status(500).json({ message: "Internal Server Error" });
      }
};


const updateDesign = async (req, res) => {
    
        const { id } = req.params;
        const tokenUserId = req.userId;
        const body = req.body;

        try {
        const design = await designDb.findById(id);
        if (!design) {
            return res.status(404).json({ message: "design not found" });
        }
        if (design.owner.toString() !== tokenUserId) {
            return res.status(403).json({ message: "Not authorized to update this design" });
        }
        await design.updateOne(body);
        return res.status(200).json({ message: "design Updated" });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};


const deleteDesign = async (req, res) => {
    const { id } = req.params;
    const tokenUserId = req.userId;
    try {
        const findDesign = await designDb.findById(id);
        if (!findDesign) {
            return res.status(404).json({ message: "design not found" });
        }
        if (findDesign.owner == tokenUserId) {
            await designDb.deleteOne({ _id: id });
            await userDB.findByIdAndUpdate(tokenUserId, { $pull: { designs: id } });
            return res.status(200).json({ message: "design deleted" });
        }
        if(findDesign.owner !== tokenUserId){
        return res.status(403).json({ message: "Not authorized to delete this property" });
    }
    } catch (error) {
        res.status(500).json(error);
    }
}



const viewFavorites = async (req, res) => {
    const userId = req.userId; 
  
    try {
      const response = await designDb.find({ favorites: userId });
      return res.status(200).json(response);
    } catch (error) {
      console.error("Error retrieving favorites:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };



  const rating = async (req,res)=>{
    const _id = req.userId
    const {star,postId} = req.body
    try {
        const post = await DesignDB.findById(postId)
        let alreadyRated = post.ratings.find(rating => 
            rating.postedBy && rating.postedBy.toString() === _id.toString()
        );
    
        if (alreadyRated) {
            const updateRating = await DesignDB.updateOne(
                { _id: postId, "ratings.postedBy": _id },
                { $set: { "ratings.$.star": star } },
                { new: true }
            );
    }else{
        const rateProduct = await DesignDB.findByIdAndUpdate(postId,
            {
                $push:{
                    ratings:{
                        star:star,
                        postedBy:_id,
                    },
                },
            },
            {
                new:true,
            }
        )
    }
    
    const getAllRatings = await DesignDB.findById(postId)
    let totalRatings = getAllRatings.ratings.length;
    let ratingSum = getAllRatings.ratings.map((item)=>item.star).reduce((prev,curr)=>prev+curr,0);
    let actualRating = Math.round(ratingSum/totalRatings)
    const finalProduct = await DesignDB.findByIdAndUpdate(
        postId,
        {
            totalRatings:actualRating
        },
        {new:true}
    )
    res.json(finalProduct)
    } catch (error) {
        throw new Error(error)
    }
    }
    
module.exports ={addDesign,viewDesign,updateDesign,deleteDesign,viewAllDesign,viewDesignById,viewDesigndes,viewFavorites,rating}