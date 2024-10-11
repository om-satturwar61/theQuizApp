const express = require('express');
const jwt = require('jsonwebtoken');
const userdata = require('../db/users');

const loginRouter = express.Router();

loginRouter.route('/').post((req, res) => {
    const {username, password} = req.body;
    console.log({username, password});
    const isUserVerified = userdata.users.some(user => user.username === username && user.password === password)
    if (isUserVerified){
        const token = jwt.sign({id: username}, process.env.SECRET_KEY);
        res.json({username, token, message: "User Verified"});
    }
    else{
        res.status(401).json({message: "Invalid Credentials"});
    }
});

module.exports = loginRouter;