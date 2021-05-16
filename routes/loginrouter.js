const express = require('express')
const loginRouter = express.Router()
const mongoose=require("../server");

const user=require("./useModel")
loginRouter.route('/')
.post((req,res)=>{
    var email=req.body.email
    var password=req.body.password
    user.findOne({email:email})
    .then((data)=>
    {
        if(data.email===email)
        {
            res.statusCode=200;
            if(data.password===password)
            {
                res.statusCode=200;
                res.send("you will be logged in");
            }
            else
            {
                res.send("incorrect password")
            }
        }
        else
        {
            res.statusCode=401;
            res.send("unauthorized user")
        }
       
    })
    .catch((err)=>{
      
        console.log(err);

    })
})

module.exports=loginRouter