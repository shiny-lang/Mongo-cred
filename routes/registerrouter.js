const express = require('express')
const registerRouter = express.Router()
const mongoose=require("../server");
const user=require("./useModel")
registerRouter.route('/')
.post((req,res)=>{
const User1=new user({
    email:req.body.email,
    password:req.body.password
});
    User1.save()
    .then((data)=>{
        res.send("registration successful");
       
    })
    .catch((err)=>{console.log(err)})
})
.get((req,res)=>{
    res.send("get is not allowed on register end point")
});
module.exports=registerRouter