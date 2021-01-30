const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:17017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Open :)");
  })
  .catch(() => {
    console.log("Ohh ERROR :(");
  });
