const slugify = require("slugify");
const productService = require("./product.service");

module.exports = {


    createProduct: async (req,res)=>{
        const payload = req.body;
        if(!payload.title || !payload.price){
            return res.status(400).send({
                success: false,
                message: "title and price is required"
            });
        }
        if(!payload.variations || payload.variations.length<1){
            return res.status(400).send({
                success: false,
                message: "Variation at least 1 is required"

            });
            
        }

        if(!payload.categoryId){
            return res.status(400).send({
                success: false,
                message: "categoryId is required"
            })
        }

        payload.slug = slugify(payload.title);
         const product = await productService.createProduct(payload);
         return res.status(201).send({

            success: true,
            message: "product created successfully",
            data: product
         });
    },

    getProducts: async(req,res)=>{
        const products = await productService.getProducts();
        return res.status(200).send({
            success: true,
            message: "product fetched successfully",
            data: products
        });



    },


}