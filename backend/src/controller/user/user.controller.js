const express=require("express");
const User =require("../../models/userSchema")
const app=express();
const createUserController= async(req,res)=>{

    try {
        const newUser = req.body;
        const user = await User.create(newUser);

    } catch (error) {
     
        res.status(500).json({
            message: "filled the details correctly",
         
        });
    }

}
module.exports={
    createUserController,
};
