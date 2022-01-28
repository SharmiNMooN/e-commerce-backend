const productModel = require("./product.model");
module.exports = {
    createProduct: async (payload)=>{

        return await productModel.create(payload);

    },
    getProducts: async()=>{
        return await productModel.find({}).populate("parentId");
    },
}