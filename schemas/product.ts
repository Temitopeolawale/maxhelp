import { Document, Schema, Types, model } from "mongoose";

interface ProductI extends Document {
  name: string;
  price: number;
  description: string;
  quantityAvailable: number;
  inStock: boolean;
  unit: Types.ObjectId;
}

const ProductSchema = new Schema<ProductI>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  quantityAvailable: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
  unit: {
    type: Schema.Types.ObjectId,
    ref: "Unit",
  },
});

const ProductModel = model<ProductI>("Product", ProductSchema);

export default ProductModel;
