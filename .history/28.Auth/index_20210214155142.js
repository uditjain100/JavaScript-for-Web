const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");

const User = require("./models/user");

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

app.get("/secret", async (req, res) => {
  if (req.session.userid) res.render("secret.ejs");
});

app.listen(3000, () => {
  console.log("Server Started !!");
});
