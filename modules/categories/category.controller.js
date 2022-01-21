const slugify = require("slugify");
const { postCategories } = require("./category.service");
const categoryService = require("./category.service");

module.exports = {

        createCategory: async (req, res) =>{
            const payload = req.body;
            if(!payload.title){
                return res.status(400).json({
                    success: false,
                    message: "title is required"
                });
            }
            payload.slug = slugify(payload.title);
            const category = await categoryService.createCategory(payload);
            return res.status(201).send({
                success: true,
                message: "category created successfully",
                data: category
            });


        },

        getCategories: async (req, res) =>{
            const categories = await categoryService.getCategories();
            return res.status(200).send({
                success: true,
                message: "categories fetched successfully",
                data: categories
            });
        },
    
    updateCategory: async (req, res) =>{
        const payload = req.body;
        const id = req.params.id;
        const updatePayload = {};
        if(payload.title){
            updatePayload.title = payload.title;
        }
        if(payload.description){
            updatePayload.description = payload.description;
        }
        if(payload.status){
            updatePayload.status = payload.status;
        }
        if(payload.parentId){
            updatePayload.parentId = payload.parentId;
        }
        const category = await categoryService.updateCategory(id, updatePayload);
        return res.status(200).send({
            success: true,
            message: "category updated successfully",
            data: category
        });
        
    
    },

    getCategory: async(req, res)=>{
        const categoryId = req.params.id;
        const category = await categoryService.getCategory(categoryId);
        return res.status(200).send({
            success: true,
            message: "Single category fatch successfully",
            data: category

        })





    }

    
}

        

            
