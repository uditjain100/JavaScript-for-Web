const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view-engine", "ejs");

const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/App", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo Connected Successfully");
  })
  .catch((error) => {
    console.log("Mongo Error !! ");
    console.log(error);
  });

app.listen(3000, () => {
  console.log("Port 3000 Started Successfully");
});

app.get("/products", async (req, res) => {
  const pdts = await Product.find({});
  console.log(pdts);
  res.render("products.ejs", { pdts });

  res.send("Heyyyyyyyyyyyyyyy ... !!");
});
