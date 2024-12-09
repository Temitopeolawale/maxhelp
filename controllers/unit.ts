import { Request, Response } from "express";
import UnitModel from "../schemas/unit";

const createUnit = async (req: Request, res: Response) => {
  try {
    const { name, location } = req.body;
    const existingUnit = await UnitModel.findOne({ name: name });
    if (existingUnit) {
      res.status(409).json({ message: "Unit already exists" });
      return;
    }

    const unit = new UnitModel({
      name: name,
      location: location,
    });

    await unit.save();
    res
      .status(201)
      .json({ success: true, message: "Unit created", data: unit });
    return;
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
    return;
  }
};

const getUnits = async (_: Request, res: Response) => {
  try {
    const units = await UnitModel.find();
    res.status(200).json({ success: true, data: units });
    return;
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
    return;
  }
};

const deleteUnit = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const unit = await UnitModel.findByIdAndDelete(id);
    if (!unit) {
      res.status(404).json({ success: false, message: "Unit not found" });
      return;
    }
    res.status(200).json({ success: true, message: "Unit deleted" });
    return;
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
    return;
  }
};

export { createUnit, getUnits, deleteUnit };
