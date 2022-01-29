const express = require("express");
const router = express.Router();
const productController = require("./product.controller")


router.post('/api/v1.0.0/products', productController.createProduct);
router.get('/api/v1.0.0/products', productController.getProducts);
router.patch('/api/v1.0.0/products/:id', productController.upadteProduct);
router.get('/api/v1.0.0/products/:id', productController.getProduct);
router.delete('/api/v1.0.0/products/:id',productController.removeProduct);


module.exports = router;
