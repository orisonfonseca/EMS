const express=require('express');
const router=express.Router();
const Role=require('./../models/roles');
const jwt = require('jsonwebtoken');
const Notify=require('./../models/noti');

router.post('/saveRole',(req,res)=>{
    
    let addRole={
    role:req.body.role,
   
}

   new Role(addRole).save()
    .then(()=>{
        res.status("200").json({msg:"role Inserted Successfully!"});
    }).catch((err)=>{
        console.log(err);
    })
    

})


router.get('/viewRole', function (req, res) {
    
    Role.find({})
    .then((response)=>{
        res.status("200").json(response)   
    }).catch((err)=>{
        console.log(err);
    })
})

router.get('/editRole/:id',(req,res)=>{
    Role.findOne({_id:req.params.id})
    .then((response)=>{

        res.status("200").json(response) 
    })
    .catch(err=>{
        console.log(err);
    })
})

router.get('/deleteRole/:id',(req,res)=>{
        Role.deleteOne({_id:req.params.id})
            .then((response)=>{
                res.status("200").json({msg:"Data Deleted Successfully!"})
            })
            .catch((err)=>{
                console.log(err);
            })
})


router.post('/updateRole',(req,res)=>{
   // console.log(req.body.id);
   Role.findOne({_id:req.body.id})
    .then((data)=>{
        data.role=req.body.role;
        
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