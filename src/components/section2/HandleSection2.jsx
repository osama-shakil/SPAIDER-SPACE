"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VscFeedback } from "react-icons/vsc";
import { LuScrollText } from "react-icons/lu";
import { MdOutlineAnalytics } from "react-icons/md";

import AnalyticsWindow from "./AnalyticsWindow";
import KnowledgeGraphWindow from "./KnowledgeGraphWindow";
import QuantitativeFeedback from "./QuantitativeFeedback";
import DetailResponse from "./DetailResponse";
import { PiGraphLight } from "react-icons/pi";

const HandleSection2 = () => {
  return (
    <div>
      <Tabs defaultValue="DetailResponse" className="w-full  ">
        <TabsList className="grid w-full grid-cols-4 bg-github-secondary ">
          <TabsTrigger value="DetailResponse">
            <LuScrollText className="text-2xl" />
          </TabsTrigger>

          <TabsTrigger value="QuantitativeFeedback">
            <VscFeedback className="text-2xl" />
          </TabsTrigger>
          <TabsTrigger value="AnalyticsWindow">
            <MdOutlineAnalytics className="text-2xl" />
          </TabsTrigger>
          <TabsTrigger value="KnowledgeGraphWindow">
            <PiGraphLight className="text-2xl" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="DetailResponse">
          <DetailResponse />
        </TabsContent>
        <TabsContent value="QuantitativeFeedback">
          <QuantitativeFeedback />
        </TabsContent>
        <TabsContent value="AnalyticsWindow">
          <AnalyticsWindow />
        </TabsContent>
        <TabsContent value="KnowledgeGraphWindow">
          <KnowledgeGraphWindow />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HandleSection2;
