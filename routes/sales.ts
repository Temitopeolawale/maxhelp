import express from "express";
import  {getSales, addSales } from "../controllers/sales";

const router = express.Router();

router.get("/:unit", getSales);
router.post("/", addSales);

export default router;
