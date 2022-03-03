const express = require("express");
const orderController = require("./order.controller");
const router =express.Router();
// api for place a order//

router.post("/api/v1.0.0/orders", orderController.createOrder);
router.get("/api/v1.0.0/orders", orderController.getOrders);
router.patch("/api/v1.0.0/orders/:id", orderController.updateOrder);
router.get("/api/v1.0.0/orders/:id", orderController.getOrder);
router.delete("/api/v1.0.0/orders/:id",orderController.removeOrder);

module.exports = router;