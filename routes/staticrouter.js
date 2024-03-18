const express=require('express');
const router=express.Router();
const URL=require('../models/url');
const {handlegeneratenewshorturl}=require('../controllers/url');

router.get('/',async(req,res)=>{
    if(!req.user) return res.redirect("/login");
    console.log(req.user);
    const allurls = await URL.find({ createdBy : req.user._id});
    console.log("I am here.");
    return res.render("home.ejs",{
        urls: allurls,  //this is the data pass to home.ejs, so we can access it in front-endd
    });
}
);


router.post('/',handlegeneratenewshorturl);

router.get('/signup',(req,res)=>{
    return res.render("signup.ejs");
});

router.get('/login',(req,res)=>{
    return res.render("login.ejs");
});





module.exports=router;
