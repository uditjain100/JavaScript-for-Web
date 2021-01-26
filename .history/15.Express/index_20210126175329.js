const { query } = require("express");
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

app.use("/cats", (req, res) => {
  res.send("MEOWWWWWWW ...");
});

app.get("/dogs", (req, res) => {
  res.send("Barkkkkkkkkkk ... ");
});

app.get("/", (req, res) => {
  res.send("No Answer Uaaaaaaaaa ... ");
});

app.get("/r/:query", (req, res) => {
  res.send("HEY this is your new Query : " + query);
});

app.get("*", (req, res) => {
  res.send("NOOOOOOOOOOOOOOOO ....... ");
});
