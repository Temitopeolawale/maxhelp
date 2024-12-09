import { Router } from "express";
import { createUnit, deleteUnit, getUnits } from "../controllers/unit";

const unitRouter = Router();

unitRouter.post("/create", createUnit);
unitRouter.get("/get", getUnits);
unitRouter.delete("/delete/:id", deleteUnit);

export default unitRouter;
