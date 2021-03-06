const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");

const User = require("./models/user");
const { nextTick } = require("process");

mongoose
  .connect("mongodb://localhost:27017/authApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo Connected Successfully");
  })
  .catch((error) => {
    console.log("Mongo Error !! ");
    console.log(error);
  });

app.use(express.urlencoded({ extended: true }));

app.set("view-engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(session({ secret: "notagoodsecret" }));

const requireLogin = async (req, res, next) => {
  if (!req.session.userid) return res.redirect("/signin");
  next();
};

app.get("/signup", async (req, res) => {
  res.render("signup.ejs");
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  await bcrypt.hash(password, 12, async function (err, hash) {
    var user = new User({ username: username, password: hash });
    await user.save();
    req.session.userid = user._id;
    return res.render("secret.ejs");
  });
});

app.get("/signin", async (req, res) => {
  res.render("signin.ejs");
});

app.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.redirect("/signin");
  await bcrypt.compare(password, user.password, async function (err, same) {
    if (!same) return res.redirect("/signin");
    req.session.userid = user._id;
    return res.render("secret.ejs", { user });
  });
});

app.get("/secret", requireLogin, (req, res) => {
  res.render("secret.ejs");
});

app.post("/logout", async (req, res) => {
  req.session.userid = null;
  res.redirect("/signin");
});

app.listen(3000, () => {
  console.log("Server Started !!");
});
