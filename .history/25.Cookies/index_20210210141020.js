const express = require("express");
const app = express();

app.get("/setname", (re, res) => {
  res.cookie("name", "Creased Meteor");
  res.send("Heyyyyyyyyyyyyyyyyyyy ... !!");
});

app.listen(3000, () => {
  console.log("Server Started");
});
