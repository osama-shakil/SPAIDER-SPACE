import Image from "next/image";
import React from "react";

const ProductEvolutionRoadmap = () => {
  return (
    <section className="relative py-20 bg-github-secondary text-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl text-white font-bold mb-8">
          Product Evolution Roadmap{" "}
        </h2>

        
        <div className="relative w-full h-[60vh] mt-24">
          <Image
            src="/images/roadmap.png"
            alt=""
            layout="fill"
            objectFit="fill"
            className="w-fit h-full "
          />
        </div>
      </div>
    </section>
  );
};

export default ProductEvolutionRoadmap;
