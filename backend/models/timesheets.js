const mongoose=require('mongoose');
const Schema=mongoose.Schema

var newschema={
    week:{
        type:String,
        trim:true,
        required:true
    },
    monday:{
        type:String,
        trim:true,
        required:true
    },
    tuesday:{
        type:String,
        trim:true,
        required:true
    },
    wednesday:{
        type:String,
        trim:true,
        required:true
    },
    thursday:{
        type:String,
        trim:true,
        required:true
    },
    friday:{
        type:String,
        trim:true,
        required:true
    },
    saturday:{
        type:String,
        trim:true,
        required:true
    },
    sunday:{
        type:String,
        trim:true,
        required:true
    },
    e_id:{
        type:Schema.Types.ObjectId,
        ref:"employees",
    }
   
}
module.exports=Timesheet=mongoose.model('timesheets',newschema)