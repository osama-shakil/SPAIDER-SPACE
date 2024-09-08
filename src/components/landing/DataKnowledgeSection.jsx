"use client";
import Image from "next/image";
import React, { useState } from "react";

const DataKnowledgeSection = () => {
  const [selectedEntity, setSelectedEntity] = useState(null);

  const entities = [
    {
      id: 1,
      name: "Missions",
      description: "Explore various aerospace missions.",
    },
    { id: 2, name: "Systems", description: "Detailed systems information." },
    {
      id: 3,
      name: "Companies",
      description: "Information on aerospace companies.",
    },
    // Add more entities as needed
  ];

  const handleEntityClick = (entity) => {
    setSelectedEntity(entity);
  };

  return (
    <section className="relative py-20 bg-gray-900 text-white">
      <div className="absolute inset-0 grid grid-cols-1 gap-4 bg-[url('/images/grid-pattern.png')] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          The Most Comprehensive Aerospace Knowledge Base
        </h2>
        <p className="text-lg md:text-2xl mb-12">
          SPAIDER SPACE is curating the largest data/knowledge base of
          aerospace-sector information (scientific, technical, financial, market
          ..) from open-source, reliable, and trustworthy resources offering
          transparency and high-quality search results needed by professionals.
        </p>

        {/* Key Data Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              100 Million Unique Entities
            </h3>
            <p>
              From scientific concepts to aerospace companies, SPAIDER’s
              database covers everything.
            </p>
          </div>
          <div className="p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">
              Curated from Reliable Sources
            </h3>
            <p>
              Our information is sourced from open-source publications, official
              reports, and industry-grade software, guaranteeing
              trustworthiness.
            </p>
          </div>
          <div className="p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">Diverse Data Types</h3>
            <p>
              Access components fact-sheets, market data, financial documents,
              CAD files, and more—all in one place.
            </p>
          </div>
        </div>
        <div className="relative w-full h-[80vh] mt-20">
          <Image
            src="/images/Database.png"
            alt=""
            layout="fill"
            objectFit="contain"
            className="w-fit h-full "
          />
        </div>
        {/* Interactive Knowledge Graph */}
        {/* <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {entities.map((entity) => (
            <div
              key={entity.id}
              className={`p-6 bg-blue-500 rounded-lg text-center cursor-pointer transition-all duration-300 ${
                selectedEntity && selectedEntity.id === entity.id
                  ? "bg-blue-700"
                  : ""
              }`}
              onClick={() => handleEntityClick(entity)}
            >
              <h3 className="text-xl font-semibold">{entity.name}</h3>
            </div>
          ))}
        </div>

        {selectedEntity && (
          <div className="mt-12 p-6 bg-white bg-opacity-10 rounded-lg text-left">
            <h3 className="text-2xl font-semibold mb-4">
              {selectedEntity.name}
            </h3>
            <p>{selectedEntity.description}</p>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default DataKnowledgeSection;
