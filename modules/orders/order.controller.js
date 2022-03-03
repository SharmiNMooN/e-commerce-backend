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
    },
    getOrders: async(req,res)=>{
        try{
            const {customerId, page = 1, limit = 20 } = req.query;
            const skip = (page-1) * limit;
            const orders = await orderService.getOrders({ customerId }, skip, limit);
            return res.status(200).send({
                success: true,
                message: "Orders fetch are successfully",
                data: orders
            });



        }catch(error){
            return res.status(500).send({
                success: false,
                message: "Internal sever error",
                data: error
            });

        }
    },
    updateOrder: async(req,res)=>{
        try{
            const orderId = req.params.id;
            const payload = req.body;
            const updateOrder = await orderService.updateOrder(orderId,payload);
            return res.status(200).send({
            success: true,
            message: "Order updated successfully",
            data: updateOrder
            });
        }catch(error){
            console.log(error);
            return res.status(500).send({
                success: false,
                message: "Internal sever error",
                data: error
            });
        }
    },
    getOrder: async(req,res)=>{
        try{
            const orderId = req.params.id;
            const order = await orderService.getOrder(orderId);
            return res.status(200).send({
            success: true,
            message: "Order fatched successfully",
            data: order
        });
        }catch(error){
            console.log(error);
            return res.status(500).send({
                success: false,
                message: "Internal sever error",
                data: error
            });
        }

    },
}