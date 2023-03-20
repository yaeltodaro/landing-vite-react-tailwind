import React from "react";
import { RiMailFill } from "react-icons/ri";

const Services = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:gap-20 md:grid-cols-2 p-12 xl:p-20">
      <div className="flex flex-col gap-4">
        <h2 className="text-[40px] text-tertiary font-black">
          How we can help you
        </h2>
        <p className="text-[20px] text-gray-500 mb-4">
          Follow our newsletter. We will regulary update our latest project and
          availability.
        </p>
        <form className="w-full">
          <div className="relative">
            <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl" />
            <input
              type="text"
              className="w-full bg-gray-100 py-4 pl-8 pr-36 rounded-xl outline-none"
              placeholder="Enter your email address"
            />
            <button
              type="submit"
              className="absolute font-semibold py-2 px-6 bg-primary text-white rounded-xl right-2 top-1/2 -translate-y-1/2"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <img src="icon1.png" alt="" className="w-[70px] p-2"/>
          <h3 className="text-[20px] font-bold">UI/UX Design</h3>
          <p className="text-gray-500">
            Sometimes features require a short description
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <img src="icon2.png" alt="" className="w-[70px] p-2"/>
          <h3 className="text-[20px] font-bold">Logo Branding</h3>
          <p className="text-gray-500">
            Sometimes features require a short description
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <img src="icon3.png" alt="" className="w-[70px] p-2"/>
          <h3 className="text-[20px] font-bold">App Design</h3>
          <p className="text-gray-500">
            Sometimes features require a short description
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <img src="icon4.png" alt="" className="w-[70px] p-2"/>
          <h3 className="text-[20px] font-bold">Webiste Design</h3>
          <p className="text-gray-500">
            Sometimes features require a short description
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
