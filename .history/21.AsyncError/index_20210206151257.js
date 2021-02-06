const express = require("express");
const app = express();
const path = require("path");
const methodoverride = require("method-override");
const AppError = require("./AppError");

app.set("views", path.join(__dirname, "views"));
app.set("view-engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodoverride("_method"));

const categories = ["fruit", "vegetable", "dairy", "other"];

const mongoose = require("mongoose");

const Product = require("./models/product");
const { nextTick } = require("process");

mongoose
  .connect("mongodb://localhost:27017/ErrorHandlerApp", {
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

// app.get("/products", async (req, res) => {
//   const pdts = await Product.find({});
//   res.render("products.ejs", { pdts });
// });

function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((e) => next(e));
  };
}

app.get("/products/:id", wrapAsync(   async (req, res, next) => {
    const { id } = req.params;
    const pdt = await Product.findById(id);
    if (!pdt) throw next(new AppError(401, "Product Not Found"));
    res.render("details.ejs", { pdt });
)});

app.get("/product/add", (req, res, next) => {
  // return next(new AppError(401, "Not Allowed"));
  res.render("add.ejs");
});

app.post("/products", async (req, res, next) => {
  try {
    const { name, price, category } = req.body;
    const p = new Product({
      name: name,
      price: price,
      category: ("" + category).toLowerCase(),
    });
    await p.save();
    res.redirect("/products");
  } catch (e) {
    next(e);
  }
});

app.get("/products/:id/update", async (req, res, next) => {
  try {
    const { id } = req.params;
    const pdt = await Product.findById(id);
    res.render("update.ejs", { pdt, categories });
  } catch (e) {
    next(e);
  }
});

app.patch("/products/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, price, category } = req.body;
    await Product.findByIdAndUpdate(id, {
      name: name,
      price: price,
      category: ("" + category).toLowerCase(),
    });
    const pdt = await Product.findById(id);
    res.render("details.ejs", { pdt });
  } catch (e) {
    next(e);
  }
});

app.delete("/products/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    const pdts = await Product.find({});
    res.render("products.ejs", { pdts });
  } catch (e) {
    next(e);
  }
});

app.get("/products", async (req, res, next) => {
  try {
    const { category } = req.query;
    if (category) {
      const pdts = await Product.find({ category });
      res.render("categoryList.ejs", { pdts, category });
    } else {
      const pdts = await Product.find({});
      res.render("products.ejs", { pdts });
    }
  } catch (e) {
    next(e);
  }
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Something went Wrong" } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("Port 3000 Started Successfully");
});
