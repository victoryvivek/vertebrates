const express = require("express");
const path = require("path");

const router=express.Router();

router.get('/fish',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','static','fish.html'));
})
exports.router=router;