const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

//@desc register a user
//@route GET /api/user/register
//@access public
const registerUser = asyncHandler (async function(req,res){
    console.log(req.body);

    const {email, username, password} = req.body;
    let user = await User.findOne({email});

    if(user){
        res.status(400);
        throw new Error('User already exists')
    }

    user = await User.create({username, email, password});
    res.status(200).json(user);
});

//@desc login a user
//@route GET /api/user/login
//@access public
const loginUser = asyncHandler (async function(req,res){
    const {email, password} = req.body;

    if(!email || !password){
        res.status(400);
        throw new Error("Login all fields should be there...");
    }

    let user = await User.findOne({email});

    if(!user){
        res.status(400);
        throw new Error('User does not exists');
    }

    if(user.password !== password){
        throw new Error("Password is not valid");
    }

    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1m" }
    );

    res.status(200).json({accessToken});
});

//@desc current a user
//@route GET /api/user/current
//@access private
const currentUser = asyncHandler (async function(req,res){
    res.status(200).json({'message': 'current.. users'});
});


module.exports = {registerUser, loginUser, currentUser};