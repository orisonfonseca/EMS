const mongoose=require('mongoose');
const Schema=mongoose.Schema

var newschema={
    basic:{
        type:Number,
        trim:true,
        required:true
    },
    allowance:{
        type:Number,
        trim:true,
        required:true
    },
    net:{
        type:Number,
        trim:true,
        required:true
    },
    e_id:{
        type:Schema.Types.ObjectId,
        ref:"employees",
    }
   
}
module.exports=Salary=mongoose.model('salaries',newschema)