const { mongoose } = require('mongoose')
const shortid=require('shortid')
const URL = require('../models/url')
async function handleurl(req,res){
    console.log(req.body)
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
return res.json({message:"hello world",shortId})
}

module.exports = {handleurl}