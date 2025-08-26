 import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b10d4188-9bc5-4d97-85ad-4982a938ffab");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("Failed to submit. Please try again ❌");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 p-6 mt-16">
      <motion.div
        className="bg-white shadow-xl rounded-3xl p-8 max-w-2xl w-full relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Get in <span className="text-teal-500">Touch</span>
        </motion.h2>
        <p className="text-center text-gray-600 mb-6">
          Have questions or need assistance? Fill out the form below and we will get back to you as soon as possible.
        </p>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Name</label>
            <input 
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input 
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Message</label>
            <textarea 
              name="message"
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-teal-600 transition-transform transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {/* Result Message */}
        {result && (
          <motion.div
            className="mt-4 text-center font-semibold text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {result}
          </motion.div>
        )}

        {/* Contact Info */}
        <div className="text-center text-gray-600 mt-8 space-y-2">
          <p>Email: <span className="text-teal-500">grihobondhu@.ac.bd</span></p>
          <p>Phone: <span className="text-teal-500">01817844031</span></p>
          <p>Address: <span className="text-teal-500">Uttara, Dhaka, Bangladesh</span></p>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
