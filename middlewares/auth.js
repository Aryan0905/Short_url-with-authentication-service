const {getuser} = require("../service/auth");

async function restricttouserlogin(req, res, next) {
    const useruid=req.cookies?.uid;
    if (!req.cookies.uid) {
        return res.redirect("/login");
    }

    const founduser = getuser(useruid);
    if (!founduser) {
        console.log('NO USER FOUND!');
        return res.redirect("/login");
    }
    req.user = founduser;
    next();
}

async function checkAuth(req, res, next) {
    const useruid=req.cookies?.uid;
    
    const founduser = getuser(useruid);
    req.user = founduser;
    next();
}

module.exports ={restricttouserlogin,
    checkAuth,
};