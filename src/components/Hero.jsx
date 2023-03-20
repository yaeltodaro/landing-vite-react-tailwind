import React from "react";
import {
  RiCheckboxBlankCircleFill,
  RiPlayFill,
  RiCheckboxBlankCircleLine,
  RiStarSFill,
} from "react-icons/ri";

const Hero = () => {
  return (
    <section className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      <div className="md:col-span-5 md:flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl xl:text-7xl font-bold leading-[4rem] xl:leading-[7.5rem]">
            Web Design impactful Digital 
            <span className="right-2 top-2 table-cell md:inline md:right-0 md:top-0 text-primary py-2 px-6 m-4 border-8 border-primary relative">
              Products
              <RiCheckboxBlankCircleFill className="text-base absolute -left-3 -top-3 text-white ring-8 hover:ring-4 ring-primary rounded-full bg-white" />
              <RiCheckboxBlankCircleFill className="text-base absolute -right-3 -top-3 text-white ring-8 hover:ring-4 ring-primary rounded-full bg-white" />
              <RiCheckboxBlankCircleFill className="text-base absolute -right-3 -bottom-3 text-white ring-8 hover:ring-4 ring-primary rounded-full bg-white" />
              <RiCheckboxBlankCircleFill className="text-base absolute -left-3 -bottom-3 text-white ring-8 hover:ring-4 ring-primary rounded-full bg-white" />
            </span>
          </h1>
          <p
            className="text-gray-500 text-2xl leading-[2.5rem] xl:max-w-xl
          "
          >
            Help find solutions with intitutive and in accordance with client business goals. we provide a high-quality services.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button
              className="w-full xl:w-auto bg-primary text-white
           py-3 px-8 rounded-xl text-xl"
            >
              Contact Us
            </button>
            <button className="w-full xl:w-auto flex items-center gap-4 py-2 px-8 rounded-xl text-left text-xl">
              <RiPlayFill className="bg-secondary text-primary hover:bg-primary hover:text-secondary p-4 box-content rounded-full" />{" "}
              Watch our <br /> introduction video
            </button>
          </div>
        </div>
      </div>

      {/* Imagen Hero */}
      <div className="md:col-span-3 flex items-center justify-center relative p-8">
        <div>
          <div className="logo-sketch absolute top-0 left-0 md:top-40 md:left-20 lg:top-0 lg:left-0">
            <img src="sketch.png" alt="" />
          </div>

          <div className="logo-xd absolute top-40 left-0 md:top-10 md:left-20">
            <img src="xd.png" alt="" />
          </div>

          <div className="logo-figma absolute top-10 right-1 md:right-10">
            <img src="logo_figma.png" alt="" />
          </div>
          {/* Hero Circulo */}
          <img
            src="hero3.png"
            alt=""
            className="w-[240px] object-cover -mb-12 -ml-1"
          />

          {/* Box */}
          <div className="relative bg-white rounded-lg p-4 shadow-xl flex flex-col gap-2 justify-center max-w-[239px] mx-auto inline-flex">
            <div className="flex items-center">
              <img
                src="hero.png"
                alt=""
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300"
              />
              <img
                src="a1.jpg"
                alt=""
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
              <img
                src="a2.jpg"
                alt=""
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
              <img
                src="a3.jpg"
                alt=""
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
              <img
                src="a4.jpg"
                alt=""
                className="w-10 h-10 object-cover rounded-full ring-2 ring-gray-300 -ml-4"
              />
            </div>

            <h2 className="text-xl font-bold tracking-[1px] text-gray-800">
              120 + Employees
            </h2>
            <div className="flex items-center gap-2 text-lg text-gray-500">
              <RiStarSFill className="text-primary text-xl" /> 5.0 (3.1K
              Reviews)
            </div>
            <div className="absolute -right-14 -bottom-14 -z-10">
              <div className="relative">
                <RiCheckboxBlankCircleFill className="text-primary text-8xl" />
                <div className="absolute left-0 top-0 bg-white w-12 h-12" />
              </div>
            </div>
          </div>
        </div>
        <RiCheckboxBlankCircleLine className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-thin text-[300px] text-secondary bg-secondary rounded-full -z-10 border-[10px] border-primary" />
      </div>
    </section>
  );
};

export default Hero;
