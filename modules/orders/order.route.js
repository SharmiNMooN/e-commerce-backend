const express = require("express");
const orderController = require("./order.controller");
const router =express.Router();
// api for place a order//

router.post("/api/v1.0.0/orders", orderController.createOrder);

module.exports = router;