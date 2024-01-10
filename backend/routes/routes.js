const express = require('express');
const  router  = express.Router();

const loginMiddleware = require('../middlewares/loginMiddleware');
const userMiddleware = require('../middlewares/userMiddleware');

router.post('/login', loginMiddleware, (req, res) => {
    res.status(200).json({message: "login successfully"});
})
router.post('/signup', userMiddleware, (req, res) => {
    res.status(200).json({message: "your email Id is added in the db"});
});

module.exports = router;