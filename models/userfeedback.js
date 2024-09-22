const express = require('express');
const mongoose=require('mongoose');
const userfeedback= mongoose.Schema({
    ffirstname:{
        type:String,
        require:true
    },
    flastname:{
        type:String,
    },
    femail:{
        type:String,
        require:true,
        
    },
    ffeed:{
        type:String,
    }
});





const Userfeed =mongoose.model('Userfeed',userfeedback);


module.exports=Userfeed;