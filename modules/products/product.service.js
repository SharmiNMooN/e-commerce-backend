const productModel = require("./product.model");
module.exports = {
    createProduct: async (payload)=>{

        return await productModel.create(payload);

    },
    getProducts: async()=>{
        return await productModel.find({});
    },

    updateProduct: async(payload,id)=>{
        return await productModel.findOneAndUpdate({_id:id},payload,{new:true});

    },

    getProduct: async(productId)=>{
        return await productModel.findOne({_id:productId});

    },

    removeProduct: async(productId)=>{
        return await productModel.findOneAndRemove({_id:productId});
    }
}