import React from "react";
import about from "../assets/about.jpg";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-6 mt-20">
      {/* Left Side - Image with Glow Effect */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-[90%] md:w-[80%] lg:w-[70%] rounded-2xl shadow-lg overflow-hidden transition duration-300 ease-in-out hover:shadow-[0px_0px_20px_5px] hover:shadow-primary">
          <img
            src={about}
            alt="About Us"
            className="w-full rounded-2xl"
          />
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold text-teal-600">
          Your Trusted Home Service Partner
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Welcome to <strong>[Your Website Name]</strong>, your go-to platform
          for reliable and professional home services. We specialize in a wide
          range of services, including{" "}
          <strong>
            home cleaning, car repair, AC servicing, fridge repair, security
            guard services, painting, and more.
          </strong>
        </p>
        <p className="mt-3 text-lg text-gray-700">
          Our mission is to make your life easier by connecting you with skilled
          professionals who ensure top-quality service, every time. With a
          commitment to excellence, trust, and convenience, we bring you
          hassle-free home maintenance solutions at your fingertips.
        </p>
        <p className="mt-4 text-xl font-semibold text-teal-600">
          Experience seamless home service booking with us today!
        </p>
      </div>
    </div>
  );
};

export default About;
