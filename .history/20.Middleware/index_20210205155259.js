const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"));
app.use(morgan("dev"));
app.use(morgan("common"));

app.use((req, res, next) => {
  console.log("First Middleware");
  next();
  console.log("First Middleware after second");
});

app.use((req, res, next) => {
  console.log("Second Middleware");
  next();
});

app.listen(3000, () => {
  console.log("Server Started !!");
});

app.get("/", (req, res) => {
  console.log("Heyyyyyyyyyyyyy ... !!");
  res.send("Heyyyyyyyyyyyyy ... !!");
});

app.get("/dogs", (req, res) => {
  console.log("Heyyyyyyyyyyyyy Dogo ... !!");
  res.send("Heyyyyyyyyyyyyy Dogo ... !!");
});
