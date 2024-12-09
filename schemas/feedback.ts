import mongoose, { Schema, Document,model } from "mongoose";

export interface IFeedback extends Document {
  unit: string;
  comment: string;
  sentiment: string;
}

const FeedbackSchema: Schema = new Schema({
  unit: { type: String, required: true },
  comment: { type: String, required: true },
  sentiment: { type: String, required: true },
});

const FeedbackModel = model<IFeedback>("Feedback", FeedbackSchema);


export default FeedbackModel;

