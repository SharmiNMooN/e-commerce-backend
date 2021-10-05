const express = require("express");
const userRoute = require("./modules/users/user.route")
const {connectDB} = require("./config/db.js");

const app = express();

const port = 4000;


connectDB().then(()=>{
    console.log("Database is connected");
}).catch((err)=>{
    console.log(err);
})


app.use(express.json());

app.get("/",(req,res)=>{

    return res.send({
        success: true,
        message:"Welcome To E-commerce Back-end API"
    });

});

app.use("/",userRoute);





app.listen(port, ()=>{

    console.log(`Server is running on port ${port}`);
});
