import React, { useEffect, useState } from "react";
import axios from "axios"; // Make sure you install axios

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const userData = {
      email,
      password,
      ...(currentState === "Sign Up" && { name, phone }), // Include name and phone only for sign up
    };

    try {
      const url =
        currentState === "Login" ? "http://localhost:4000/api/user/login" : "http://localhost:4000/api/user/register";

      const response = await axios.post(url, userData);
      setLoading(false);

      if (response.data.success) {
        // Handle success, e.g., save the token in localStorage, redirect user, etc.
        alert(`${currentState} successful!`);
        console.log(response.data);
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setLoading(false);
      setError("Something went wrong. Please try again later.");
      console.error(err);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when page loads
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={onSubmitHandler}
        className="bg-teal-600 text-white shadow-lg rounded-2xl p-8 w-[90%] sm:max-w-md"
      >
        {/* Title with Animated Toggle */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-3xl font-semibold">{currentState}</p>
          <div
            className="cursor-pointer p-1 bg-white rounded-full flex items-center w-14"
            onClick={() =>
              setCurrentState(currentState === "Login" ? "Sign Up" : "Login")
            }
          >
            <div
              className={`h-6 w-6 bg-teal-600 rounded-full transition-all ${
                currentState === "Login" ? "translate-x-6" : ""
              }`}
            ></div>
          </div>
        </div>

        {/* Inputs */}
        {currentState === "Login" ? null : (
          <input
            type="text"
            className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 placeholder-white focus:outline-none focus:ring-2 focus:ring-white mb-3"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <input
          type="email"
          className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 placeholder-white focus:outline-none focus:ring-2 focus:ring-white mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {currentState === "Login" ? null : (
          <input
            type="number"
            className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 placeholder-white focus:outline-none focus:ring-2 focus:ring-white mb-3"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        )}
        <input
          type="password"
          className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 placeholder-white focus:outline-none focus:ring-2 focus:ring-white mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Forgot Password & Toggle */}
        <div className="flex justify-between text-sm">
          <p className="cursor-pointer hover:underline">Forgot password?</p>
          <p
            onClick={() =>
              setCurrentState(currentState === "Login" ? "Sign Up" : "Login")
            }
            className="cursor-pointer hover:underline"
          >
            {currentState === "Login" ? "Create account" : "Login Here"}
          </p>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        {/* Submit Button */}
        <button
          className="bg-white text-teal-600 font-medium px-6 py-3 mt-5 w-full rounded-lg transition-transform transform hover:scale-105 shadow-lg"
          disabled={loading}
        >
          {loading ? "Processing..." : currentState === "Login" ? "Login" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;
