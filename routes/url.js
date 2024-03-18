const express=require('express');
const {handlegeneratenewshorturl}=require('../controllers/url');
const router=express.Router();

router.post('/',handlegeneratenewshorturl);

module.exports=router;
