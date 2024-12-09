"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const FeedbackSchema = new mongoose_1.Schema({
    unit: { type: String, required: true },
    comment: { type: String, required: true },
    sentiment: { type: String, required: true },
});
const FeedbackModel = (0, mongoose_1.model)("Feedback", FeedbackSchema);
exports.default = FeedbackModel;
