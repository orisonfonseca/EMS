const express=require('express');
const router=express.Router();
const Department=require('./../models/departments');
const upload=require('./../config/multer');

router.post('/saveDepartment',upload.single("image"),(req,res)=>{
    let addDepartment={
        department:req.body.department,
        image:req.file.filename,
    }
        new Department(addDepartment).save()
        .then(()=>{
            res.status("200").json({msg:"Department Inserted Successfully!"});
        }).catch((err)=>{
            console.log(err);
        })
        
})

router.get('/viewDepartment', function (req, res) {
    
    Department.find({})
    .then((response)=>{
        res.status("200").json(response)   
    }).catch((err)=>{
        console.log(err);
    })
})

router.get('/deleteDepartment/:id',(req,res)=>{
    Leave.deleteOne({_id:req.params.id})
    .then((response)=>{
        res.status("200").json({msg:"Data Deleted Successfully!"})
    })
    .catch((err)=>{
        console.log(err);
    })
})

router.get('/editDepartment/:id',(req,res)=>{
    Department.findOne({_id:req.params.id})
    .then((response)=>{

        res.status("200").json(response) 
    })
    .catch(err=>{
        console.log(err);
    })
})

router.post('/updateDepartment',upload.single("image"),(req,res)=>{
    
   Department.findOne({_id:req.body.id})
    .then((data)=>{
        data.department=req.body.department;
        data.image=req.body.image;

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