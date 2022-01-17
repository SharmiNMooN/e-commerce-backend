const express = require('express');
const router = express.Router();
const categoryController = require('./category.controller')


router.post("/api/v1.0.0/categories", categoryController.createCategory);









module.exports = router;