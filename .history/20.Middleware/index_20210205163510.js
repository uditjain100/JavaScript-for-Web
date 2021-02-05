const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"));
app.use(morgan("dev"));
app.use(morgan("common"));

app.use((req, res, next) => {
  console.log(
    (req.method.toUpperCase() + " " + req.path + " " + req.statusCode: true)
  );
  next();
});

app.use((req, res, next) => {
  console.log("First Middleware");
  next();
  console.log("First Middleware after Second");
});

app.use((req, res, next) => {
  console.log("Second Middleware");
  return next();
  console.log("Second Middleware after Third");
});

app.use((req, res, next) => {
  console.log("Third Middleware");
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
