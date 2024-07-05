const mongoose = require ('mongoose')
const schema = new mongoose.Schema({
    designType:{
        type:String,
        enum:['Painting','Electronic Art','Drawing','Wall Painting','AI Arts','Contemporary Art','Wall Painting','Pencil Drawing','Modern Art','Others'],
        required:true
    },
    designerName:{
        type:String,
        required:true
    },
    designName:{
        type:String,
        required:true
    },
    designDescription:{
        type:String,
        required:true
    },
    design:{
        type:[String]
        
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    favorites: 
    [{ type: mongoose.Schema.Types.ObjectId, ref: 'users' }],
})

const DesignDB =mongoose.model('designs',schema)
module.exports=DesignDB