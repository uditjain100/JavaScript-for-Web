const express = require("express");
const app = express();

// app.use(express.urlencoded({ extended: true }));

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
  console.log(req.body);
  const { author, post } = req.body;
  res.send("" + post + " : " + author);
});

app.listen(3000, () => {
  console.log("Server got Started !!");
});
