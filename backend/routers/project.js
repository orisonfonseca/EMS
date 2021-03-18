const express=require('express');
const router=express.Router();
const Project=require('./../models/projects');
const jwt = require('jsonwebtoken');
const Notify=require('./../models/noti');

router.post('/saveProject',(req,res)=>{
    
    let addProject={
    name:req.body.name,
    description:req.body.description,
   
}
    new Project(addProject).save()
    .then(()=>{
        res.status("200").json({msg:"Project Inserted Successfully!"});
    }).catch((err)=>{
        console.log(err);
    })
    

})


router.get('/viewProject', function (req, res) {
    
    Project.find({})
    .then((response)=>{
        res.status("200").json(response)   
    }).catch((err)=>{
        console.log(err);
    })
})

router.post('/deleteProject/:id',(req,res)=>{
    
            Project.deleteOne({_id:req.params.id})
                .then((response)=>{
                res.status("200").json({msg:"Data Deleted Successfully!"})
                })
                .catch((err)=>{
                console.log(err);
                })
        
    
})

router.get('/editProject/:id',(req,res)=>{
    Project.findOne({_id:req.params.id})
    .then((response)=>{

        res.status("200").json(response) 
    })
    .catch(err=>{
        console.log(err);
    })
})

router.post('/updateProject',(req,res)=>{
   // console.log(req.body.id);
   Project.findOne({_id:req.body.id})
    .then((data)=>{
        data.name=req.body.name;
        data.description=req.body.description;

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