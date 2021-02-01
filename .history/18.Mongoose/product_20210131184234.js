const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopApp", {
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

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
});

const Product = mongoose.model("Product", productSchema);

const bike = new Product({
  name: "Duke",
  price: "asdf ;lkj",
});
bike
  .save()
  .then((data) => {
    console.log("It Worked !!");
    console.log(data);
  })
  .catch((error) => {
    console.log("Ohh ERROR !!");
    console.log(error);
  });
