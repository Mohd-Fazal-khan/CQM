const express = require('express');
const User=require('../models/user');
const Query=require('../models/query');
const Admin=require('../models/admin');
const adminRoute=express.Router();




adminRoute.post('/adlogin',async(req,res)=>{
    const {email,password}=req.body
    const admin =await Admin.findOne({email})
    
    if(admin){
        if (admin.password===password) {
            return res.send({msg:"Login Success"})
            
        }
        else{
            return res.send({msg:"Invalid Email or Password"})
        }
    }
    else{
        return res.send({msg:"Admin not find"})
    }
})

adminRoute.get('/ad/viewallpendingquery',async(req,res)=>{
    try{
        const query= await Query.find({status:"pen"});
        return res.send({msg:"Success",q:query});
    }catch(error){
        return res.send({error:error.message});
    }
   
})

adminRoute.get('/ad/viewallproquery',async(req,res)=>{
    try{
        const query= await Query.find({status:"pro"});
        return res.send({msg:"Success",q:query});
    }catch(error){
        return res.send({error:error.message});
    }
   
})

adminRoute.get('/ad/viewallcmpquery',async(req,res)=>{
    try{
        const query= await Query.find({status:"cmp"});
        return res.send({msg:"Success",q:query});
    }catch(error){
        return res.send({error:error.message});
    }   
})

adminRoute.patch('/status/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const result = await Query.findByIdAndUpdate(id, req.body)
        return res.send({ msg: "Success" });
    } catch (error) {
        return res.send({ msg: error });
    }
})


module.exports=adminRoute;
