const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/e-commerce");

const userLoginSchema = new mongoose.Schema({
    username: String, 
    password: String
})

const UserLogin = mongoose.model('UserLogin', userLoginSchema);
module.exports = {
    UserLogin
}
