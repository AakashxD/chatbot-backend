const express =require('express');

const {createUserController} = require('../controller/user.controller');
const userRouter=express.Router();

userRouter.post('/create-user', createUserController)

module.exports=userRouter;