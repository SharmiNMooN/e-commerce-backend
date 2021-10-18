const express = require("express");
const router = express.Router();
const productController = require("./product.controller")


router.post('/api/v1.0.0/products', productController.createProduct)
module.exports = router;
