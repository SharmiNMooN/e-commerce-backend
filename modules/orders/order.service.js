const orderModel = require("./order.model");
const orderItemModel = require("./order.item.model");
const productModel = require("../products/product.model");
module.exports = {
    createOrder: async(payload)=>{
        // payload.orderItems[0].productId
        let {orderItems, ...orderPayload} = payload;
        let subtotal = 0;
        let total = 0;

        orderItems = await Promise.all(orderItems.map(async(item) =>{
            const product = await productModel.findOne({ _id: item.productId })
            if(!product){
                throw new Error("product is not found");
            }
            subtotal += product.price*item.quantity;
            item.price = product.price;
            return item;
        }));

        total = subtotal;

        orderPayload.total = total;
        orderPayload.subtotal = subtotal;
        orderPayload.invoiceNo = `EK${ new Date().valueOf()}`;

        const order = await orderModel.create(orderPayload);
        orderItems = orderItems.map(item =>{
            item.orderId = order._id;
            return item;
        });
        const createdItems = await orderItemModel.create(orderItems);
        return {
            order,
            createdItems,
        }
    },
    getOrders: async(filter, skip = 0,limit = 20)=>{

        const querySpec = {};
        if(filter.customerId){
            querySpec.customerId= filter.customerId;
        }
        const orders = await orderModel.find(querySpec).skip(Number(skip)).limit(Number(limit));

        return orders;
    } 
    
}