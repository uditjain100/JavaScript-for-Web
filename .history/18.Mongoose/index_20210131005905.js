// Max Port Number -> 65535
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017123/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Open :)");
  })
  .catch((error) => {
    console.log("Ohh ERROR :(");
    console.log(error);
  });
