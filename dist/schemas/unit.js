"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UnitSchema = new mongoose_1.Schema({
    name: { type: String, required: true, },
    location: { type: String, required: true, },
});
const UnitModel = (0, mongoose_1.model)("Unit", UnitSchema);
exports.default = UnitModel;
