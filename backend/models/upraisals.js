const mongoose=require('mongoose');
const Schema=mongoose.Schema

var newschema={
    old_salary:{
        type:String,
        trim:true,
        required:true
    },
    revised_salary:{
        type:String,
        trim:true,
        required:true
    },
    date:{
        type:Date,
        trim:true,
        required:true
    },
    e_id:{
        type:Schema.Types.ObjectId,
        ref:"employees",
    }
   
}
module.exports=Upraisal=mongoose.model('upraisals',newschema)