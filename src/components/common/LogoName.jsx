"use client";
import { useRouter } from "next/navigation";

const LogoName = () => {
  const router = useRouter();
  return (
    <div
      className="text-2xl font-bold text-white hover:text-gray-300 cursor-pointer"
      onClick={() => router.push("/")}
    >
      <span className="text-github-linkcolor">Spaider</span> Space
    </div>
  );
};

export default LogoName;
