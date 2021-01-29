const express = require("express");
const app = express();
const path = express("path");

var comments = [
  {
    username: "toddd",
    comment: "hey there",
  },
  {
    username: "nime",
    comment: "Life is Good",
  },
  {
    username: "bob",
    comment: "Yummmmmmy",
  },
  {
    username: "jessi",
    comment: "Yooo Man",
  },
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
