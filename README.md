# CRUD API with MongoDB, Express, and Node.js

This project is a simple CRUD (Create, Read, Update, Delete) API built using MongoDB, Express, and Node.js. It allows users to manage products in a database through HTTP requests.

## Table of Contents

- [CRUD API with MongoDB, Express, and Node.js](#crud-api-with-mongodb-express-and-nodejs)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)

## Installation

To get started with this project, you need to have Node.js and npm (Node Package Manager) installed on your machine. Follow these steps to set up the project:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/NalinduMelaka/CRUD-API---node-express-mongodb.git
   cd folder name

   ```

2. **Install dependencies:**
   npm install

3. **Set up MongoDB:**
4. **create env file and add the following variables**
   password=your_mongodb_password
   mongname=your_mongodb_username
5. **Start the server:**
   npm run dev

## Usage

This API allows you to perform CRUD operations on products. The API provides the following endpoints:

1.  Create a Product
    URL: /api/products
    Method: POST
    Description: Adds a new product to the database.
    Request Body: JSON object containing product details.
    Response: Returns the created product.

        POST /api/products
        {
          "name": "Product Name",
          "price": 99.99,
          "description": "Product Description"
        }

2.  Get All Products
    URL: /api/products
    Method: GET
    Description: Retrieves all products from the database.
    Response: Returns an array of products.
3.  Get a Single Product
    URL: /api/products/:id
    Method: GET
    Description: Retrieves a product by its ID.
    Response: Returns the product object.
4.  Update a Product
    URL: /api/products/:id
    Method: PUT
    Description: Updates an existing product's details.
    Request Body: JSON object containing updated product details.
    Response: Returns the updated product object.
5.  Delete a Product
    URL: /api/products/:id
    Method: DELETE
    Description: Deletes a product from the database.
    Response: Returns a success message upon deletion.
