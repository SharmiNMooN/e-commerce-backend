const express = require('express');
const userController = require("./user.controller");
const router = express.Router();


//api for get list
router.get("/api/v1.0.0/users",userController.getAllUser);


module.exports = router;