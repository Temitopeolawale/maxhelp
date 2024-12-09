"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    quantityAvailable: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
    unit: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Unit",
    },
});
const ProductModel = (0, mongoose_1.model)("Product", ProductSchema);
exports.default = ProductModel;
