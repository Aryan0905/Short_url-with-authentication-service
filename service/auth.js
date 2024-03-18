
const jwt=require('jsonwebtoken');

const secret="Aryan$1234$";

function setuser( user) {
    return jwt.sign({
        _id: user._id,
        email: user.email,
    },
    secret);
}

function getuser(token) {
    if(!token) return null;
    try{
        return jwt.verify(token,secret);
    }
    catch(e){
        return null;
    }
    // return jwt.verify(token,secret);
}

module.exports = {  
    setuser,
    getuser,
};