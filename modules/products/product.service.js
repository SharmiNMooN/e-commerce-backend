const productModel = require("./product.model");
module.exports = {
    createProduct: async (payload)=>{

        return await productModel.create(payload);

    },
    getProducts: async(filter)=>{
        return await productModel.find(filter);
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