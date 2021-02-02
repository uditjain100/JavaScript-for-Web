const express = require("express");
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view-engine", "ejs");

app.use(express.urlencoded({ extended: true }));

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
  res.render("products.ejs", { pdts });
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const pdt = await Product.findById(id);
  res.render("details.ejs", { pdt });
});

app.get("/product/add", (req, res) => {
  res.render("add.ejs");
});

app.post("/products", async (req, res) => {
  const { name, price, category } = req.body;
  const p = new Product({
    name: name,
    price: price,
    category: ("" + category).toLowerCase(),
  });
  await p.save();
  res.redirect("/products");
});

app.get("/products/:id/update", async (req, res) => {
  const { id } = req.params;
  const pdt = await Product.findById(id);
  res.render("update.ejs", { pdt });
});

app.patch("/products/:id", async (req, res) => {
  const { id } = req.params;
  const { name, price, category } = req.body;
  const pdt = await Product.findByIdAndUpdate(id, {
    name: name,
    price: price,
    category: ("" + category).toLowerCase(),
  });
  res.render("details.ejs");
});
