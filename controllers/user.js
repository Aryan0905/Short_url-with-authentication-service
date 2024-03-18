const user = require('../models/user');
const URL = require('../models/url');
const {v4: uuidv4} = require('uuid');
const{setuser}=require('../service/auth.js');


async function handleusersignup(req, res) {
    const { name,email, password } = req.body;
    // check if the user already exists
   await user.create({name,email, password})
   return  res.redirect("/");
}

async function handleuserlogin(req, res) {
    const { email, password } = req.body;
    // check if the user already exists
   const founduser = await user.findOne({email, password});
   if(!founduser){
    return res.render("login", {error: "Invalid email or password"});  
   }
   console.log("I am in handelUserLogin");
   const sessionid = uuidv4();
   setuser(sessionid, founduser);
   res.cookie(`user_${founduser._id}`, sessionid);
  return res.redirect(`/user/${founduser._id}`);

}

async function handelUserSession(req, res) {
    const { id } = req.params;
    const sessionid = req.cookies[`user_${id}`];
    const founduser = await user.findById(id);
    if(!founduser){
        return res.redirect("/login");
    }
    if(!sessionid){
        return res.redirect("/login");
    }
    console.log("I am in handelUserSession");
    // if(sessionid !== founduser.sessionid){
    //     return res.redirect("/login");
    // }
    const allurls = await URL.find({ createdBy : req.params.id});
    console.log(allurls);
    return res.render("home",{
        urls: allurls,  //this is the data pass to home.ejs, so we can access it in front-endd
    });
}

 
module.exports = {
    handleusersignup,
    handleuserlogin,
    handelUserSession,
};