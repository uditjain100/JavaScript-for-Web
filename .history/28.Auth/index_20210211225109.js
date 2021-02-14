const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const path = require("path");

const User = require("./models/user");

mongoose
  .connect("mongodb://localhost:27017/authApp", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.urlencoded({ extended: true }));

app.set("view-engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/signup", async (req, res) => {
  res.render("signup.ejs");
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  await bcrypt.hash(password, 12).then((hash) => {
    console.log(hash);
    res.send(hash);
  });
});

app.get("/signin", async (req, res) => {
  res.render("signin.ejs");
});

app.get("/secret", async (req, res) => {
  res.render("secret.ejs");
});

app.listen(3000, () => {
  console.log("Server Started !!");
});
