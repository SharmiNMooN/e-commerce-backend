const express = require('express');
const authController = require("./auth.controller");
const router = express.Router();


//api for user registration
//api/v1.0.0/users/register-user

router.post("/api/v1.0.0/auth/register-user", authController.registerUser); 
router.post("/api/v1.0.0/auth/login", authController.loginUser); 

module.exports = router;