const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose
  .connect("mongodb://localhost:27017/relationship", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const productSchema = Schema({
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ["Summer", "Winter", "Rainy", "Spring"],
  },
});

const Product = mongoose.model("Product", productSchema);

const addProducts = async () => {
  await Product.deleteMany({});
  await Product.insertMany([
    { name: "Potato", price: 25, season: "Winter" },
    { name: "Water Melon", price: 14, season: "Summer" },
    { name: "Cauliflower", price: 34, season: "Rainy" },
    { name: "Cabbage", price: 2, season: "Spring" },
  ]);
};

// addProducts();

const farmsSchema = Schema({
  name: String,
  city: String,
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

const Farm = mongoose.model("Farm", farmsSchema);

const addFarms = async () => {
  const f = new Farm({
    name: "Belly",
    city: "Haryana",
  });
};
