const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017123/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Open :)");
  })
  .catch(() => {
    console.log("Ohh ERROR :(");
  });
