const mongoose = require("mongoose");

const Farm = require("../models/farm");

mongoose
  .connect("mongodb://localhost:27017/flashApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo Connected Successfully");
  })
  .catch((error) => {
    console.log("Mongo Error !! ");
    console.log(error);
  });

// Product.insertMany(pdtsArray)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log("DB ERROR !! ");
//     console.log(error);
//   });
