const zod = require('zod');
const { UserLogin } = require('../db');
const {default: mongoose} = require('mongoose');
async function userMiddleware(req, res, next) {
    try {
        const user = req.body;
        const validationCheck = zod.object({
            username: zod.string().email(),
            password: zod.string().min(6)
        });
        const validate = validationCheck.parse(user);
        await UserLogin.create(user);
        next();
    }catch(error) {
        console.log(error);
        res.status(403).json({message: "your output credentials is wrong"});
    }
}

module.exports = userMiddleware;
