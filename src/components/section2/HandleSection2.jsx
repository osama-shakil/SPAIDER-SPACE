"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnalyticsWindow from "./AnalyticsWindow";
import KnowledgeGraphWindow from "./KnowledgeGraphWindow";
import QuantitativeFeedback from "./QuantitativeFeedback";

const HandleSection2 = () => {
  return (
    <div>
      <Tabs defaultValue="QuantitativeFeedback" className="w-full  ">
        <TabsList className="grid w-full grid-cols-4 bg-github-secondary ">
          <TabsTrigger value="QuantitativeFeedback">Quantitative Feedback</TabsTrigger>
          <TabsTrigger value="AnalyticsWindow">Analytics Window</TabsTrigger>
          <TabsTrigger value="KnowledgeGraphWindow">Knowledge Graph Window</TabsTrigger>
      </TabsList>

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
