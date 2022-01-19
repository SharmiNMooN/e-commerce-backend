const categoryModel = require("./category.model");


module.exports = {


    createCategory: async (payload)=>{

        return await categoryModel.create(payload);

    },

    getCategories: async ()=>{

        return await categoryModel.find({}).populate("parentId");

    }   

}

