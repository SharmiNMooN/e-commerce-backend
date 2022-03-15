const express = require("express");
const orderController = require("./order.controller");
const authMiddleware = require("../auth/auth.midddleware");
const router =express.Router();
// api for place a order//

eware = require("../auth/auth.midddleware");
router.post("/api/v1.0.0/orders",
    authMiddleware.authentication, 
    authMiddleware.authorization("customer"), 
    orderController.createOrder);

router.get("/api/v1.0.0/orders",
    authMiddleware.authentication,
    authMiddleware.authorization("admin", "customer"),
    orderController.getOrders);

router.patch("/api/v1.0.0/orders/:id", 
    authMiddleware.authentication, 
    authMiddleware.authorization("admin"),
    orderController.updateOrder);

router.get("/api/v1.0.0/orders/:id",
    authMiddleware.authentication, 
    authMiddleware.authorization("admin","customer"),
    orderController.getOrder);

router.delete("/api/v1.0.0/orders/:id",
    authMiddleware.authentication,
    authMiddleware.authorization("admin"),
    weq7orderController.removeOrder);

module.exports = router