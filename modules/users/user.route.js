const express = require('express');
const userController = require("./user.controller");
const router = express.Router();


//api for user registration
//api/v1.0.0/users/register-user

router.post("/api/v1.0.0/users/register-user", userController.registerUser); 


module.exports = router;