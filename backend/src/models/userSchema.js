const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  museumsName: {
    type: String,
    required: true,
  },
  ageCategory: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
//   date: {
//     type: Date,
//     default: Date.now, 
//   },
}, { timestamps: true }); 

const User = mongoose.model("User", userSchema);
module.exports=User;
