"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSales = exports.getSales = void 0;
const sales_1 = __importDefault(require("../schemas/sales"));
const getSales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { unit } = req.params;
    try {
        const sales = yield sales_1.default.find({ unit });
        res.json(sales);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching sales", error });
    }
});
exports.getSales = getSales;
const addSales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { unit, date, amount, unitsSold } = req.body;
    try {
        const newSale = new sales_1.default({ unit, date, amount, unitsSold });
        const savedSale = yield newSale.save();
        res.status(201).json(savedSale);
    }
    catch (error) {
        res.status(500).json({ message: "Error recording sales", error });
    }
});
exports.addSales = addSales;
