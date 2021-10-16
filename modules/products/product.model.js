const mongoose =require("mongoose");
const {Schema} = mongoose;


const productSchema = new Schema({

   
//    variations:
//      {
//         type:"size/color",
//         names: ["S", "M","L","red","black","white","blue"]
//     }

    title: {type: Schema.Types.String, trim: true, required: true},
    description: {type: Schema.Types.String, trim,},
    quantity: {type: Schema.Types.Number, default: 0},
    price: {type: Schema.Types.Number, required: true, min: 1},
    isDiscount: {type: Schema.Types.Boolean, default: false},
    discountType: {type: Schema.Types.String, enum: ["flat", "percentage"], default: "flat"},
    discountAmount: {type: Schema.Types.Number, default: 0},
    isFeatured: {type: Schema.Types.Boolean, default: false},
    images: {type: Schema.Types.Array, default: []},
    variations: {type: Schema.Types.Array},
    status: {
        type: Schema.Types.String, 
        enum: ["active", "inactive", "deleted"],
        default: "inactive"
   },    
},{
    timestamps: true, versionKey: false
});

module.exports = mongoose.model("products", productSchema);