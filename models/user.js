const mongoose=require("mongoose")
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        

    },
    email:{
        type:String,
        

    },
    password:{
        type:String,
        

    }
    
},{timestamps:true

},{timestamps:true});
const USER=mongoose.model("usersingup",userSchema)  
module.exports=USER
