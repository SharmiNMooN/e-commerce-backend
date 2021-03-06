const express = require("express");
const userRoute = require("./modules/users/user.route");
const productRoute = require("./modules/products/product.route");
const {connectDB} = require("./config/db.js");
const categoryRoute = require("./modules/categories/category.route");
const authRoute = require("./modules/auth/auth.route");
const orderRoute = require("./modules/orders/order.route");


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
app.use("/",authRoute);
app.use("/", userRoute);
app.use("/", productRoute);
app.use("/", categoryRoute);
app.use("/", orderRoute);


app.use(function(err,req,res,next){
    if(err){
        console.error(err);
        return res.status(500).send({
            success: false,
            message: "internal server error"
        })
    }
});




app.listen(port, ()=>{

    console.log(`Server is running on port ${port}`);
});

