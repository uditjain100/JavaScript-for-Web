const express = require("express");
const app = express();
const session = require("express-session");

app.use(session({ secret: "notagoodsecret" }));

app.get("/getSessionCount", (req, res) => {
  if (req.session.count) req.session.count += 1;
  else req.session.count = 1;
  res.send("Count : x");
});

app.listen(3000, () => {
  console.log("Session Started");
});
