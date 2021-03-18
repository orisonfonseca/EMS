const express=require('express');
const router=express.Router();
const Timesheet=require('./../models/timesheets');
const jwt = require('jsonwebtoken');
const Notify=require('./../models/noti');

router.post('/saveTimesheet',(req,res)=>{
    //console.log(req.body.id);
    let addTimesheet={
    week:req.body.week,
    monday:req.body.monday,
    tuesday:req.body.tuesday,
    wednesday:req.body.wednesday,
    thursday:req.body.thursday,
    friday:req.body.friday,
    saturday:req.body.saturday,
    sunday:req.body.sunday,
    e_id:req.body.id,
   
}

   new Timesheet(addTimesheet).save()
    .then(()=>{
        res.status("200").json({msg:"Timesheet Inserted Successfully!"});
    }).catch((err)=>{
        console.log(err);
    })
    

})


router.get('/viewTimesheet/:id', function (req, res) {
    
    Timesheet.find({e_id:req.params.id})
    .then((response)=>{
        res.status("200").json(response)   
    }).catch((err)=>{
        console.log(err);
    })
})

router.get('/viewTimesheetrep', function (req, res) {
    
    Timesheet.find({})
    .populate("e_id")
    .then((response)=>{
        res.status("200").json(response)   
    }).catch((err)=>{
        console.log(err);
    })
})

router.get('/viewTimesheet2/:id', function (req, res) {
    Timesheet.find({e_id:req.params.id})
    .then((response)=>{
        res.status("200").json(response)   
    }).catch((err)=>{
        console.log(err);
    })
})

router.get('/deleteTimesheet/:id',(req,res)=>{
    
    Timesheet.findOne({_id:req.params.id})
    .then((response)=>{
        Notify.findOne({e_id:response.e_id})
        .then((resp)=>{
            Timesheet.find({}).then((resp1)=>{
              if(resp.timesheet==resp1.length || (resp1.length-resp.timseheet)==1){
                  resp.timesheet=resp.timesheet-1;
                  resp.save().then((re1)=>{
                    console.log("yo1");
                    }).catch((err)=>{
                    console.log(err);
                    });
                }
                Timesheet.deleteOne({_id:req.params.id})
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

router.get('/editTimesheet/:id',(req,res)=>{
    Timesheet.findOne({_id:req.params.id})
    .then((response)=>{

        res.status("200").json(response) 
    })
    .catch(err=>{
        console.log(err);
    })
})

router.post('/updateTimesheet',(req,res)=>{
   // console.log(req.body.id);
   Timesheet.findOne({_id:req.body.id})
    .then((data)=>{
        data.week=req.body.week;
        data.monday=req.body.monday;
        data.tuesday=req.body.tuesday;
        data.wednesday=req.body.wednesday;
        data.thursday=req.body.thursday;
        data.friday=req.body.friday;
        data.saturday=req.body.saturday;
        data.sunday=req.body.sunday;

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