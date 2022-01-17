const mongose = require('mongoose');
const Schema = mongose.Schema;

const categorySchema = new Schema({
    title: {type: Schema.Types.String, trim: true, required: true},
    slug: {type: Schema.Types.String, lowercase: true, trim: true, unique: true},
    description: {type: Schema.Types.String, trim: true},
    status: {type: Schema.Types.String, enum: ["active", "inactive", "deleted"], default: "inactive"},
    parentId: {type: Schema.Types.ObjectId, ref: "categories"},
}, {

    timestamps: true, versionKey: false
})

module.exports = mongose.model('categories', categorySchema)
