import React, { useState } from "react";
import {
  RiCheckboxBlankCircleFill,
  RiMenuLine,
  RiCloseFill,
} from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-46">
      <div className="xl:w-1/6 text-center -mt-4">
        <a href="#" className="text-2xl font-bold relative p-1 bg-white">
          Power<span className="text-primary text-5xl">.</span>
          <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" />
        </a>
      </div>
      <nav
        className={`fixed xl:static bg-white w-[80%] md:w-[40%] flex xl:w-full h-full z-10 ${
          showMenu ? "left-0" : "-left-full"
        } top-0 right-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500`}>
        <a href="#">Home</a>
        <a href="/landing-vite-react-tailwind/rick">API Rick and Morty</a>
        <a href="#">Services</a>
        <a href="#">Product</a>
      </nav>
      <button onClick={() => setShowMenu(!showMenu)} className="xl:hidden text-2xl p-2">
      {showMenu ?   <RiCloseFill /> : <RiMenuLine/>} 
      </button>

    </header>
  );
};

export default Header;
