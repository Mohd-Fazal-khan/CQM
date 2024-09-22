const express = require('express');
const mongoose=require('mongoose');
// const userRoute=express.Router();

const adminSchema= mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
    }
})

const Admin=mongoose.model('admin',adminSchema);

module.exports=Admin;