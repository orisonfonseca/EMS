const express=require('express');
const router=express.Router();
const Upraisal=require('./../models/upraisals');
const jwt = require('jsonwebtoken');
const Notify=require('./../models/noti');

router.post('/saveUpraisal',(req,res)=>{
    
    let addUpraisal={
    old_salary:req.body.old_salary,
    revised_salary:req.body.revised_salary,
    date:req.body.date,
    e_id:req.body.id,
   
}

   new Upraisal(addUpraisal).save()
    .then(()=>{
        res.status("200").json({msg:"upraisal Inserted Successfully!"});
    }).catch((err)=>{
        console.log(err);
    })
    

})


router.get('/viewUpraisal/:id', function (req, res) {
    
    Upraisal.find({e_id:req.params.id})
    .then((response)=>{
        res.status("200").json(response)   
    }).catch((err)=>{
        console.log(err);
    })
})

router.get('/viewUpraisalrep', function (req, res) {
    
    Upraisal.find({})
    .populate("e_id")
    .then((response)=>{
        res.status("200").json(response)   
    }).catch((err)=>{
        console.log(err);
    })
})

router.get('/viewUpraial2/:id', function (req, res) {
    Upraisal.find({e_id:req.params.id})
    .then((response)=>{
        res.status("200").json(response)   
    }).catch((err)=>{
        console.log(err);
    })
})


router.get('/deleteUpraisal/:id',(req,res)=>{

    Upraisal.findOne({_id:req.params.id})
    .then((response)=>{
        Notify.findOne({e_id:response.e_id})
        .then((resp)=>{
            Upraisal.find({}).then((resp1)=>{
              if(resp.upraisal==resp1.length || (resp1.length-resp.upraisal)==1){
                  resp.upraisal=resp.upraisal-1;
                  resp.save().then((re1)=>{
                    console.log("yo1");
                    }).catch((err)=>{
                    console.log(err);
                    });
                }
                Upraisal.deleteOne({_id:req.params.id})
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

router.get('/editUpraisal/:id',(req,res)=>{
    Upraisal.findOne({_id:req.params.id})
    .then((response)=>{

        res.status("200").json(response) 
    })
    .catch(err=>{
        console.log(err);
    })
})

router.post('/updateUpraisal',(req,res)=>{
    Upraisal.findOne({_id:req.body.id})
    .then((data)=>{
        data.old_salary=req.body.old_salary;
        data.revised_salary=req.body.revised_salary;
        data.date=req.body.date;
        
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