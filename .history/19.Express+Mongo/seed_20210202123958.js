const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/App", {
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

const pdtsArray = [
  {
    name: "Milk",
    price: 2.4,
    category: "dairy",
  },
  {
    name: "apple",
    price: 1.69,
    category: "fruit",
  },
  {
    name: "chips",
    price: 1.2,
    category: "other",
  },
];

Product.insertMany(pdtsArray)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log("DB ERROR !! ");
    console.log(error);
  });
