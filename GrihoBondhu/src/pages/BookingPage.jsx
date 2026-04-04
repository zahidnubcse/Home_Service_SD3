import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import visaIcon from "../assets/visa_icon.png";
import bkashIcon from "../assets/bkash_icon.png";
import axios from "axios";
import { toast } from "react-toastify";

// ✅ axios instance
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000",
});

const BookingPage = () => {
  const location = useLocation();
  const service = location.state?.service || {};

  const [selectedPlan, setSelectedPlan] = useState("regular");
  const [paymentMethod, setPaymentMethod] = useState("Cash On Service");
  const [loading, setLoading] = useState(false);

  // ✅ form state (clean)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    bookingDate: "",
  });

  // ✅ auto fill user if logged in
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setFormData((prev) => ({
        ...prev,
        fullName: user.name || "",
        email: user.email || "",
      }));
    }
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // payment methods
  const paymentMethods = [
    { name: "Visa", icon: visaIcon },
    { name: "Bkash", icon: bkashIcon },
    { name: "Cash On Service", icon: null },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("token");

    const bookingData = {
      service: service.name,
      serviceImage: service.image,
      plan: selectedPlan,
      price: service.price?.[selectedPlan],
      ...formData,
      paymentMethod,
      transactionId: null,
    };

    try {
      const res = await API.post("/api/bookings", bookingData, {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ auth added
        },
      });

      toast.success("Booking confirmed 🎉");

      // ✅ reset form
      setFormData({
        fullName: "",
        email: "",
        address: "",
        bookingDate: "",
      });

    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Booking failed!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100 mt-20">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Confirm Your <span className="text-teal-600">Booking</span>
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
          <p className="text-yellow-500 font-semibold mt-2">
            ⭐ {service.rating}
          </p>
        </div>

        {/* Plans */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">
            Choose Your Plan
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {["regular", "standard", "premium"].map((plan) => (
              <button
                key={plan}
                type="button"
                onClick={() => setSelectedPlan(plan)}
                className={`p-3 rounded-lg text-white font-semibold ${
                  selectedPlan === plan
                    ? "bg-teal-600"
                    : "bg-teal-400 hover:bg-teal-500"
                }`}
              >
                {plan.charAt(0).toUpperCase() + plan.slice(1)} <br />
                ৳{service.price?.[plan]}
              </button>
            ))}
          </div>
        </div>

        {/* FORM */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
            required
          />

          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full p-3 border rounded-lg"
            required
          />

          <input
            type="date"
            name="bookingDate"
            value={formData.bookingDate}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
            required
          />

          {/* Payment */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Select Payment Method
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {paymentMethods.map((method) => (
                <button
                  key={method.name}
                  type="button"
                  onClick={() => setPaymentMethod(method.name)}
                  className={`flex items-center justify-center gap-2 p-3 rounded-lg font-semibold ${
                    paymentMethod === method.name
                      ? "bg-teal-600 text-white"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                >
                  {method.icon && (
                    <img
                      src={method.icon}
                      alt={method.name}
                      className="w-6 h-6"
                    />
                  )}
                  {method.name}
                </button>
              ))}
            </div>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-teal-600 transition"
          >
            {loading
              ? "Processing..."
              : `Confirm Booking (৳${service.price?.[selectedPlan]})`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;