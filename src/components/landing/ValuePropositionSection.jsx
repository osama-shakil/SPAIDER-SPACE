"use client";
import React from "react";
import dynamic from "next/dynamic";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Dynamically import Swiper components to avoid SSR issues
const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
  ssr: false,
});
const SwiperSlide = dynamic(
  () => import("swiper/react").then((mod) => mod.SwiperSlide),
  {
    ssr: false,
  }
);

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ValuePropositionSection = () => {
  return (
    <section className="relative py-20 text-white">
      {/* Full-Width Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/futuristic-control-center.jpg"
          alt="Futuristic Control Center"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Empowering Aerospace Professionals to Innovate
        </h2>
        <p className="text-lg md:text-2xl mb-12">
          SPAIDER is more than just a tool—it's your partner in aerospace
          innovation. By combining cutting-edge AI with deep domain knowledge,
          SPAIDER accelerates searches, enhances analysis, and streamlines
          workflows, empowering you to push the boundaries of aerospace
          technology.
        </p>

        {/* Swiper Slider */}
        <div className="mt-12">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            grabCursor={true}
            onSwiper={(swiper) => console.log("Swiper initialized:", swiper)}
            onSlideChange={(swiper) =>
              console.log("Slide changed to:", swiper.activeIndex)
            }
          >
            <SwiperSlide>
              <div className="p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4">
                  Traditional Search Process
                </h3>
                <p>
                  Explanation of how traditional search processes work and their
                  limitations.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4">
                  AI-Enhanced Workflow
                </h3>
                <p>
                  Explanation of how SPAIDER's AI-enhanced workflow
                  revolutionizes the search process.
                </p>
              </div>
            </SwiperSlide>
            {/* Add more SwiperSlides as needed */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
