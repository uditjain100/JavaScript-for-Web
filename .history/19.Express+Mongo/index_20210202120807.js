const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view-engine", "ejs");

const mongoose = require("mongoose");
moongoose.conn;

app.listen(3000, () => {
  console.log("Port 3000 Started Successfully");
});

app.get("/any", (req, res) => {
  res.send("Heyyyyyyyyyyyyyyyy ... !!");
});
