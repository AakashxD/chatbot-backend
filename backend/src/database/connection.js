const mongoose=require("mongoose");
const dotenv=require("dotenv")
dotenv.config();

const connect= async()=>{
    const URL=process.env.MONGO_URI
   await mongoose.connect(URL);
}
module.exports=connect;