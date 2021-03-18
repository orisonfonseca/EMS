const express=require('express');
const router=express.Router();
const User=require('./../models/registration');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Employee=require('./../models/employees');
const uuidv1 = require('uuidv1');
//const { createUser, getUser, updateUser } = require("../model/users");
const { getResetRequest, createResetRequest } = require("./../config/reset");
const sendResetLink = require("./../config/sendemail");

const privateKey=require('./../config/keys').privateKey;

router.post('/register',(req,res)=>{
    User.findOne({email:req.body.email})
    .then((resp)=>{
        if(resp){
            res.status(400).json({msg:"User with this email ID already exist!"}) 
        }
        else{
            let user={
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
            }
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(req.body.password, salt, function(err, hash) {
                    user.password=hash;
                    new Users(user).save()
                    .then(()=>{
                        res.status(200).json({msg:"Data Inserted Successfully!"});
                    }).catch((err)=>{
                        res.status(500).json({msg:"Something Went Wrong, Try again!"});
                    })
                })
            })
        }
    }).catch((err)=>{
        res.status(500).json({msg:"Something Went Wrong, Try again!"});
    })
 
})

router.post('/login',(req,res)=>{

    User.findOne({email:req.body.email})
    .then((response)=>{
        if(!response){
            res.status(400).json({msg:"User with this email ID doesnot exist!"}) 
        }else{
        bcrypt.compare(req.body.password,response.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
               // res.status(200).json({msg:"you are loged in Successfully!"})
                const payload={
                    name:response.name,
                    email:response.email,
                    id:response._id,
                }

                jwt.sign(payload,privateKey,(err,token)=>{
                    console.log(token);

                    res.json({
                        success:true,
                        token:"Bearer "+token,
                    })
                })
            }else{
                res.status(400).json({msg:"Password Incoreect!"})   
            }
        })
    }
    })
    .catch((err)=>{
        console.log(err);
    })
})

router.post('/Employeelogin',(req,res)=>{

    Employee.findOne({email:req.body.email})
    .then((response)=>{
        if(!response){
            res.status(400).json({msg:"User with this email ID doesnot exist!"}) 
        }else{
        bcrypt.compare(req.body.password,response.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
               // res.status(200).json({msg:"you are loged in Successfully!"})
                const payload={
                    name:response.name,
                    email:response.email,
                    id:response._id,
                }

                jwt.sign(payload,privateKey,(err,token)=>{
                    console.log(token);

                    res.json({
                        success:true,
                        token:"Bearer "+token,
                    })
                })
            }else{
                res.status(400).json({msg:"Password Incoreect!"})   
            }
        })
    }
    })
    .catch((err)=>{
        console.log(err);
    })
})

router.post('/changepassword',(req,res)=>{

    User.findOne({email:req.body.email})
    .then((response)=>{
        
        bcrypt.compare(req.body.old,response.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
               
               bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(req.body.nep, salt, function(err, hash) {
                    response.password=hash;
                    response.save()
                    .then(()=>{
                        res.status(200).json({msg:"Password Updated"});
                        
                    }).catch((err)=>{
                        res.status(500).json({msg:"Something Went Wrong, Try again!"});
                    })
                })
            })



            }else{
                res.status(400).json({msg:"Password Incoreect!"}) 
            }
        })
    
    })
    .catch((err)=>{
        console.log(err);
    })
})

router.post('/forgot', (req, res) => {
    User.findOne({email:req.body.email})
    .then((resp)=>{
        if(resp){
            const id = uuidv1();
            const request = {
                id,
                email: resp.email,
            };
            createResetRequest(request);
            sendResetLink(resp.email, id);
            res.status(200).json({msg:"Please check your email for the reset link"});
        }else{
            res.status(400).json({msg:"User with this email ID does not exist!"}) 
        }
        
    })
    .catch((err)=>{
        console.log(err);
    })
   
});

router.patch("/reset", (req, res) => {

    const thisRequest = getResetRequest(req.body.id);
    if (thisRequest) {
       User.findOne({email:thisRequest.email}).then((resp)=>{
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
                resp.password=hash;
                resp.save()
                .then(()=>{
                    res.status(200).json({msg:"Password Updated"});
                    console.log("hi");
                    
                }).catch((err)=>{
                    res.status(500).json({msg:"Something Went Wrong, Try again!222"});
                })
            })
        })
    }).catch((err)=>{
        res.status(500).json({msg:"Something Went Wrong, Try again!"});
    })
        
    } else {
        res.status(404).json();
    }
});

module.exports=router;