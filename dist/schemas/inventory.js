"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const InventorySchema = new mongoose_1.Schema({
    unit: { type: String, required: true },
    product: { type: String, required: true },
    stock: { type: Number, required: true },
    reorderPoint: { type: Number, required: true },
});
const InventoryModel = (0, mongoose_1.model)("Inventory", InventorySchema);
exports.default = InventoryModel;
