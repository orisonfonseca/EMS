const mongoose=require('mongoose');
const Schema=mongoose.Schema

var newschema={
    name:{
        type:String,
        trim:true,
        required:true
    },
    description:{
        type:String,
        trim:true,
        required:true
    },
   
   
}
module.exports=Project=mongoose.model('projects',newschema)