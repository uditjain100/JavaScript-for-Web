const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
  res.send("POSt /tacos response");
});

app.listen(3000, () => {
  console.log("Server got Started !!");
});
