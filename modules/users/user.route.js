const express = require('express');
const userController = require("./user.controller");
const router = express.Router();


//api for get list
router.get("/api/v1.0.0/users",userController.getAllUser);
// api for get user details
router.get("/api/v1.0.0/users/:id",userController.getUserDetails);
//api for user update
router.patch("/api/v1.0.0/users/:id",userController.updateUser);


module.exports = router;