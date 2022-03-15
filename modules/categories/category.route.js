const express = require('express');
const router = express.Router();
const authMiddleware = require("../auth/auth.midddleware");
const categoryController = require('./category.controller');


router.post("/api/v1.0.0/categories",
     authMiddleware.authentication, 
     authMiddleware.authorization(admin), 
     categoryController.createCategory);

router.get("/api/v1.0.0/categories",
    authMiddleware.authentication,
    authMiddleware.authorization("admin","customer"),
    categoryController.getCategories);

router.patch("/api/v1.0.0/categories/:id",
    authMiddleware.authentication,
    authMiddleware.authorization("admin"),
    categoryController.updateCategory);

router.get("/api/v1.0.0/categories/:id",
    authMiddleware.authentication,
    authMiddleware.authorization("admin","customer"),
    categoryController.getCategory);

router.delete("/api/v1.0.0/categories/:id", 
    authMiddleware.authentication,
    authMiddleware.authorization("admin"),
    categoryController.deleteCategory);









module.exports = router;