const express=require("express");
const User =require("../models/userSchema")
const app=express();

const createUserController = async (req, res) => {
    try {
        const newUser = req.body;
        const user = await User.create(newUser);
        console.log("user is created");
        res.status(201).json(user); 
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error.message || "An error occurred during user creation",
        });
    }
};
module.exports={
    createUserController,
};
