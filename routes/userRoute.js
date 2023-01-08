const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
    try {
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            return res.status(200).send({ message: 'User already exists', success: false });
        }
        const password = req.body.password;     //to get the password
        const salt = await bcrypt.genSalt(10);   //bcrpyt password
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
        const newuser = new User(req.body);
        await newuser.save();
        res.status(200).send({ message: 'User created successfully', success: true });
    } catch (error) {
        res.status(500).send({ message: 'Unsuccessful in user creation', success: false });
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email});
        if(!user){
            return res.status(200).send({ message: 'User doesnt exist', success: false});
        }
        const comp = await bcrypt.compare(req.body.password, user.password);
        if(!comp){
            return res.status(200).send({ message: 'Wrong Password', success: false});
        }
        else{
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                expiresIn: "1d"
            })
            res.status(200).send({ message: 'Login Successful', success: true, data: token});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message:'Error while Log In', success: false, error});
    }
})

module.exports = router;