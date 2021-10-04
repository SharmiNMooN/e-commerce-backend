const express = require("express");

const app = express();

const port = 4000;

app.use(express.json());

app.get("/",(req,res)=>{

    return res.send({
        success: true,
        message:"Welcome To E-commerce Back-end API"
    });

});







app.listen(port, ()=>{

    console.log(`Server is running on port ${port}`);
});

