const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"));
app.use(morgan("dev"));
app.use(morgan("common"));

// app.use("/secret", (req, res, next) => {
//   const { password } = req.query;
//   if (password === "000000") next();
//   else res.send("Give the Correct PassWord");
// });

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "000000") next();
  else res.send("Give the Correct PassWord");
};

app.use("/dogs", (req, res, next) => {
  console.log("Dogooooooooooo ... !!");
  next();
});

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(
    req.method.toUpperCase() + " " + req.path + " " + req.requestTime
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

app.get("/secret", (req, res) => {
  res.send("You are a Moron");
});

app.get("/", (req, res) => {
  console.log("Heyyyyyyyyyyyyy ... !!");
  res.send("Heyyyyyyyyyyyyy ... !!");
});

app.get("/dogs", (req, res) => {
  console.log("Heyyyyyyyyyyyyy Dogo ... !!");
  res.send("Heyyyyyyyyyyyyy Dogo ... !!");
});

app.use((req, res) => {
  res.status(404).send("NOT FOUND");
});

app.listen(3000, () => {
  console.log("Server Started !!");
});
