const mongoose=require('mongoose');
const Schema=mongoose.Schema

var newschema={
    role:{
        type:String,
        trim:true,
        required:true
    },
   
}
module.exports=Role=mongoose.model('roles',newschema)