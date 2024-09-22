const express = require('express');
const cors= require('cors')
const app = express();
require('dotenv').config()
const port = process.env.PORT;

const mongoose=require('mongoose');
const userRoute=require('./routes/userRoute')
const adminRoute=require('./routes/adminRoute');
const queryRoute = require('./routes/queryRoute');



// mongoose.connect('mongodb://127.0.0.1:27017/karam')
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Connection Done 👍"))
.catch((err)=>console.log("Error Found  😒",err));



app.use(express.json());
app.use(cors());
app.use(queryRoute)
app.use(userRoute)
app.use(adminRoute)



app.listen(8000,()=>console.log(`Your Server Running on ${port} 🔥`));
