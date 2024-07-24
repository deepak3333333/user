const express=require('express');
const app=express();
const urlRouter= require('./routes/url');
const { default: mongoose } = require('mongoose');
app.use(express.urlencoded({extended:false}))
app.use(express.json())
//database connection
mongoose.connect("mongodb://localhost:27017/trial2")
.then(()=>console.log("Database connected"))
.catch((err)=>console.log(err));

app.use('/url',urlRouter);








app.listen(3000,()=>console.log('Server is running on port 3000')); //listen on port 3000