const mongoose = require("mongoose");
const Product = require("./product");

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

farmSchema.post("findByIdAndDelete", async (farm) => {
  if (farm.products.length)
    await Product.deleteMany({ id: { $in: farm.products } });
});

const Farm = mongoose.model("Farm", farmSchema);

module.exports = Farm;
