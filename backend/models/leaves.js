const mongoose=require('mongoose');
const Schema=mongoose.Schema

var newschema={
    from:{
        type:Date,
        trim:true,
        required:true
    },
    to:{
        type:Date,
        trim:true,
        required:true
    },
    reason:{
        type:String,
        trim:true,
        required:true
    },
    description:{
        type:String,
        trim:true,
        required:true
    },
    status:{
        type:String,
        trim:true,
        required:true
    },
    e_id:{
        type:Schema.Types.ObjectId,
        ref:"employees",
    }
   
}
module.exports=Leave=mongoose.model('leaves',newschema)