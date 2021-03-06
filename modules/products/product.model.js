const mongoose =require("mongoose");
const {Schema} = mongoose;


const productSchema = new Schema({

   
//    variations:
//      {
//         type:"size/color/weight",
//         names: ["S", "M","L","red","black","white","blue","liter","kg"]
//     }

    title: {type: Schema.Types.String, trim: true, required: true},
    slug: {type: Schema.Types.String, lowercase: true, trim: true, unique: true},
    description: {type: Schema.Types.String, trim: true},
    quantity: {type: Schema.Types.Number, default: 0},
    price: {type: Schema.Types.Number, required: true, min: 1},
    isDiscount: {type: Schema.Types.Boolean, default: false},
    discountType: {type: Schema.Types.String, enum: ["flat", "percentage"], default: "percentage"},
    discountAmount: {type: Schema.Types.Number, default: 0},
    isFeatured: {type: Schema.Types.Boolean, default: false},
    images: {type: Schema.Types.Array, default: []},
    variations: {type: Schema.Types.Array, required: true},
    status: {
        type: Schema.Types.String, 
        enum: ["active", "inactive", "deleted"],
        default: "inactive"
   }, 
   categoryId:{
       type: Schema.Types.String, required:true
    },
    subCategoryId:{
        type: Schema.Types.String,
    }
          
},
{
    timestamps: true, versionKey: false
});

module.exports = mongoose.model("products", productSchema);