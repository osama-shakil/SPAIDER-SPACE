import PublicHeader from "@/components/header/PublicHeader";
import React from "react";

const Page = () => {
  return (
    <>
       <div className="h-[8vh] "><PublicHeader /></div>
      <main className=" min-h-screen flex flex-col items-center py-8">
        <div className="text-white   p-8 rounded-lg shadow-lg    mt-8">
          <h1 className="text-2xl  font-bold mb-4">
            About Our Company
          </h1>
          <p className=" mb-4">
            At{" "}
            <span className="font-semibold text-github-linkcolor">
            Spaider space
            </span>
            , we are committed to providing cutting-edge technology solutions
            that empower businesses to achieve their goals. Founded in 2010, we
            have consistently delivered top-notch services in software
            development, IT consulting, and digital transformation.
          </p>
          <p className=" mb-4">
            Our team of skilled professionals brings years of experience and a
            passion for innovation to every project. We specialize in creating
            customized solutions that cater to the unique needs of our clients,
            ensuring that each project is executed with the highest level of
            precision and efficiency.
          </p>
          <p className=" b-4">
            Our core values of integrity, excellence, and customer satisfaction
            drive us to constantly push the boundaries of what is possible. We
            take pride in our ability to adapt to the ever-changing technological
            landscape and deliver solutions that not only meet but exceed
            expectations.
          </p>
          <p className="">
            Partner with us to transform your vision into reality and navigate
            the complexities of the digital age with confidence. Discover the
            difference that a dedicated and innovative team can make for your
            business.
          </p>
        </div>
      </main>
    </>
  );
};

export default Page;
