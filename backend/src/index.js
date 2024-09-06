const express =require('express')
const cors=require('cors')
const {PORT} =require('./config/server.congif')
const connect=require("./database/connection")
const userRouter =require('./router/user.routes')
const app=express();
app.use(cors());
app.use(express.json()); 
app.use('/api',userRouter)

app.listen(PORT,()=>{
    connect().then(()=>{
        console.log("DB connected");
    })
    console.log(` surver running on port ${PORT}`);
})