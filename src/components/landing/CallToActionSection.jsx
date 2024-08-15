import Image from 'next/image';
import React from 'react';
import Logo from "@/assets/Logo_svg_neongreen.svg";


const CallToActionSection = () => {
  return (
    <section className="relative py-20 text-white text-center">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/earth-from-space.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Ready to Elevate Your Aerospace Operations?
        </h2>
        
        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href="#request-demo"
            className="relative inline-block px-10 py-4 bg-blue-600 text-lg font-semibold rounded-full transition-all duration-300 hover:bg-blue-700"
          >
            <span className="absolute inset-0 rounded-full border-4 border-blue-600 opacity-50 animate-pulse"></span>
            Request a Demo
          </a>

          <a
            href="#contact-us"
            className="inline-block px-8 py-4 text-lg font-semibold bg-white text-gray-900 rounded-full transition-all duration-300 hover:bg-gray-200"
          >
            Contact Us
          </a>
        </div>
      </div>
      
      {/* SPAIDER Logo Overlay */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <Image
          src={Logo}
          alt="SPAIDER Logo"
          className="opacity-10 w-56 h-auto"
        />
      </div>
    </section>
  );
};

export default CallToActionSection;
