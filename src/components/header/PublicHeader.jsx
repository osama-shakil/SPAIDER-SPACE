"use client";
import { useSelector } from "react-redux";
import AvartarDropDown from "./AvartarDropDown";
import Menu from "./Menu";

const PublicHeader = () => {
  const { user } = useSelector((state) => state?.user);
  console.log('user: ', user);
  return (
    <header className="flex justify-between place-items-center bg-gray-900 text-white px-10 h-full border-b shadow-md">
      <Menu />
      <div className="flex items-center justify-between w-full h-full px-4">
        {/* Logo Section */}
        <div className="text-2xl font-bold ">
          <a href="/" className="text-white hover:text-gray-300">
            <span className="text-github-linkcolor">Innovative</span> Solutions
          </a>
        </div>

        {/* Navigation Buttons */}
        <div className="space-x-4">
          {!user?.email ? (
            <>
              <a
                href="/auth/login"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                Sign In
              </a>
              <a
                href="/auth/register"
                className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition duration-300 border"
              >
                Sign Up
              </a>
            </>
          ) : (
            <a
              href="/chatbot"
              className="text-gray-300 hover:text-white transition duration-300 mr-16"
            >
              chatbot
            </a>
          )}
        </div>
      </div>
       <AvartarDropDown {...user}/>
     
    </header>
  );
};

export default PublicHeader;
