const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const Product = require("./models/product.model");
require("dotenv").config();

const db_password = process.env.password;
const mongname = process.env.mongname;

app.get("/", (req, res) => {
  res.send("Hello World");
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
