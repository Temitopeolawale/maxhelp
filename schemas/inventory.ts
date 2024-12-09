import { Schema, Document,model } from "mongoose";

interface IInventory extends Document {
  unit: string;
  product: string;
  stock: number;
  reorderPoint: number;
}

const InventorySchema = new Schema<IInventory>({
  unit: { type: String, required: true },
  product: { type: String, required: true },
  stock: { type: Number, required: true },
  reorderPoint: { type: Number, required: true },
});


const InventoryModel = model<IInventory>("Inventory", InventorySchema);

export default InventoryModel;

