//const slugify = require("slugify");
const orderService = require("./order.service");

module.exports = {
    createOrder : async(req,res)=>{
        try{
            const payload = req.body;
            const { 
                customerName,
                customerPhoneNumber,
                address,
                orderItems,
                total,
                subtotal,
                paymentMethod
            } = payload;
            if(!customerName || !customerPhoneNumber || !address) {
                return res.status(400).send({
                    success: false,
                    message: "customerName, customerPhoneNumber,address are required"
                });
            }
            if(!orderItems|| !total || !subtotal || !paymentMethod){
                return res.status(400).send({
                    success: false,
                    message: "orderItems,total,subtotal,paymentMethod are required"
                });
            }
            const order = await orderService.createOrder(payload);
            return res.status(200).send({
                success: true,
                message: "Order create are successfully",
                data: order

            })


        } catch(error){
            return res.status(500).send({
                success: false,
                message: "Internal sever error",
                data: error
            });
        }


    }
    



}