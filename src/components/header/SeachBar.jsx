import React from "react";
import { FaSearch, FaPlus, FaCog, FaBell, FaEnvelope } from "react-icons/fa";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { IoMdArrowDropdown } from "react-icons/io";

const SeachBar = () => {
  return (
    <div className="flex items-center  text-white rounded-lg p-2 shadow-lg w-full max-w-lg">
      <div className="relative flex-grow">
        <input
          type="text"
          placeholder="Type / to search"
          className="bg-gray-900 text-[12px] text-white w-80 pl-8 pr-4 py-2   border border-gray-400 rounded-md focus:outline-none"
        />
        <FaSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <div className="flex items-center space-x-2 ml-4">
        <Popover>
          <PopoverTrigger asChild className="p-0">
            <div  className="flex gap-3  border border-gray-400 p-2 cursor-pointer rounded-md  " >
              {" "}
              <FaPlus  className="text-gray-400"  />
              <IoMdArrowDropdown  className="text-gray-400" />

            </div>
          </PopoverTrigger>
          <PopoverContent className="w-80 border-gray-700  bg-github-primary">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <button className="p-2 rounded border border-gray-400 ">
          <FaCog  className="text-gray-400"/>
        </button>
        <button className="p-2 rounded border border-gray-400">
          <FaBell  className="text-gray-400"/>
        </button>
        <button className="p-2 rounded border border-gray-400">
          <FaEnvelope  className="text-gray-400"/>
        </button>
      </div>
    </div>
  );
};

export default SeachBar;
