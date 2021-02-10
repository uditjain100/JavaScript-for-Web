const express = require("express");
const app = express();
const session = require("express-session");

const sessionOptions = {
  secret: "notagoodsecret",
  resave: false,
  saveUninitialized: false,
};

app.use(session(sessionOptions));

app.get("/register", (req, res) => {
  const { username = "Creased meteor" } = req.query;
  req.session.username = username;
  res.redirect("/greet");
});

app.get("/greet", (req, res) => {
  const { username } = req.session;
  res.send("Welcome Back : " + username);
});

app.get("/getSessionCount", (req, res) => {
  if (req.session.count) req.session.count += 1;
  else req.session.count = 1;
  res.send("Count : " + req.session.count);
});

app.listen(3000, () => {
  console.log("Session Started");
});
