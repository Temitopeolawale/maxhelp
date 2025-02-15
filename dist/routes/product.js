"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("../controllers/product");
const verifyJWT_1 = require("../middlewares/verifyJWT");
const productRouter = (0, express_1.Router)();
productRouter.post("/add", verifyJWT_1.verifyJWT, product_1.addProduct);
productRouter.get("/get", verifyJWT_1.verifyJWT, product_1.getProducts);
productRouter.get("/get-products/:unitName", verifyJWT_1.verifyJWT, product_1.getProductsByUnit);
productRouter.patch("/set-quantity/:id", verifyJWT_1.verifyJWT, product_1.setQuantity);
productRouter.delete("/delete/:id", product_1.deleteProduct);
exports.default = productRouter;
