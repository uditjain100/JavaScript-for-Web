const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser("thisismysecret"));

app.get("/getname", (req, res) => {
  console.log(req.cookies);
  res.send(":) ...........");
});

app.get("/setname", (re, res) => {
  res.cookie("name", "Creased Meteor");
  res.send("Heyyyyyyyyyyyyyyyyyyy ... !!");
});

app.get("/getSecretname", (req, res) => {
  console.log(req.signedCookies);
  res.send(":) ...........");
});

app.get("/setSecretname", (req, res) => {
  res.cookie("name", "Creased Meteor" ., {signed : true})
  res.send("Heyyyyyyyyyyyyyyyyyyy ... !!");
});

app.listen(3000, () => {
  console.log("Server Started");
});
