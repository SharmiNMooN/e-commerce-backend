/* 
id,
order id ,
product id,
name,
description,
variations,
quantity,
price,
*/
const mongoose = require("mongoose");
const { Schema } = mongoose;
const orderItemSchema = new mongoose.Schema({
    orderId : {type: Schema.Types.ObjectId, required:true},
    productId: {type: Schema.Types.ObjectId, required:true},
    name: {type: Schema.Types.String, trim: true, required: true},
    description: {type: Schema.Types.String, trim: true},
    variations: {type: Schema.Types.Array,  required: true},
    quantity: {type: Schema.Types.Number,  required: true},
    price: {type: Schema.Types.Number,  required: true}    
}); 
module.exports = mongoose.model("orderitems", orderItemSchema); 