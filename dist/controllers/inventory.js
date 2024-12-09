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
exports.addInventory = exports.getInventory = void 0;
const inventory_1 = __importDefault(require("../schemas/inventory"));
const getInventory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { unit } = req.params;
    try {
        const inventory = yield inventory_1.default.find({ unit });
        res.json(inventory);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching inventory", error });
    }
});
exports.getInventory = getInventory;
const addInventory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { unit, product, stock, reorderPoint } = req.body;
    try {
        console.log("unit", unit);
        const newInventory = new inventory_1.default({ unit, product, stock, reorderPoint });
        const savedInventory = yield newInventory.save();
        res.status(201).json(savedInventory);
    }
    catch (error) {
        res.status(500).json({ message: "Error adding inventory", error });
    }
});
exports.addInventory = addInventory;
