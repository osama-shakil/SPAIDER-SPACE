import Image from "next/image";
import React from "react";
import { FaRobot, FaDatabase, FaChartLine, FaRocket } from "react-icons/fa"; // Example icons

const ProductOverviewSection = () => {
  return (
    <section className="relative py-20 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Meet SPAIDER’s AI Agents
        </h2>
        <p className="text-lg md:text-2xl mb-12">
          SPAIDER’s proprietary agentic workforce is comprised of agents that
          enable advanced intelligence capabilities for aerospace professionals
          (technical and non-technical) by leveraging multiple state-of-the-art
          frontier models, domain-specific tools, and our proprietary
          comprehensive data/knowledge bases. They enable precise information
          retrieval, advanced data analysis, and expert-task-assistance for
          increased efficiency.
        </p>

        <div className="relative w-full h-60">
          <Image
            src="/images/GPAs.png"
            alt=""
            layout="fill"
            objectFit="fill"
            className="w-fit h-full "
          />
        </div>
        <div className="relative w-full h-60 mt-4">
          <Image
            src="/images/SPAs.png"
            alt=""
            layout="fill"
            objectFit="fill"
            className="w-fit h-full "
          />
        </div>

        {/* AI Agents Icons */}
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="group">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-blue-500 text-white rounded-full group-hover:animate-spin">
              <FaRobot size={30} />
            </div>
            <h3 className="text-xl font-semibold">Data Mining Agent</h3>
            <p className="mt-2 text-sm text-gray-600">
              Enhances precision in extracting vital aerospace data.
            </p>
          </div>

          <div className="group">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-green-500 text-white rounded-full group-hover:scale-110 transition-transform duration-300">
              <FaDatabase size={30} />
            </div>
            <h3 className="text-xl font-semibold">Mission Analysis Agent</h3>
            <p className="mt-2 text-sm text-gray-600">
              Optimizes mission planning and execution with AI-driven insights.
            </p>
          </div>

          <div className="group">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-red-500 text-white rounded-full group-hover:rotate-180 transition-transform duration-300">
              <FaChartLine size={30} />
            </div>
            <h3 className="text-xl font-semibold">Analytical Agent</h3>
            <p className="mt-2 text-sm text-gray-600">
              Provides advanced analytics for aerospace operations.
            </p>
          </div>

          <div className="group">
            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-purple-500 text-white rounded-full group-hover:scale-110 transition-transform duration-300">
              <FaRocket size={30} />
            </div>
            <h3 className="text-xl font-semibold">Launch Management Agent</h3>
            <p className="mt-2 text-sm text-gray-600">
              Streamlines launch operations with AI-driven precision.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProductOverviewSection;
