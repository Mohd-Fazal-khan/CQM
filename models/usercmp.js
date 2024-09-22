const express = require('express');
const mongoose=require('mongoose');

const usercomp=mongoose.Schema({
    cfirstname:{
        type:String,
        require:true
    },
    clastname:{
        type:String,
    },
    cemail:{
        type:String,
        require:true
    },
    cproduct:{
        type:String,
        require:true
    },
    cfeed:{
        type:String,
        require:true
    },
});
const Usercomp=mongoose.model('Usercomp',usercomp);



module.exports=Usercomp;