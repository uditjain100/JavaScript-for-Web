const express = require("express");
const app = express();
// console.log(app);

app.use(() => {
  console.log("We got youor request!!");
});

app.listen(3030, () => {
  console.log("Hey I am here :)");
});
