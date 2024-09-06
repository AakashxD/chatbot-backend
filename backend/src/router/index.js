const express =require('express');

const {createUserController} = require('../controller/user/user.controller');
const userRouter=express.Router();

userRouter.post('/', createUserController)

module.exports=userRouter;