const express =require('express')
const {PORT} =require('./config/server.congif')
const connect=require("./database/connection")
const userRouter =require('./router/index')
const app=express();
app.use(express.json()); 
app.use('/api',userRouter)

app.listen(PORT,()=>{
    connect().then(()=>{
        console.log("DB connected");
    })
    console.log(` surver running on port ${PORT}`);
})