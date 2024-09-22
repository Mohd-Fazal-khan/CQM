const express = require('express');
const mongoose=require('mongoose');

const usercontact=mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
    },
    email:{
        type:String,
        require:true
    },
    product:{
        type:String,
        require:true
    },
    feed:{
        type:String,
        require:true
    },
});
const Usercont=mongoose.model('Usercont',usercontact);



module.exports=Usercont;