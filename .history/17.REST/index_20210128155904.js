const express = require("express");
const app = express();

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
  res.send("POSY /tacos response");
});

app.listen(3000, () => {
  console.log("Server got Started !!");
});
