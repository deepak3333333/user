const { mongoose } = require('mongoose')
const shortid=require('shortid')
const URL = require('../models/url')

async function handleurl(req,res){
   
    body=req.body
    if(!body.url){
        return res.status(400).json({message:"url is required"
            })}
    const shortId=shortid(6)
    console.log(shortid);

    URL.create({
        shortid:shortId,
        redirectedUrl:body.url,
        visitedHistory:[]
    })
return res.render("home",{id:shortId})
}
    async function findingurl(req,res){
        const shortId=req.params.shorturl
        console.log(shortId);
        const entry=await URL.findOneAndUpdate({shortid:shortId},{
            $push:{visitedHistory:{time:Date.now()},
        }
            })
        if(entry){
            return res.redirect(entry.redirectedUrl)
           
        
    }
   }

   async function analysisurl(req,res){
    const entry=await URL.find()
    return res.json({message:"hello world from anlysisis",entry})
       
   }
module.exports = {handleurl,findingurl,analysisurl}