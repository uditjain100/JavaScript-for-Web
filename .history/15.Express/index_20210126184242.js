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
  const { query } = req.params;
  res.send("HEY this is your new Query : " + query);
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  res.send("Here is your query : " + q);
});

app.get("*", (req, res) => {
  res.send("NOOOOOOOOOOOOOOOO ....... ");
});
