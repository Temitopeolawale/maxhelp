"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SalesSchema = new mongoose_1.Schema({
    unit: { type: String, required: true },
    date: { type: Date, required: true },
    amount: { type: Number, required: true },
    unitsSold: { type: Number, required: true },
});
const SalesModel = (0, mongoose_1.model)("Sales", SalesSchema);
exports.default = SalesModel;
