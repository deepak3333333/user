const express=require("express")
const router=express.Router()
const {handleurl,findingurl}=require("../controllers/url")
router.post("/",handleurl)
router.get("/:shorturl",findingurl)






module.exports=router