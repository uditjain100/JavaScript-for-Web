const express = require("express");
const app = express();
const path = require("path");
const data = require("./data.json");

app.set("view-engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/r/:domain", (req, res) => {
  const { domain } = req.params;
  res.render("domain.ejs", { domain });
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  const bool = num % 2 === 0 ? true : false;
  res.render("random.ejs", { num, bool });
});

app.get("/alpha", (req, res) => {
  const alphabets = ["a", "s", "d", "f"];
  res.render("alpha.ejs", { alphabets });
});

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.listen(3000, () => {
  console.log("Hey Listening on the Port 3000 :)");
});
