const mongoose = require("mongoose");

const farmSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  city: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
