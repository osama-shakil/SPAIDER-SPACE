"use client";

import ThreeJSObjModel from "./ObjRender";
import { Shiba } from "./Shiba";

const VisualizationWindow = () => {
  return (
    <div>
      {/* <Shiba /> */}
      {/* <ThreeJSObjModel  modelPath={"shiba/ImageToStl.com_730_1.obj"} />    */}

      <div className=" relative w-full h-[87.5vh]">
        <div className="absolute inset-0 h-20 bg-[#dddddd] flex justify-center place-items-center">
          <p className="text-3xl text-github-secondary font-semibold"></p>
        </div>
        <iframe
          title="3D Model"
          src="https://sketchfab.com/models/a0bdb4c94cf1463b8b387d8afe281864/embed"
          frameBorder="0"
          allow="autoplay; fullscreen; vr"
          style={{ width: "100%", height: "100%" }}
        ></iframe>
      </div>
    </div>
  );
};

export default VisualizationWindow;
