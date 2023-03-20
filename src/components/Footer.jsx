import React from "react";
import {
  RiCheckboxBlankCircleFill,
  RiInstagramLine,
  RiFacebookCircleLine,
  RiTwitterLine,
  RiGithubFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-tertiary p-8 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-500 pb-20">
        {/* Logo */}
        <a
          href="#"
          className="text-white text-2xl font-bold relative p-1 bg-tertiary z-20 relative"
        >
          Power<span className="text-primary text-5xl">.</span>
          <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" />
        </a>
        {/* Social Media */}
        <nav className="flex items-center gap-2">
          <a href="#">
            <RiInstagramLine className="text-white bg-primary m-2 p-3 text-5xl rounded-full" />
          </a>
          <a href="#">
            <RiFacebookCircleLine className="text-white bg-primary m-2 p-3 text-5xl rounded-full" />
          </a>
          <a href="#">
            <RiTwitterLine className="text-white bg-primary m-2 p-3 text-5xl rounded-full" />
          </a>
          <a href="#">
            <RiGithubFill className="text-white bg-primary m-2 p-3 text-5xl rounded-full" />
          </a>
        </nav>
      </div>
      <div>
        <h3 className="text-lg text-center md:text-left font-bold text-white mt-10">Company</h3>
        <nav className="mt-4 flex flex-col md:flex-row gap-4 justify-center justify-between">
          <a
            href="#"
            className="text-center text-gray-300 mt-4 hover:text-white transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-center text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Press
          </a>
          <a
            href="#"
            className="text-center text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Investors
          </a>
          <a
            href="#"
            className="text-center text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Events
          </a>
          <a
            href="#"
            className="text-center text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Terms of use
          </a>
          <a
            href="#"
            className="text-center text-gray-300 mt-4 hover:text-white transition-colors"
          >
            Privacy policy
          </a>
          <button
            type="button"
            className="font-semibold py-2 px-6 bg-primary text-white rounded-xl right-2"
          >
            Contact Us
          </button>
        </nav>
      </div>
      {/* copyright */}
      <div className="mt-20">
        <p className="text-white text-center">
          © power 2021 - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
