import { Request, Response } from "express";
import { join } from "node:path/win32";
import ProductModel from "../schemas/product";
import UnitModel from "../schemas/unit";

const addProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, description, quantityAvailable, inStock, unitName } =
      req.body;

    const unit = await UnitModel.findOne({ name: unitName });
    if (!unit) {
      res.status(404).json({ message: "Unit not found" });
      return;
    }

    const existingProduct = await ProductModel.findOne({ name: name });
    if (existingProduct) {
      res.status(409).json({ message: "Product already exists" });
      return;
    }

    const newProduct = new ProductModel({
      name: name,
      price: price,
      description: description,
      quantityAvailable: quantityAvailable,
      inStock: inStock,
      unit: unit._id,
    });

    await newProduct.save();

    res
      .status(201)
      .json({ success: true, message: "Product created", data: newProduct });
    return;
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
    return;
  }
};

const getProducts = async (_: Request, res: Response) => {
  try {
    const products = await ProductModel.find().populate("unit");
    res.status(200).json({ success: true, data: products });
    return;
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
    return;
  }
};

const getProductsByUnit = async (req: Request, res: Response) => {
  try {
    const { unitName } = req.params;
    const productUnit = await UnitModel.findOne({ name: unitName });
    if (!productUnit) {
      res.status(404).json({ success: false, message: "Unit not found" });
      return;
    }

    const products = await ProductModel.find({ unit: productUnit._id });
    res.status(200).json({ success: true, data: products });
    return;
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
    return;
  }
};

const setQuantity = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { quantityAvailable } = req.body;

    const product = await ProductModel.findById(id);
    if (!product) {
      res.status(404).json({ success: false, message: "Product not found" });
      return;
    }

    product.quantityAvailable = quantityAvailable;
    await product.save();

    res
      .status(200)
      .json({ success: true, message: "Quantity updated", data: product });
    return;
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
    return;
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findByIdAndDelete(id);
    if (!product) {
      res.status(404).json({ success: false, message: "Product not found" });
      return;
    }
    res.status(200).json({ success: true, message: "Product deleted" });
    return;
  } catch (err: any) {
    res.status(400).json({ success: false, message: err.message });
    return;
  }
};

export {
  addProduct,
  getProducts,
  setQuantity,
  deleteProduct,
  getProductsByUnit,
};
