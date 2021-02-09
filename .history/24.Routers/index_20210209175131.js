const express = require("express");
const app = express();
const adminRouter = require("./routers/admin");
const userRouter = require("./routers/user");

app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("Server Started");
});
