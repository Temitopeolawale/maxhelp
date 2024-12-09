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
exports.deleteUnit = exports.getUnits = exports.createUnit = void 0;
const unit_1 = __importDefault(require("../schemas/unit"));
const createUnit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, location } = req.body;
        const existingUnit = yield unit_1.default.findOne({ name: name });
        if (existingUnit) {
            res.status(409).json({ message: "Unit already exists" });
            return;
        }
        const unit = new unit_1.default({
            name: name,
            location: location,
        });
        yield unit.save();
        res
            .status(201)
            .json({ success: true, message: "Unit created", data: unit });
        return;
    }
    catch (err) {
        res.status(400).json({ success: false, message: err.message });
        return;
    }
});
exports.createUnit = createUnit;
const getUnits = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const units = yield unit_1.default.find();
        res.status(200).json({ success: true, data: units });
        return;
    }
    catch (err) {
        res.status(400).json({ success: false, message: err.message });
        return;
    }
});
exports.getUnits = getUnits;
const deleteUnit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const unit = yield unit_1.default.findByIdAndDelete(id);
        if (!unit) {
            res.status(404).json({ success: false, message: "Unit not found" });
            return;
        }
        res.status(200).json({ success: true, message: "Unit deleted" });
        return;
    }
    catch (err) {
        res.status(400).json({ success: false, message: err.message });
        return;
    }
});
exports.deleteUnit = deleteUnit;
