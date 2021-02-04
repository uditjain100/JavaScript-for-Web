const express = require("express");
const app = express();
const path = require("path");

app.listen(3000, () => {
  console.log("Server Started !!");
});

app.get("/", () => {
  console.log("Heyyyyyyyyyyyyy ... !!");
});
