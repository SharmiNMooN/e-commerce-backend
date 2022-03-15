const express = require("express");
const router = express.Router();
const {authentication, authorization} = require("../auth/auth.midddleware");
const productController = require("./product.controller")


router.post('/api/v1.0.0/products', authentication, authorization("admin"), productController.createProduct);
router.get('/api/v1.0.0/products', productController.getProducts);
router.patch('/api/v1.0.0/products/:id', authentication, authorization("admin"),productController.upadteProduct);
router.get('/api/v1.0.0/products/:id',productController.getProduct);
router.delete('/api/v1.0.0/products/:id',authentication, authorization("admin"),productController.removeProduct);


module.exports = router;
