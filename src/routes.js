const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// Creates an object in mongodb
routes.get("/products", ProductController.index);

module.exports = routes;