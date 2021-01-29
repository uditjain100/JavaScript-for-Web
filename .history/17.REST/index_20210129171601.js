const express = require("express");
const app = express();
const path = express("path");

var comments = [
  { id: 1, username: "toddd", comment: "hey there" },
  { id: 1, username: "nime", comment: "Life is Good" },
  { id: 1, username: "bob", comment: "Yummmmmmy" },
  { id: 1, username: "jessi", comment: "Yooo Man" },
];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

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
