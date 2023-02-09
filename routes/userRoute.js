const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    try{
        const userExists = await User.findOne({email: req.body.email});  //get the mail id to check if account on same mail id exists
        if(userExists){
            return res.status(400).send({message: "User already exists", success: false}); //send the error that user with mail id already exists and we will not create another user with same id
        }
        const password = req.body.password;     //to get the password
        const salt = await bcrypt.genSalt(10);   //bcrpyt password
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
        const newuser = new User(req.body);  //create new user
        await newuser.save();     //save new user
        res.status(200).send({message: "User created successfully", success: true}); //send message when user is created successfully
    } catch(error){
        res.status(500).send({message:"Error creating message", success: false});
    }
})

router.post('/login', async (req, res) => {
    try {
        const userModel = await User.findOne({ email: req.body.email});
        if(!user){
            return res.status(200).send({ message: 'User doesnt exist', success: false});
        }
        if(user){
            const comp = await bcrypt.compare(req.body.password, user.password);
            token = await user.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken", token, {
                expires: "1d",
                httpOnly: true
            })
        
        if(!comp){
            return res.status(200).send({ message: 'Wrong Password', success: false});
        }
        else{
            res.status(200).send({ message: 'Login Successful', success: true, data: token});
        }
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message:'Error while Log In', success: false, error});
    }
})

//router.get('/profile', authenticate, (req,res));

module.exports = router;