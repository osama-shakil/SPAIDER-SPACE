import Image from "next/image";
import React from "react";
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
          <div className="absolute top-20 left-20 flex items-center">
            <div className="w-24 h-24 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
              <Image
                src="/icons/icon1.png"
                alt="Brain Icon "
                width={45}
                height={45}
              />
            </div>
          </div>
          <div className="absolute bottom-40 left-20 flex items-center">
            <div className="w-24 h-24 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
              <Image
                src="/icons/icon2.png"
                alt="Shield Icon "
                width={45}
                height={45}
              />
            </div>
          </div>
          <div className="absolute top-20 right-20 flex items-center">
            <div className="w-24 h-24 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
              <Image
                src="/icons/icon3.png"
                alt="Shield Icon "
                width={45}
                height={45}
              />
            </div>
          </div>
          <div className="absolute bottom-40 right-20 flex items-center">
            <div className="w-24 h-24 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
              <Image
                src="/icons/icon4.png"
                alt="Shield Icon "
                width={45}
                height={45}
              />
            </div>
          </div>
          {/* Add more icons as needed */}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Empowering Aerospace Professionals to Innovate
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              Comprehensive Knowledgebase
            </h3>
            <p>
              SPAIDER is curating the largest and most comprehensive aerospace
              data and knowledge base from open-source, reliable, and
              trustworthy resources
            </p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              State-of-the-Art Intelligence
            </h3>
            <p>
              Powered by AI that understands context, SPAIDER delivers precise,
              reliable insights tailored to your needs.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              High-Quality Results
            </h3>
            <p>
              Trust in data you can verify. SPAIDER provides information from
              the most reliable sources, ensuring transparency and trust.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              Multimodal Capabilities
            </h3>
            <p>
              From visuals to code, SPAIDER adapts its outputs to suit your
              specific professional requirements.
            </p>
          </div>
        </div>

        <p className="text-md md:text-lg font-normal my-12">
          SPAIDER is more than just a tool—it's your partner in aerospace
          innovation. By combining our proprietary AGENTIC workflow with
          bigdata, SPAIDER enables accurate and fast information search,
          automate complex analytical tasks, and discover new knowledge.
        </p>
      </div>
    </section>
  );
};

export default USPSection;
