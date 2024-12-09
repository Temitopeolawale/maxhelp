import express from "express";
import { getFeedback } from "../controllers/feedback";

const router = express.Router();

router.get("/:unit", getFeedback);

export default router;
