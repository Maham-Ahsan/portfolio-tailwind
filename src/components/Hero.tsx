import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen flex flex-col">
      <Navbar />
      <div className="relative flex-grow flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-4 lg:px-10">
        {/* Hero Image */}
        <div className="flex-shrink-0 lg:block lg:w-1/2">
          <img
            src="/images/pic.jpeg"
            alt="Hero Background"
            className="w-full h-auto max-w-xs lg:max-w-md object-cover"
          />
        </div>

        {/* Hero Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start space-y-4">
          <p
            data-aos="zoom-in-down"
            className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight text-green-300"
          >
            I'm Maham
          </p>
          <p
            data-aos="zoom-in-down"
            className="text-xl sm:text-3xl lg:text-6xl text-green-200"
          >
            FrontEnd Developer...
          </p>
          <p
            data-aos="zoom-in-down"
            className="text-lg sm:text-2xl lg:text-4xl text-green-150"
          >
            Welcome to my portfolio
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
