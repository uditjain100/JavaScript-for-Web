const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/authApp", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  console.log("Server Started !!");
});
