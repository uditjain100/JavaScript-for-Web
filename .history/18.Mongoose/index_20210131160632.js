// Max Port Number -> 65535
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/movieApp", {
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
// const Lagaan = new Movie({
//   title: "Lagaan",
//   year: 1990,
//   score: 8.9,
//   rating: "R",
// });
// Lagaan.save();

Movie.insertMany([
  {
    title: "Lagaan",
    year: 1990,
    score: 8.9,
    rating: "R",
  },
  {
    title: "ABCD",
    year: 2001,
    score: 5.2,
    rating: "R",
  },
  {
    title: "Breaking Bad",
    year: 2005,
    score: 9.5,
    rating: "R",
  },
  {
    title: "Dexter",
    year: 2006,
    score: 9.0,
    rating: "PG",
  },
  {
    title: "Preacher",
    year: 2015,
    score: 8.9,
    rating: "PG-13",
  },
])
  .then((data) => {
    console.log("IT WORKED !!");
    console.log(data);
  })
  .catch((error) => {
    console.log("Ohhh ERROER !!");
    console.log(error);
  });
