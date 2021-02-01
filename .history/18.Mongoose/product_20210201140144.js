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
    default: "0",
    min: [0, "Price must be greater than Zero"],
  },
  categories: {
    type: [String],
    default: ["Fake"],
  },
  size: {
    type: String,
    enum: ["S", "M", "B"],
  },
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
});

const Product = mongoose.model("Product", productSchema);

const bike = new Product({
  name: "Haya Buza",
  price: "6000",
  size: "XL",
  qty: {
    online: 2,
  },
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

// Product.findOneAndUpdate(
//   { name: "Duke" },
//   { price: 125 },
//   { new: true, runValidators: true }
// )
//   .then((data) => {
//     console.log("It Worked !!");
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Ohh ERROR !!");
//     console.log(error);
//   });
