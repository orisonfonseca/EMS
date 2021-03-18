const express=require('express');
const router=express.Router();
const Leave=require('./../models/leaves');
const jwt = require('jsonwebtoken');

router.post('/saveLeave',(req,res)=>{
   
   let addLeave={
    from:req.body.from,
    to:req.body.to,
    reason:req.body.reason,
    status:req.body.status,
    description:req.body.description,
    e_id:req.body.id,
   
}
    new Leave(addLeave).save()
    .then(()=>{
        res.status("200").json({msg:"Leave Inserted Successfully!"});
    }).catch((err)=>{
        console.log(err);
    })
    

})


router.get('/viewLeave/:id', function (req, res) {
    
    Leave.find({e_id:req.params.id})
    .then((response)=>{
        res.status("200").json(response)   
    }).catch((err)=>{
        console.log(err);
    })
})

router.get('/viewLeave2/:id', function (req, res) {
    
    Leave.find({e_id:req.params.id})
    .then((response)=>{
        res.status("200").json(response)   
    }).catch((err)=>{
        console.log(err);
    })
})

router.get('/viewLeaverep', function (req, res) {
    
    Leave.find({})
    .populate("e_id")
    .then((response)=>{
        res.status("200").json(response)   
    }).catch((err)=>{
        console.log(err);
    })
})

router.get('/viewLeaverep2', function (req, res) {
    
    Leave.find({status:"Pending"})
    .populate("e_id")
    .then((response)=>{
        res.status("200").json(response)   
    }).catch((err)=>{
        console.log(err);
    })
})

router.get('/deleteLeave/:id',(req,res)=>{
    Leave.deleteOne({_id:req.params.id})
    .then((response)=>{
        res.status("200").json({msg:"Data Deleted Successfully!"})
    })
    .catch((err)=>{
        console.log(err);
    })
})

router.get('/editLeave/:id',(req,res)=>{
    Leave.findOne({_id:req.params.id})
    .then((response)=>{

        res.status("200").json(response) 
    })
    .catch(err=>{
        console.log(err);
    })
})

router.post('/updateLeave',(req,res)=>{
   Leave.findOne({_id:req.body.id})
    .then((data)=>{
        data.from=req.body.from;
        data.description=req.body.description;
        data.to=req.body.to;
        data.reason=req.body.reason;
        data.status=req.body.status;

        data.save()
        .then((result)=>{
            res.status("200").json({msg:"data updated Successfully!"});
        }).catch((err)=>{
            console.log(err);
        })

    })
    .catch((err)=>{
        console.log(err);
    })
})
module.exports=router;