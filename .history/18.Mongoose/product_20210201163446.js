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

// Instance Method
productSchema.methods.greet = function () {
  console.log("Heyyyyyyyyyyyyyyyyyyyy ... !!");
};

// Static Method
productSchema.statics.sale = function () {
  return this.updateMany({}, { price: 0 });
};

// virtuals
productSchema.virtual("details").get(function () {
  return "" + this.name + " : " + this.price;
});

const Product = mongoose.model("Product", productSchema);

// const motorbike = new Product({
//   name: "Haya Buza",
//   price: "6000",
//   size: "S",
//   qty: {
//     online: 2,
//   },
// });
// motorbike
//   .save()
//   .then((data) => {
//     console.log("It Worked !!");
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Ohh ERROR !!");
//     console.log(error);
//   });

const car = new Product({
  name: "Audi",
  price: "12000",
  size: "B",
  qty: {
    online: 23,
    inStore: 29,
  },
});
car
  .save()
  .then((data) => {
    console.log("It Worked !!");
    console.log(data);
  })
  .catch((error) => {
    console.log("Ohh ERROR !!");
    console.log(error);
  });

car.greet();
Product.sale().then((res) => console.log(res));
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
