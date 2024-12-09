"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sales_1 = require("../controllers/sales");
const router = express_1.default.Router();
router.get("/:unit", sales_1.getSales);
router.post("/", sales_1.addSales);
exports.default = router;
