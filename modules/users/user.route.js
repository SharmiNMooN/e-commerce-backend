const express = require('express');
const userController = require("./user.controller");
const router = express.Router();
const {authentication, authorization} = require("../auth/auth.midddleware")


//api for get list
router.get("/api/v1.0.0/users", authentication, authorization("admin", "customer"), userController.getAllUser);
// api for get user details
router.get("/api/v1.0.0/users/:id", authentication, authorization("admin", "customer"), userController.getUserDetails);
//api for user update
router.patch("/api/v1.0.0/users/:id", authentication, authorization("admin", "customer"), userController.updateUser);


module.exports = router;