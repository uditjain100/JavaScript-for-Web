const mongoose = require("mongoose");

const farmSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true."Name is required"],
  },
  city: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["fruit", "vegetable", "dairy", "other"],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
