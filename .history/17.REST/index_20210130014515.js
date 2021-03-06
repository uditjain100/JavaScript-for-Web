const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");

var comments = [
  { id: uuid(), username: "toddd", comment: "hey there" },
  { id: uuid(), username: "nime", comment: "Life is Good" },
  { id: uuid(), username: "bob", comment: "Yummmmmmy" },
  { id: uuid(), username: "jessi", comment: "Yooo Man" },
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
  comments.push({ username, comment, id: uuid() });
  // res.render("home.ejs", { comments });
  res.redirect("/comments");
});

app.get("/comment/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((comment) => comment.id === id);
  res.render("details.ejs", { comment });
});

app.get("comment/:id/update", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((comment) => comment.id === id);
  res.render("update.ejs", { comment });
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
