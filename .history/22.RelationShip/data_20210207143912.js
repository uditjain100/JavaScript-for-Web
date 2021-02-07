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

const farmsSchema = Schema({
  name: String,
  price: Number,
  products: [{ type: Schema.Types.ObjectId }],
});
