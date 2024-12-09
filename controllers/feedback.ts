import { Request, Response } from "express";
import FeedbackModel from "../schemas/feedback";

export const getFeedback = async (req: Request, res: Response) => {
  const { unit } = req.params;
  try {
    const feedback = await FeedbackModel.find({ unit });
    res.json(feedback);
  } catch (error) {
    res.status(500).json({ message: "Error fetching feedback", error });
  }
};
