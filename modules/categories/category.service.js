const categoryModel = require("./category.model");


module.exports = {

    createCategory: async (payload)=>{

        return await categoryModel.create(payload);

    },

    getCategories: async ()=>{

        return await categoryModel.find({}).populate("parentId");

    },

    updateCategory: async (id, payload)=>{
            
        return await categoryModel.findByIdAndUpdate(id, payload, {new: true});
    }
}
