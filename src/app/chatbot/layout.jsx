"use client"
import PublicHeader from "@/components/header/PublicHeader";
import { useTheme } from "next-themes";

export default function Layout({ children }) {
  const { theme } = useTheme();

  return (
   
      <div className="h-screen ">
        <div className="h-[8vh] "><PublicHeader /></div>
         <div className="h-[92vh]  overflow-y-auto  "> {children}</div>
      </div>
  
  );
}
