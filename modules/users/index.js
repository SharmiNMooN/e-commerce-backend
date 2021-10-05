const express = require("express");

const router = express.Router();

router.get("/api/sharmin",(req,res) =>{
        return res.send({
        message: "Hlw ecommerce API"
    });

});
module.exports = router;