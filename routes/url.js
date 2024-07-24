const express=require("express")
const router=express.Router()
const {handleurl}=require("../controllers/url")
router.post("/",handleurl)






module.exports=router