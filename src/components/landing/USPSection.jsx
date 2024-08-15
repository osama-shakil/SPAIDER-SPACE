import React from 'react';
import { IoShieldHalf } from "react-icons/io5";
import { PiBrain } from "react-icons/pi";

const USPSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Background Graphic */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-75"></div>
        <div className="absolute inset-0 grid grid-cols-1 gap-4">
          {/* Example Icons */}
          <div className="absolute top-20 left-10 flex items-center">
            <div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
              {/* Brain Icon for AI */}
              <PiBrain className="w-10 h-10 text-white z-20" />
            </div>
          </div>
          <div className="absolute top-40 right-20 flex items-center">
            <div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
              {/* Shield Icon for Verified Results */}
              <IoShieldHalf className="w-10 h-10 text-white z-20" />
            </div>
          </div>
          {/* Add more icons as needed */}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Why SPAIDER?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Comprehensive Platform</h3>
            <p>SPAIDER integrates every tool aerospace professionals need, from detailed data retrieval to advanced analytics, into one seamless experience.</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">State-of-the-Art Intelligence</h3>
            <p>Powered by AI that understands context, SPAIDER delivers precise, reliable insights tailored to your needs.</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">High-Quality Results</h3>
            <p>Trust in data you can verify. SPAIDER provides information from the most reliable sources, ensuring transparency and trust.</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Multimodal Capabilities</h3>
            <p>From visuals to code, SPAIDER adapts its outputs to suit your specific professional requirements.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;
