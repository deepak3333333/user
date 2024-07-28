const express=require('express');
const app=express();
const urlRouter= require('./routes/url');
const userRouter= require('./routes/user');
const mongoose  = require('mongoose');
//middle ware for form data and json data
app.use(express.urlencoded({extended:false}))
app.use(express.json())
//database connection
mongoose.connect("mongodb://localhost:27017/trial2")
.then(()=>console.log("Database connected"))
.catch((err)=>console.log(err));
//djs 
app.set("view engine","ejs");
//home page for url
app.get("/",(req,res)=>{
    res.render("home")
})


//registation of ru
app.use('/url',urlRouter);
app.use("/user",userRouter);


app.listen(3000,()=>console.log('Server is running on port 3000')); //listen on port 3000