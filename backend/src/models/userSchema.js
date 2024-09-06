const  mongoose  = require("mongoose");

const userSchema= new mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    mobileNumber:{
        type:String,
        require:true,
    },
    museumsName:{
          type:String,
          require:true,
    },
    age:{
         type:String,
         require:true
    },
    email:{
        type:String
      
    }


})
const User = mongoose.model("User", userSchema);
export default User;