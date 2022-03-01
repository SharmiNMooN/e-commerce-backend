/*
id,
total,
sub total,
invoice number,
customer id,
customer name,
customer address,
customer contact number,
orderstatus = pending, confirmed,processing,shipped,delivered,
status = active,inactive,deleted,
paymentstatus = paid ,unpaid,partial,
paymentmethod = cash,nagad,bkash
created at,
updated at,
paid at,
*/
const mongoose = require("mongoose");
const {Schema} = mongoose;
const orderSchema = new Schema({
    total: {type: Schema.Types.Number,required: true},
    subtotal: {type: Schema.Types.Number,required: true},
    invoiceNo: {type: Schema.Types.String, trim: true, unique: true, required: true},
    customerId: {type: Schema.Types.String, required: true},
    customerName: {type: Schema.Types.String, trim: true, required: true},
    customerPhoneNumber: {type: Schema.Types.String, trim: true, required: true},
    address: {type: Schema.Types.String, trim: true, required: true},
    status: {
        type: Schema.Types.String, 
        enum: ["active", "inactive", "deleted"],
        default: "active"
    },
    orderStatus:{
        type: Schema.Types.String, 
        enum: ["pending", "confirmed", "proccessing", "shipped", "delivered"],
        default: "pending"
    }, 
    paymentStatus:{
        type: Schema.Types.String, 
        enum: ["paid", "unpaid", "partial"],
        default: "unpaid"
    },
     paymentMethod:{
        type: Schema.Types.String, 
        enum: ["cash", "nagad", "bkash"],
        default: "cash"
    },
    paidAt:{
        type: Schema.Types.Date,
    }
},
{
    timestamps: true, versionKey: false,
}
);
module.exports = mongoose.model("orders", orderSchema);