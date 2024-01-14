const express = require('express');
const  router  = express.Router();

const userLoginMiddlware = require('../middlewares/userLoginMiddlerware');
const userMiddleware = require('../middlewares/userMiddleware');

router.post('/login', userLoginMiddlware, (req, res) => {
    res.status(200).json({message: "login successfully"});
})
router.post('/signup', userMiddleware, (req, res) => {
    res.status(200).json({message: "your email Id is added in the db"});
});

module.exports = router;