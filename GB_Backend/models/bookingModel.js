import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming you have a User model
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    serviceImage: {
      type: String,
    },
    plan: {
      type: String,
      enum: ["regular", "standard", "premium"],
      default: "regular",
    },
    price: {
      type: Number,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    status :{
      type:String, required:true, default:'BookingPlaced'
    },
    bookingDate: {
      type: Date,
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["Visa", "Bkash", "Cash On Service"],
      default: "Cash On Service",
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    transactionId: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
