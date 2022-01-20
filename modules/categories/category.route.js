const express = require('express');
const router = express.Router();
const categoryController = require('./category.controller')


router.post("/api/v1.0.0/categories", categoryController.createCategory);
router.get("/api/v1.0.0/categories", categoryController.getCategories);
router.patch("/api/v1.0.0/categories/:id", categoryController.updateCategory);









module.exports = router;