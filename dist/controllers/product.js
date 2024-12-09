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
exports.getProductsByUnit = exports.deleteProduct = exports.setQuantity = exports.getProducts = exports.addProduct = void 0;
const product_1 = __importDefault(require("../schemas/product"));
const unit_1 = __importDefault(require("../schemas/unit"));
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, price, description, quantityAvailable, inStock, unitName } = req.body;
        const unit = yield unit_1.default.findOne({ name: unitName });
        if (!unit) {
            res.status(404).json({ message: "Unit not found" });
            return;
        }
        const existingProduct = yield product_1.default.findOne({ name: name });
        if (existingProduct) {
            res.status(409).json({ message: "Product already exists" });
            return;
        }
        const newProduct = new product_1.default({
            name: name,
            price: price,
            description: description,
            quantityAvailable: quantityAvailable,
            inStock: inStock,
            unit: unit._id,
        });
        yield newProduct.save();
        res
            .status(201)
            .json({ success: true, message: "Product created", data: newProduct });
        return;
    }
    catch (err) {
        res.status(400).json({ success: false, message: err.message });
        return;
    }
});
exports.addProduct = addProduct;
const getProducts = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_1.default.find().populate("unit");
        res.status(200).json({ success: true, data: products });
        return;
    }
    catch (err) {
        res.status(400).json({ success: false, message: err.message });
        return;
    }
});
exports.getProducts = getProducts;
const getProductsByUnit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { unitName } = req.params;
        const productUnit = yield unit_1.default.findOne({ name: unitName });
        if (!productUnit) {
            res.status(404).json({ success: false, message: "Unit not found" });
            return;
        }
        const products = yield product_1.default.find({ unit: productUnit._id });
        res.status(200).json({ success: true, data: products });
        return;
    }
    catch (err) {
        res.status(400).json({ success: false, message: err.message });
        return;
    }
});
exports.getProductsByUnit = getProductsByUnit;
const setQuantity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { quantityAvailable } = req.body;
        const product = yield product_1.default.findById(id);
        if (!product) {
            res.status(404).json({ success: false, message: "Product not found" });
            return;
        }
        product.quantityAvailable = quantityAvailable;
        yield product.save();
        res
            .status(200)
            .json({ success: true, message: "Quantity updated", data: product });
        return;
    }
    catch (err) {
        res.status(400).json({ success: false, message: err.message });
        return;
    }
});
exports.setQuantity = setQuantity;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield product_1.default.findByIdAndDelete(id);
        if (!product) {
            res.status(404).json({ success: false, message: "Product not found" });
            return;
        }
        res.status(200).json({ success: true, message: "Product deleted" });
        return;
    }
    catch (err) {
        res.status(400).json({ success: false, message: err.message });
        return;
    }
});
exports.deleteProduct = deleteProduct;
