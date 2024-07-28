const express=require("express")
const router=express.Router()
const {handleurl,findingurl,analysisurl}=require("../controllers/url")
router.post("/",handleurl)

router.get("/:shorturl",findingurl)
router.get("/analysis/data",analysisurl)






module.exports=router