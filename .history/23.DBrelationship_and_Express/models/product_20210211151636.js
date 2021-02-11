const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    enum: ["fruit", "vegetable", "dairy", "other"],
  },
  farm: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Farm",
  },
});

module.exports.Product = mongoose.model("Product", productSchema);
