const mongoose=require('mongoose');
const Schema=mongoose.Schema

var newschema= {
    salary:{
        type:Number,
        trim:true,
        required:true
    },
    upraisal:{
        type:Number,
        trim:true,
        required:true
    },
    timesheet:{
        type:Number,
        trim:true,
        required:true
    },
    leave:{
        type:Number,
        trim:true,
        required:true
    },
    project:{
        type:Number,
        trim:true,
        required:true
    },
    role:{
        type:Number,
        trim:true,
        required:true
    },
    e_id:{
        type:Schema.Types.ObjectId,
        ref:"employees",
    }
   
}
module.exports=Notify=mongoose.model('notis',newschema)