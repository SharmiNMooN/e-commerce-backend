const mongoose = require ("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({

    firstName: { type: Schema.Types.String, trim: true, required: true},
    lastName: { type: Schema.Types.String, trim: true, required: true},
    image: { type: Schema.Types.String, trim: true},
    email: { type: Schema.Types.String, trim: true, unique: false, required: false, index: false},
    adress: { type: Schema.Types.String, trim: true},
    phoneNumber: { type: Schema.Types.String, trim: true, unique: true},
    status: {
         type: Schema.Types.String, 
         enum: ["active", "inactive", "blocked"],
         default: "active"
    },
    password: { type: Schema.Types.String, trim: true, required: true},
    userType: { 
        type: Schema.Types.String,
        trim: true,
        required: true,
        enum: ["customer", "admin"],
        default: "customer"
    },

}, {
    timestamps: true,versionKey: false,
});
 module.exports = mongoose.model("users",userSchema);
 