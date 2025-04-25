import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import visaIcon from "../assets/visa_icon.png";
import bkashIcon from "../assets/bkash_icon.png";
import axios from "axios";
import { toast } from "react-toastify";

const BookingPage = () => {
  const location = useLocation();
  const service = location.state?.service || {};

  const [selectedPlan, setSelectedPlan] = useState("regular");
  const [paymentMethod, setPaymentMethod] = useState("Cash On Service");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [bookingDate, setBookingDate] = useState("");

  // Payment methods with icons
  const paymentMethods = [
    { name: "Visa", icon: visaIcon },
    { name: "Bkash", icon: bkashIcon },
    { name: "Cash On Service", icon: null },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      service: service.name,
      serviceImage: service.image,
      plan: selectedPlan,
      price: service.price?.[selectedPlan],
      fullName,
      email,
      address,
      bookingDate,
      paymentMethod,
      transactionId: null, // Optional, for Bkash/Visa
    };

    try {
      const res = await axios.post("http://localhost:4000/api/bookings", bookingData);
      toast.success("Booking confirmed!");
      console.log("Booking success:", res.data);
    } catch (error) {
      toast.error("Booking failed!");
      console.error("Booking error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100 mt-20">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Confirm Your <span className="text-primary">Booking</span>
        </h2>

        {/* Service Details */}
        <div className="mb-6 text-center">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold">{service.name}</h2>
          <p className="text-gray-600">{service.description}</p>
          <p className="text-yellow-500 font-semibold mt-2">⭐ {service.rating}</p>
        </div>

        {/* Pricing Plans */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Choose Your Plan</h3>
          <div className="grid grid-cols-3 gap-4">
            {["regular", "standard", "premium"].map((plan) => (
              <button
                key={plan}
                type="button"
                className={`p-3 rounded-lg text-center text-white font-semibold ${
                  selectedPlan === plan ? "bg-teal-600" : "bg-teal-400 hover:bg-teal-500"
                }`}
                onClick={() => setSelectedPlan(plan)}
              >
                {plan.charAt(0).toUpperCase() + plan.slice(1)} <br />
                ৳{service.price?.[plan]}
              </button>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your Address"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Booking Date</label>
            <input
              type="date"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Select Payment Method</h3>
            <div className="grid grid-cols-3 gap-4">
              {paymentMethods.map((method) => (
                <button
                  key={method.name}
                  type="button"
                  className={`flex items-center justify-center gap-2 p-3 rounded-lg font-semibold w-full ${
                    paymentMethod === method.name
                      ? "bg-teal-600 text-white"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => setPaymentMethod(method.name)}
                >
                  {method.icon && <img src={method.icon} alt={method.name} className="w-6 h-6" />}
                  {method.name}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-teal-600 transition"
          >
            Confirm Booking (৳{service.price?.[selectedPlan]})
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
