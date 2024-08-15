import React from 'react';

const CompetitivePositioningSection = () => {
  return (
    <section className="relative py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Leading the Aerospace AI Revolution</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Domain Expertise</h3>
            <p>SPAIDER’s deep aerospace knowledge base is unrivaled, offering comprehensive coverage and advanced AI-driven insights.</p>
          </div>
          <div className="p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Foundational Models</h3>
            <p>Our AI is built on top of state-of-the-art models like LLaMA and Anthropic, ensuring robust performance across textual, visual, and computational tasks.</p>
          </div>
          <div className="p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Market Position</h3>
            <p>In a league of its own, SPAIDER outpaces competitors like Scite, Elicit, and IRIS.AI, offering superior information coverage and intelligence capabilities.</p>
          </div>
        </div>

        {/* Infographic or Comparison Chart */}
        <div className="relative">
          <img
            src="/images/comparison-chart.png"
            alt="SPAIDER vs Competitors"
            className="w-full h-auto object-contain mx-auto"
          />
          <p className="text-sm mt-4 text-gray-400">*Data is based on comparative analysis conducted in 2024.</p>
        </div>
      </div>
    </section>
  );
};

export default CompetitivePositioningSection;
