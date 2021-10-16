const productModel = require("./product.model");
module.exports = {
    createProduct: async (payload)=>{

        return await productModel.create(payload);

    }
}