import mongoose from "mongoose";

const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error("MongoDB URI not set");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB Connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1); // ❗ stop server
  }
};

export default connectDB;