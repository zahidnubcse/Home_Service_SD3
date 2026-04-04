import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ create axios instance
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

const Login = () => {
  const navigate = useNavigate();

  const [currentState, setCurrentState] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ submit handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const endpoint =
        currentState === "Login"
          ? "/api/user/login"
          : "/api/user/register";

      const response = await API.post(endpoint, formData);

      if (response.data.success) {
        // ✅ store token
        localStorage.setItem("token", response.data.token);

        // ✅ optional: store user
        localStorage.setItem("user", JSON.stringify(response.data.user));

        toast.success(`${currentState} successful 🎉`);

        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        toast.error(response.data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message || "Server error, try again later"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={onSubmitHandler}
        className="bg-teal-600 text-white shadow-lg rounded-2xl p-8 w-[90%] sm:max-w-md"
      >
        <ToastContainer />

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-3xl font-semibold">{currentState}</p>

          <div
            onClick={() =>
              setCurrentState(
                currentState === "Login" ? "Sign Up" : "Login"
              )
            }
            className="cursor-pointer p-1 bg-white rounded-full flex items-center w-14"
          >
            <div
              className={`h-6 w-6 bg-teal-600 rounded-full transition-all ${
                currentState === "Login" ? "translate-x-6" : ""
              }`}
            />
          </div>
        </div>

        {/* NAME */}
        {currentState === "Sign Up" && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg bg-white/10 mb-3"
            required
          />
        )}

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg bg-white/10 mb-3"
          required
        />

        {/* PHONE */}
        {currentState === "Sign Up" && (
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg bg-white/10 mb-3"
            required
          />
        )}

        {/* PASSWORD */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-3 border rounded-lg bg-white/10 mb-3"
          required
        />

        {/* OPTIONS */}
        <div className="flex justify-between text-sm">
          <p className="cursor-pointer hover:underline">
            Forgot password?
          </p>
          <p
            onClick={() =>
              setCurrentState(
                currentState === "Login" ? "Sign Up" : "Login"
              )
            }
            className="cursor-pointer hover:underline"
          >
            {currentState === "Login"
              ? "Create account"
              : "Login Here"}
          </p>
        </div>

        {/* BUTTON */}
        <button
          disabled={loading}
          className="bg-white text-teal-600 font-medium px-6 py-3 mt-5 w-full rounded-lg transition-transform hover:scale-105 shadow-lg"
        >
          {loading
            ? "Processing..."
            : currentState === "Login"
            ? "Login"
            : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;