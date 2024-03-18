const shortid= require("shortid");
const URL =require('../models/url');

async function handlegeneratenewshorturl(req,res){
    const body=req.body;
    if(!body.url)
        return res.status(400).json({error:'URL is required'});
    
     const shortId=shortid();
     const url= await URL.create({
        shortId:shortId,
        redirectURL:body.url,
        visithistory:[],
        createdBy:req.user._id,
    });
     
    return res.render("home.ejs",{
        id: shortId,  //this is the data pass to home.ejs, so we can access it inb front-endd
     });
    
    
}

module.exports={
  handlegeneratenewshorturl,
}