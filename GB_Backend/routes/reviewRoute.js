import express from "express";
import Review from "../models/reviewModel.js";

const router = express.Router();

// ✅ POST a new review
router.post("/", async (req, res) => {
  try {
    const { serviceId, name, rating, comment } = req.body;
    const newReview = new Review({ serviceId, name, rating, comment });
    await newReview.save();
    res.status(201).json({ success: true, message: "Review added successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ✅ GET reviews for a specific service
router.get("/:serviceId", async (req, res) => {
  try {
    const reviews = await Review.find({ serviceId: req.params.serviceId });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
