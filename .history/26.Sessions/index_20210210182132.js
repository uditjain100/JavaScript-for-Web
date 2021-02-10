const express = require("express");
const app = express();
const session = require("express-session");

app.use(session({ secret: "notagoodsecret" }));

app.get("/getSessionCount", (req, res) => {
  res.send("Count : x");
});

app.listen(3000, () => {
  console.log("Session Started");
});
