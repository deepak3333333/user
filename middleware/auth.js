const {getUser}=require("../services/auth")
function resticatetoLoggedinUserOnly(req,res, next) {
    //frontend uuid
           const userUid=req.cookies?.sessionid;
          console.log(userUid);
          if(!userUid){
            return res.redirect('/lo');
          }
          //backend uuid
          const user=getUser(userUid)
          console.log(user);
          if(!user) return res.redirect('/lo')

            req.user=user;
            next()

        }
module.exports={resticatetoLoggedinUserOnly}