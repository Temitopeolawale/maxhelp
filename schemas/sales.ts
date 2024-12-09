import mongoose, { Schema, Document, model } from "mongoose";

export interface ISales extends Document {
  unit: string;
  date: Date;
  amount: number;
  unitsSold: number;
}

const SalesSchema: Schema = new Schema({
  unit: { type: String, required: true },
  date: { type: Date, required: true },
  amount: { type: Number, required: true },
  unitsSold: { type: Number, required: true },
});

const SalesModel = model<ISales>("Sales", SalesSchema);

export default SalesModel;

