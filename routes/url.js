const express=require('express');
const {handlegeneratenewshorturl}=require('../controllers/url');
const router=express.Router();
const URL = require("../models/url");


router.post('/',handlegeneratenewshorturl);

router.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    console.log('i am here');
    console.log(shortId);
    const entry = await URL.findOne({
      shortId,
    });     
    if (entry) {
        res.redirect(entry.redirectURL);
    } else {
        res.status(404).send("URL not found");
    }
  });

module.exports=router;
