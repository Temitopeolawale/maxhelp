"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtSecretKey = void 0;
exports.createJWT = createJWT;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.jwtSecretKey = "$)npsbidjoblodbasljdow944p9nldjbudl";
function createJWT(userPayload) {
    //set Expiration
    const expiresIn = "90h";
    //create token
    const token = jsonwebtoken_1.default.sign(userPayload, exports.jwtSecretKey, { expiresIn });
    return token;
}
