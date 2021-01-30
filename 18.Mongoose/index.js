// Max Port Number -> 65535
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/test", {
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

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);
const Lagaan = new Movie({
  title: "Lagaan",
  year: 1990,
  score: 8.9,
  rating: "R",
});
Lagaan.save();
