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
        payload.slug = slugify(payload.title);
         const product = await productService.createProduct(payload);
         return res.status(201).send({

            success: true,
            message: "product created successfully",
            data: product
         })
    }
}