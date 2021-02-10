const express = require("express");
const app = express();
const session = require("express-session");

app.get("/getSession", (req, res) => {
  console.log();
});

app.listen(3000, () => {
  console.log("Session Started");
});
