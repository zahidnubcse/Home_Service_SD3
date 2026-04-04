import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import reviewRouter from "./routes/reviewRoute.js";
import subscriberRoutes from "./routes/subscriberRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

const app = express();

// connect DB & cloudinary
connectDB();
connectCloudinary();

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/user", userRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/subscribers", subscriberRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("API Working");
});

// ✅ export instead of listen
export default app;