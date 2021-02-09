const express = require("express");
const app = express();
const adminRouter = require("./routers/admin");

app.use("/admin", adminRouter);
