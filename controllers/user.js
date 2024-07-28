const { mongoose, model } = require('mongoose')
const USER = require('../models/user')


async function usersignup(req,res){
   
        const {name,email,password} = req.body
        

        const user = await USER.create({name,email,password})
       


        return res.json({message:"user signup successfully"})
        
      



}



module.exports = {usersignup}