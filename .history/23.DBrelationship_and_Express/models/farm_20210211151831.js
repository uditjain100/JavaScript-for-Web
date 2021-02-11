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

farmSchema.post("findOneAndDelete", async function (doc) {
  console.log(doc);
  if (doc) await Product.remove({ _id: { $in: doc.products } });
});

module.exports.Farm = mongoose.model("Farm", farmSchema);
