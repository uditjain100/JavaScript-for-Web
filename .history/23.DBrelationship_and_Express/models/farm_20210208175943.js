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

farmSchema.post("findOneAndDelete", async function (farm) {
  console.log(farm);
  if (farm.products.length) {
    const res = await Product.deleteMany({ _id: { $in: farm.products } });
    console.log(res);
  }
});

const Farm = mongoose.model("Farm", farmSchema);

module.exports = Farm;
