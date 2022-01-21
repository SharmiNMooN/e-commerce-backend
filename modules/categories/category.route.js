const express = require('express');
const router = express.Router();
const categoryController = require('./category.controller')


router.post("/api/v1.0.0/categories", categoryController.createCategory);
router.get("/api/v1.0.0/categories", categoryController.getCategories);
router.patch("/api/v1.0.0/categories/:id", categoryController.updateCategory);
router.get("/api/v1.0.0/categories/:id", categoryController.getCategory);
router.delete("/api/v1.0.0/categories/:id", categoryController.deleteCategory);









module.exports = router;