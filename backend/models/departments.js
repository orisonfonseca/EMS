const mongoose=require('mongoose');

var newschema={
    department:{
        type:String,
        trim:true,
        required:true
    },
    image:{
        type:String,
        trim:true,
        required:true
    }
   
}
module.exports=Department=mongoose.model('departments',newschema)