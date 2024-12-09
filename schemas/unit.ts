import { Document, Schema, Types, model } from "mongoose";

interface UnitI extends Document {
  name: string;
  location: string;
}

const UnitSchema = new Schema<UnitI>({
  name: { type: String,required: true,},
  location: {type: String,required: true,},
});

const UnitModel = model<UnitI>("Unit", UnitSchema);

export default UnitModel;
