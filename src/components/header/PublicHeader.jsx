"use client";
import { useSelector } from "react-redux";
import AvartarDropDown from "./AvartarDropDown";
import Menu from "./Menu";
import LogoName from "../common/LogoName";
import Link from "next/link";
import Logo from "@/assets/Logo_svg_neongreen.svg";
import Image from "next/image";
import SeachBar from "./SeachBar";
import { useEffect } from "react";
import { setCookie } from "cookies-next";

const PublicHeader = () => {
  const { user } = useSelector((state) => state?.user);
  console.log('user: ', user);

  useEffect(()=>{
    if(user){
      setCookie('uid',user.id)
    }
  },[])
  return (
    <header className="flex justify-between place-items-center bg-gray-900 text-white px-10 h-full  shadow-md">
      <Menu />
      <div className="flex items-center justify-between w-full h-full px-4">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <Image src={Logo} alt="logo" width={30} height={30} />
          <LogoName />
        </div>
        {/* Navigation Buttons */}

        <div className="space-x-8 flex">
          <SeachBar />
          {!user?.email ? (
            <div className="flex justify-center place-items-center ">

              <Link
                href="/auth/login"
                className="text-gray-300 hover:text-white transition duration-300 w-20"
              >
                Sign In
              </Link>
              <Link
                href="/auth/register"
                className="bg-primary text-white text-center py-2  rounded-md hover:bg-primary-dark transition duration-300 border w-32"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <>
              {" "}
              <Link
                href="/chatbot"
                className="text-gray-300 hover:text-white transition duration-300 mr-16 my-auto"
              >
                chatbot
              </Link>
            </>
          )}
        </div>
      </div>

      {user?.email && <AvartarDropDown {...user} />}
    </header>
  );
};

export default PublicHeader;
