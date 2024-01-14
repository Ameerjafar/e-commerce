const { UserLogin } = require('../db');
async function loginMiddleware(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    let foundUser = await UserLogin.findOne({
        username: username,
        password: password
    });
    if(foundUser) {
        next();
    }
    else {
        res.status(403).json({message: "User is not present in the database"});
    }
}

module.exports = loginMiddleware;
