const mongoose = require("mongoose");
const Schema = mongoose.Schema();
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
  age: Number,
  address: [
    {
      street: String,
      city: String,
      state: String,
      country: String,
    },
  ],
});
