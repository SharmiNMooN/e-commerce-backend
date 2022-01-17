const categoryModel = require("./category.model");


module.exports = {


    createCategory: async (payload)=>{

        return await categoryModel.create(payload);

    }
}
