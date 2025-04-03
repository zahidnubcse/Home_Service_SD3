import mongoose from "mongoose";

const reviewModel = new mongoose.Schema({
  serviceId: { type: Number, required: true },
  name: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Review", reviewModel);
