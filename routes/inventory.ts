import { Router } from "express";
import { getInventory, addInventory } from "../controllers/inventory";

const router = Router();

router.get("/:unit", getInventory);
router.post("/", addInventory);

console.log("inventory router");
export default router;
