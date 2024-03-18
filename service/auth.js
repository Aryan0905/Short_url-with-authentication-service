

const sessionidtouserMap = new Map();


function setuser(sessionid, user) {
    sessionidtouserMap.set(sessionid, user);
}

function getuser(sessionid) {
    return sessionidtouserMap.get(sessionid);
}

module.exports = {  
    setuser,
    getuser,
};