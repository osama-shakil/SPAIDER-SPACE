"use client"
import { useTheme } from "next-themes";

export default function Layout({ children }) {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col place-items-center h-full w-[100vw]`}>
      <div className="w-[95%] lg:w-[95%] xl:w-[60%]">
       
        {children}
      </div>
    </div>
  );
}
