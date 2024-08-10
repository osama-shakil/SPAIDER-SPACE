import ChatBot from "@/components/section1/ChatBot";
import HandleSection2 from "@/components/section2/HandleSection2";
import VisualizationWindow from "@/components/section3/VisualizationWindow";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-12 h-full border-b border-zinc-300 text-white">
      <div className=" col-span-4  xl:col-span-3 border-r border-zinc-300 p-4">
        <ChatBot />
      </div>
      <div className=" col-span-8  xl:col-span-6  border-x border-zinc-700 p-4">
        <HandleSection2 />
      </div>
      <div className="col-span-3 border-l border-zinc-300 p-4">
        <VisualizationWindow />
      </div>
    </div>
  );
};

export default page;
