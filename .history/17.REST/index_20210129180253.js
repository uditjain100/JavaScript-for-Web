const express = require("express");
const app = express();
const path = require("path");

var comments = [
  { id: 1, username: "toddd", comment: "hey there" },
  { id: 2, username: "nime", comment: "Life is Good" },
  { id: 3, username: "bob", comment: "Yummmmmmy" },
  { id: 4, username: "jessi", comment: "Yooo Man" },
];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/comments", (req, res) => {
  res.render("home.ejs", { comments });
});

app.get("/comment/create", (req, res) => {
  res.render("create.ejs");
});

app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.render("home.ejs", { comments });
});

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
  const { author, post } = req.body;
  console.log(req.body);
  res.send("Post : " + post + "  and   author : " + author);
});

app.listen(3000, () => {
  console.log("Server got Started !!");
});
