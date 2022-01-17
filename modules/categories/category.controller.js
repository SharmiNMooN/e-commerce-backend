const slugify = require("slugify");
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





}