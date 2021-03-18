const express=require('express');
const router=express.Router();
const Employee=require('./../models/employees');
const Upraisal=require('./../models/upraisals');
const Leave=require('./../models/leaves');
const Role=require('./../models/roles');
const Salary=require('./../models/salaries');
const Timesheet=require('./../models/timesheets');
const Project=require('./../models/projects');
const Notify=require('./../models/noti');

ObjectId = require('mongodb').ObjectID;

const upload=require('./../config/multer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/saveEmployee',upload.single("image"),(req,res)=>{
    let addEmployee={
    name:req.body.name,
    email:req.body.email,
    gender:req.body.gender,
    address:req.body.address,
    image:req.file.filename,
    position:req.body.position,
    reportto:req.body.reportto,
    employmenttype:req.body.employmenttype,
    startdate:req.body.startdate,
    dob:req.body.dob,
    password:req.body.password,
    d_id:req.body.d_id,
    mobile:req.body.mobile,
}
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
        addEmployee.password=hash;
        new Employee(addEmployee).save()
    .then((resp)=>{
        res.status("200").json({msg:"emp Inserted Successfully!"});
        let add={
            salary:0,
            upraisal:0,
            timesheet:0,
            leave:0,
            project:0,
            role:0,
            e_id:resp._id,
        }
        new Notify(add).save()
        .then(()=>{
            console.log("yo")
        }).catch((err)=>{
            console.log(err);
        })
    }).catch((err)=>{
        console.log(err);
    })
    })
})



})

router.get('/viewEmployee', function (req, res) {
    Employee.find({})
    .populate("d_id")
    .then((response)=>{
        res.status("200").json(response)   
    }).catch((err)=>{
        console.log(err);
    })
})
router.get('/noti/:id', function (req, res) {
    Notify.findOne({e_id:req.params.id})
    .then((response)=>{
        res.status("200").json(response)   
    }).catch((err)=>{
        console.log(err);
    })
})

router.post('/noti2', function (req, res) {
    Notify.findOne({e_id:req.body.id})
    .then((response3)=>{
        response3.upraisal=req.body.data;
        response3.save()
        .then((resp)=>{
            res.status("200").json(resp)   
        }).catch((err)=>{
        console.log(err);
    })
    }).catch((err)=>{
        console.log(err);
    })
})

router.post('/noti3', function (req, res) {
    Notify.findOne({e_id:req.body.id})
    .then((response3)=>{
        response3.timesheet=req.body.data;
        response3.save()
        .then((resp)=>{
            res.status("200").json(resp)   
        }).catch((err)=>{
        console.log(err);
    })
    }).catch((err)=>{
        console.log(err);
    })
})
router.post('/noti4', function (req, res) {
    Notify.findOne({e_id:req.body.id})
    .then((response3)=>{
        response3.salary=req.body.data;
        response3.save()
        .then((resp)=>{
            res.status("200").json(resp)   
        }).catch((err)=>{
        console.log(err);
    })
    }).catch((err)=>{
        console.log(err);
    })
})

router.post('/noti5', function (req, res) {
    Notify.findOne({e_id:req.body.id})
    .then((response3)=>{
        response3.project=req.body.data;
        response3.save()
        .then((resp)=>{
            res.status("200").json(resp)   
        }).catch((err)=>{
        console.log(err);
    })
    }).catch((err)=>{
        console.log(err);
    })
})

router.post('/noti6', function (req, res) {
    Notify.findOne({e_id:req.body.id})
    .then((response3)=>{
        response3.role=req.body.data;
        response3.save()
        .then((resp)=>{
            res.status("200").json(resp)   
        }).catch((err)=>{
        console.log(err);
    })
    }).catch((err)=>{
        console.log(err);
    })
})

router.get('/viewEmployee2/:id', function (req, res) {
    Employee.find({_id:req.params.id})
    .populate("d_id")
    .then((response)=>{
        res.status("200").json(response)   
    }).catch((err)=>{
        console.log(err);
    })
})

router.get('/deleteEmployee/:id',(req,res)=>{
    
    Employee.deleteOne({_id:req.params.id})
    .then((response)=>{
        console.log("done");
    })
    .catch((err)=>{
        console.log(err);
    })
    Upraisal.deleteMany({e_id:req.params.id})
    .then((response)=>{
        console.log("done");
    })
    .catch((err)=>{
        console.log(err);
    })
    Leave.deleteMany({e_id:req.params.id})
    .then((response)=>{
        console.log("done");
    })
    .catch((err)=>{
        console.log(err);
    })
    Project.deleteMany({e_id:req.params.id})
    .then((response)=>{
        console.log("done");
    })
    .catch((err)=>{
        console.log(err);
    })
    Role.deleteMany({e_id:req.params.id})
    .then((response)=>{
        console.log("done");
    })
    .catch((err)=>{
        console.log(err);
    })
    Timesheet.deleteMany({e_id:req.params.id})
    .then((response)=>{
        console.log("done");
    })
    .catch((err)=>{
        console.log(err);
    })
    Salary.deleteMany({e_id:req.params.id})
    .then((response)=>{
        res.status("200").json({msg:"Data Deleted Successfully!"})
    })
    .catch((err)=>{
        console.log(err);
    })
    Notify.deleteOne({e_id:req.params.id})
    .then((response)=>{
        res.status("200").json({msg:"Data Deleted Successfully!"})
        console.log("done22");
    })
    .catch((err)=>{
        console.log(err);
    })
})

router.get('/editEmployee/:id',(req,res)=>{
    Employee.findOne({_id:req.params.id})
    .then((response)=>{

        res.status("200").json(response) 
    })
    .catch(err=>{
        console.log(err);
    })
})

router.post('/updateEmployee',upload.single("image"),(req,res)=>{
    var img="";
	if(req.file){
		img=req.file.filename;
	}else{
		img=req.body.image;
	}
    Employee.findOne({_id:req.body.id})
    .then((data)=>{
        data.name=req.body.name;
        data.email=req.body.email;
        data.gender=req.body.gender;
        data.address=req.body.address;
        data.image=img;
        data.position=req.body.position;
        data.reportto=req.body.reportto;
        data.employmenttype=req.body.employmenttype;
        data.startdate=req.body.startdate;
        data.dob=req.body.dob;
        data.d_id=req.body.d_id;
        data.mobile=req.body.mobile;

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