import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsLetterBox = () => {
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post("http://localhost:4000/api/subscribers/subscribe", { email });

      // Show success toast
      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 3000, // Close after 3 seconds
      });

      setEmail(""); // Clear input after success
    } catch (error) {
      // Show error toast
      toast.error(error.response?.data?.error || "Something went wrong!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="text-center mt-4 p-6">
      <ToastContainer /> {/* Toast Container for displaying notifications */}
      <p className="text-3xl font-bold font-outfit text-gray-800">
        Subscribe now & <span className="text-primary">get 20% off</span>
      </p>
      <p className="text-gray-600 mt-3">
        Stay updated with our latest offers and exclusive deals.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-lg"
      >
        <input
          className="w-full sm:flex-1 outline-none p-3"
          type="email"
          placeholder="Enter your e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-primary text-white text-lg px-10 py-4 rounded-lg hover:opacity-90 transition"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
