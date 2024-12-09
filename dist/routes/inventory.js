"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inventory_1 = require("../controllers/inventory");
const router = (0, express_1.Router)();
router.get("/:unit", inventory_1.getInventory);
router.post("/", inventory_1.addInventory);
console.log("inventory router");
exports.default = router;
