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
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/user", userRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/subscribers", subscriberRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("API Working");
});

// ✅ START SERVER ONLY AFTER DB CONNECTS
const startServer = async () => {
  try {
    await connectDB();          // 🔥 WAIT HERE
    await connectCloudinary();  // (optional but good)

    app.listen(port, () => {
      console.log("Server started on PORT: " + port);
    });
  } catch (error) {
    console.error("Server failed to start:", error);
  }
};

startServer();