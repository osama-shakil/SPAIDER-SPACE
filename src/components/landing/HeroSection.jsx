import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <header className="relative h-screen flex flex-col items-center justify-center text-center bg-black text-white">
      {/* Background Video/Image */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
          src="/video/heroVideo.mp4" // Specify the path to your video file here
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay for background visual elements */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Revolutionizing Aerospace Intelligence with AI-Driven Precision
        </h1>

        <span className="text-lg md:text-md italic mb-8">
          Our Mission: Developing the most advanced AI for aerospace
          professionals accelerating innovation and informed decision-making
        </span>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 md:justify-center mt-8 ">
          <Button className="bg-blue-900 hover:bg-blue-700 text-white text-lg font-semibold py-5 px-8 rounded-full shadow-lg transition-all duration-300">
            Explore SPAIDER
          </Button>
          <Button className="text-lg font-semibold py-5 px-8 rounded-full shadow-lg border border-white hover:bg-white hover:text-black transition-all duration-300">
            Request a Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
