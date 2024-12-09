import { Request, Response } from "express";
import InventoryModel from "../schemas/inventory";


export const getInventory = async (req: Request, res: Response) => {
  const { unit } = req.params;
  try {
    const inventory = await InventoryModel.find({ unit });
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ message: "Error fetching inventory", error });
  }
};


export const addInventory = async (req: Request, res: Response) => {
  const { unit, product, stock, reorderPoint } = req.body;
  try {
    console.log("unit", unit);
    const newInventory = new InventoryModel({ unit, product, stock, reorderPoint });
    const savedInventory = await newInventory.save();
    res.status(201).json(savedInventory);
  } catch (error) {
    res.status(500).json({ message: "Error adding inventory", error });
  }
};
