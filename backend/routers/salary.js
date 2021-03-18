const express=require('express');
const router=express.Router();
const Salary=require('./../models/salaries');
const jwt = require('jsonwebtoken');
const Notify=require('./../models/noti');

router.post('/saveSalary',(req,res)=>{
   // console.log(req.body.net);
   let addSalary={
    basic:req.body.basic,
    allowance:req.body.allowance,
    net:req.body.net,
    e_id:req.body.id,
   
}

   new Salary(addSalary).save()
    .then(()=>{
        res.status("200").json({msg:"Salary Inserted Successfully!"});
    }).catch((err)=>{
        console.log(err);
    })
    

})


router.get('/viewSalary/:id', function (req, res) {
    
    Salary.find({e_id:req.params.id})
    .then((response)=>{
        res.status("200").json(response)   
    }).catch((err)=>{
        console.log(err);
    })
})
router.get('/viewSalaryrep', function (req, res) {
    
    Salary.find({})
    .populate("e_id")
    .then((response)=>{
        res.status("200").json(response)   
    }).catch((err)=>{
        console.log(err);
    })
})

router.get('/viewSalary2/:id', function (req, res) {
    Salary.find({e_id:req.params.id})
    .then((response)=>{
        res.status("200").json(response)   
    }).catch((err)=>{
        console.log(err);
    })
})

router.get('/deleteSalary/:id',(req,res)=>{
    
    Salary.findOne({_id:req.params.id})
    .then((response)=>{
        Notify.findOne({e_id:response.e_id})
        .then((resp)=>{
            Salary.find({}).then((resp1)=>{
              if(resp.salary==resp1.length || (resp1.length-resp.salary)==1){
                  resp.salary=resp.salary-1;
                  resp.save().then((re1)=>{
                    console.log("yo1");
                    }).catch((err)=>{
                    console.log(err);
                    });
                }
                  Salary.deleteOne({_id:req.params.id})
                  .then((re)=>{
                    res.status("200").json({msg:"Data Deleted Successfully!"})
                      console.log("yo2");
                  }).catch((err)=>{
                    console.log(err);
                });
               
        
            }).catch((err)=>{
                console.log(err);
            });
        })
        .catch((err)=>{
            console.log(err);
        })
        
    })
    .catch((err)=>{
        console.log(err);
    })
})

router.get('/editSalary/:id',(req,res)=>{
    Salary.findOne({_id:req.params.id})
    .then((response)=>{

        res.status("200").json(response) 
    })
    .catch(err=>{
        console.log(err);
    })
})

router.post('/updateSalary',(req,res)=>{
   // console.log(req.body.id);
   Salary.findOne({_id:req.body.id})
    .then((data)=>{
        data.basic=req.body.basic;
        data.allowance=req.body.allowance;
        data.net=req.body.net;
        
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