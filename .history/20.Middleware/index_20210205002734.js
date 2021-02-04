const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");

app.use(morgan("tiny"));

app.listen(3000, () => {
  console.log("Server Started !!");
});

app.get("/", () => {
  console.log("Heyyyyyyyyyyyyy ... !!");
});
