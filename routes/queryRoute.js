const express = require('express');
const Query=require('../models/query');
const queryRoute=express.Router();

queryRoute.get('/getquery',async(req,res)=>{
   const result=await Query.find();
   res.send(result);
});

queryRoute.get('/getquery/:id',async(req,res)=>{
    const id=req.params.id;
    const result=await Query.findById(id);
    res.send(result);
 });
 

queryRoute.get('/getpenquery/:id',async(req,res)=>{
    const id=req.params.id;
    const result=await Query.find({uid:id,status:"pen"});
    res.send({msg:"success",result:result});
})

queryRoute.get('/getprocessingquery/:id',async(req,res)=>{
    const id=req.params.id;
    const result=await Query.find({uid:id,status:"pro"});
    res.send({msg:"success",result:result});
})

queryRoute.get('/getcompleteingquery/:id',async(req,res)=>{
    const id=req.params.id;
    const result=await Query.find({uid:id,status:"cmp"});
    res.send({msg:"success",result:result});
})


queryRoute.post('/addquery',async(req,res)=>{
    const query=req.body;
    console.log(query);
    const result=Query.create(req.body);
    res.send({msg:"Query Added"});
    
})

queryRoute.delete('/del/:id',async (req,res)=>{
    try {
     const id=req.params.id;
     const result =  await Query.findByIdAndDelete(id)
     return res.send({msg:"Success"});
    } catch (error) {
     return res.send({msg:error});
    }
 })


queryRoute.patch('/editpendingquery/:id/:qid',async (req,res)=>{
    try {
        const id=req.params.qid;
    const result =  await Query.findByIdAndUpdate(id,req.body)
    return res.send({msg:"Success"});
    } catch (error) {
        return res.send({msg:error});
    }
})

module.exports=queryRoute;