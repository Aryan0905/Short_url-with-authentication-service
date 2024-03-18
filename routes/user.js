const express = require('express');
const {handleusersignup, handleuserlogin}=require('../controllers/user');

const router = express.Router();

router.post('/signup',handleusersignup);
router.post('/login',handleuserlogin);
// router.get('/:id', handelUserSession);

module.exports = router; // exporting the router