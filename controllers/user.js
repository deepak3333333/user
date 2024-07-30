const { mongoose, model } = require("mongoose");
const USER = require("../models/user");
const { v4: uuidv4 } = require('uuid');
const {setUser}=require("../services/auth")

async function usersignup(req, res) {
  const { name, email, password } = req.body;

  const user = await USER.create({ name, email, password });

  return res.json({ message: "user signup successfully" });
}
async function userlogin(req, res) {
  const { email, password } = req.body;
  const user = await USER.findOne({ email, password });
  console.log("this is ", user);

  if (!user) {
    return res.redirect("/lo");
  } else {
    const sessionid=uuidv4()
    setUser(sessionid,user)
    res.cookie("sessionid", sessionid);
    

    return res.redirect("/");
  }
}

module.exports = { usersignup, userlogin };
