const express = require("express");
const app = express();
const path = require("path");
const methodoverride = require("method-override");
const mongoose = require("mongoose");
const flash = require("connect-flash");

const Product = require("./models/product");
const Farm = require("./models/farm");

app.set("views", path.join(__dirname, "views"));
app.set("view-engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodoverride("_method"));

const categories = ["fruit", "vegetable", "dairy", "other"];

mongoose
  .connect("mongodb://localhost:27017/flashApp", {
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

app.get("/farms", async (req, res) => {
  const farms = await Farm.find({});
  res.render("./farms/farms.ejs", { farms });
});

app.get("/farm/add", async (req, res) => {
  res.render("./farms/add.ejs");
});

app.post("/farms", async (req, res) => {
  const f = new Farm(req.body);
  await f.save();
  res.redirect("/farms");
});

app.get("/farms/:id", async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id).populate("products");
  res.render("./farms/details.ejs", { farm });
});

app.get("/farm/:id/update", async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id);
  res.render("./farms/update.ejs", { farm });
});

app.patch("/farms/:id", async (req, res) => {
  const { id } = req.params;
  const { name, city, email } = req.body;
  await Farm.findByIdAndUpdate(id, {
    name: name,
    city: city,
    email: email,
  });
  const farm = await Farm.findById(id);
  res.render("./farms/details.ejs", { farm });
});

//TODO:

app.delete("/farms/:id", async (req, res) => {
  await Farm.findByIdAndDelete(req.params.id);
  res.redirect("/farms");
});

//Products Routes

app.get("/farm/:id/products", async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id).populate("products");
  res.render("./products/products.ejs", { farm });
});

app.get("/farms/:id/product/add", async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id);
  res.render("./products/add.ejs", { farm });
});

app.post("/farms/:id/products", async (req, res) => {
  const { id } = req.params;
  var farm = await Farm.findById(id);
  const { name, price, category } = req.body;
  var p = new Product({
    name: name,
    price: price,
    category: ("" + category).toLowerCase(),
    farm: farm,
  });
  farm.products.push(p);
  await farm.save();
  await p.save();
  farm = await Farm.findById(id).populate("products");
  res.render("./farms/details.ejs", { farm });
});

app.get("/farms/:farm_id/products/:id", async (req, res) => {
  const { farm_id, id } = req.params;
  const farm = await Farm.findById(farm_id);
  const pdt = await Product.findById(id);
  res.render("./products/details.ejs", { pdt, farm });
});

app.get("/farms/:farm_id/products/:id/update", async (req, res) => {
  const { farm_id, id } = req.params;
  const farm = await Farm.findById(farm_id);
  const pdt = await Product.findById(id);
  res.render("./products/update.ejs", { pdt, categories, farm });
});

app.patch("/farms/:farm_id/products/:id", async (req, res) => {
  const { farm_id, id } = req.params;
  const farm = await Farm.findById(farm_id);
  const { name, price, category } = req.body;
  await Product.findByIdAndUpdate(id, {
    name: name,
    price: price,
    category: ("" + category).toLowerCase(),
  });
  const pdt = await Product.findById(id);
  res.render("./products/details.ejs", { pdt, farm });
});

app.delete("/farms/:farm_id/products/:id", async (req, res) => {
  const { id, farm_id } = req.params;
  await Farm.findByIdAndUpdate(farm_id, { $pull: { products: id } });
  await Product.findByIdAndDelete(id);
  res.redirect("/farms/" + farm_id);
});

app.listen(3000, () => {
  console.log("Port 3000 Started Successfully");
});
