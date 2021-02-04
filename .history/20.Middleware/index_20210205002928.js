const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"));

app.listen(3000, () => {
  console.log("Server Started !!");
});

app.get("/", (req, res) => {
  console.log("Heyyyyyyyyyyyyy ... !!");
  res.send("Heyyyyyyyyyyyyy ... !!");
});

app.get("/dogs", () => {
  console.log("Heyyyyyyyyyyyyy Dogo ... !!");
  res.send("Heyyyyyyyyyyyyy Dogo ... !!");
});
