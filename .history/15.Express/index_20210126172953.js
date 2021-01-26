const express = require("express");
const app = express();
// console.log(app);

// app.use((req, res) => {
//   console.log("We got your request!!");
//   res.send("Hey your response is Here");
// });

app.listen(3030, () => {
  console.log("Hey I am here :)");
});

app.use("/cat", (req, res) => {
  res.send("MEOWWWWWWW ...");
});
