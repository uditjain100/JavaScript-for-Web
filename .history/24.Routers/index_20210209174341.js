const express = require("express");
const app = express();
const adminRouter = require("./routers/admin");

app.use("/admin", adminRouter);

app.listen(3000, () => {
  console.log("Server Started");
});
