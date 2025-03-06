import React, { useEffect, useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to top when page loads
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
            required
          />
        )}
        <input
          type="email"
          className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 placeholder-white focus:outline-none focus:ring-2 focus:ring-white mb-3"
          placeholder="Email"
          required
        />
        {currentState === "Login" ? null : (
          <input
            type="number"
            className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 placeholder-white focus:outline-none focus:ring-2 focus:ring-white mb-3"
            placeholder="Phone Number"
            required
          />
        )}
        <input
          type="password"
          className="w-full px-4 py-3 border border-white/30 rounded-lg bg-white/10 placeholder-white focus:outline-none focus:ring-2 focus:ring-white mb-3"
          placeholder="Password"
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

        {/* Submit Button */}
        <button className="bg-white text-teal-600 font-medium px-6 py-3 mt-5 w-full rounded-lg transition-transform transform hover:scale-105 shadow-lg">
          {currentState === "Login" ? "Login" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;
