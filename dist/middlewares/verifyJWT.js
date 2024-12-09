"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJWT = verifyJWT;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createJWT_1 = require("./createJWT");
function verifyJWT(req, res, next) {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token) {
        res.status(401).json({ message: "Unauthorized access" });
        return;
    }
    else {
        try {
            const decoded = jsonwebtoken_1.default.verify(token, createJWT_1.jwtSecretKey);
            req.decodedToken = decoded;
            next();
        }
        catch (err) {
            console.log(err);
        }
    }
}
