import { Request, Response } from "express";
import SalesModel from "../schemas/sales";


export const getSales = async (req: Request, res: Response) => {
  const { unit } = req.params;
  try {
    const sales = await SalesModel.find({ unit });
    res.json(sales);
  } catch (error) {
    res.status(500).json({ message: "Error fetching sales", error });
  }
};


export const addSales = async (req: Request, res: Response) => {
  const { unit, date, amount, unitsSold } = req.body;
  try {
    const newSale = new SalesModel({ unit, date, amount, unitsSold });
    const savedSale = await newSale.save();
    res.status(201).json(savedSale);
  } catch (error) {
    res.status(500).json({ message: "Error recording sales", error });
  }
};
