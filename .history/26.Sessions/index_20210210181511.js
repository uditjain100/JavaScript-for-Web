const express = require("express");
const app = express();
const session = require("express-session");

app.listen(3000, () => {
  console.log("Session Started");
});
