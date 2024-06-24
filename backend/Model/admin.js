const mongoose = require ('mongoose')
const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const adminDB =mongoose.model('admin',schema)
module.exports=adminDB