const mongoose = require ('mongoose')
const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const ContactDB =mongoose.model('contact_us',schema)
module.exports=ContactDB