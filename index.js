const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // to use form submit

const mongoose = require("mongoose");
const Product = require("./models/product.model");
require("dotenv").config();

const db_password = process.env.password;
const mongname = process.env.mongname;

const productRoute = require("./routes/product.route");

app.use("/api/products", productRoute);

app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update product

app.put("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    `mongodb+srv://${mongname}:${db_password}@backenddb.iypxux8.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB`
  )
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log("conection failed", err);
  });

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

//delete a product
app.delete("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }
    res.status(400).json({ message: "product deleted sucessfylly" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
