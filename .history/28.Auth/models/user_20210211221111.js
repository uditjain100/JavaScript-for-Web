const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is Required"],
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
  },
});
