const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.listen(3000, () => {
  console.log("Port 3000 Started Successfully");
});
