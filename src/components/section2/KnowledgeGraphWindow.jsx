import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const KnowledgeGraphWindow = () => {
  return (
    <div className="flex flex-col h-[83vh] overflow-hidden relative bg-github-secondary rounded shadow-md">
      <div className="absolute z-50 top-5 right-5">
        <Select className="shadow">
          <SelectTrigger className="w-[180px] text-white border-github-secondary  bg-github-secondary">
            <SelectValue placeholder="Select a type" />
          </SelectTrigger>
          <SelectContent className="w-[180px] text-white bg-github-secondary border-github-secondary ">
            <SelectGroup>
              <SelectLabel>Type</SelectLabel>
              <SelectItem value="A">A</SelectItem>
              <SelectItem value="B">B</SelectItem>
              <SelectItem value="C">C</SelectItem>
              <SelectItem value="D">D</SelectItem>
              <SelectItem value="E">E</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <iframe
        src="/knowledge_graph.html" // Correct path starting from the public folder
        title="Knowledge Graph"
        style={{ width: "100%", height: "100%" }}
        frameBorder="0"
      />
    </div>
  );
};

export default KnowledgeGraphWindow;
