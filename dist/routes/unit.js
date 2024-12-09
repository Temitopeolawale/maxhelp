"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const unit_1 = require("../controllers/unit");
const unitRouter = (0, express_1.Router)();
unitRouter.post("/create", unit_1.createUnit);
unitRouter.get("/get", unit_1.getUnits);
unitRouter.delete("/delete/:id", unit_1.deleteUnit);
exports.default = unitRouter;
