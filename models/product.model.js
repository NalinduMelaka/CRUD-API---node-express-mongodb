// models/product.model.js

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema( // Corrected use of new keyword
  {
    name: {
      type: String,
      required: [true, "please enter product name"], // Corrected 'require' to 'required'
    },
    quantity: {
      type: Number,
      required: true, // Corrected 'require' to 'required'
      default: 0,
    },
    price: {
      type: Number,
      required: true, // Corrected 'require' to 'required'
      default: 0,
    },
    image: {
      type: String,
      required: false, // Corrected 'require' to 'required'
    },
  },
  { timestamps: true } // Corrected 'timestamp' to 'timestamps'
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product; // Correctly export the Product model
