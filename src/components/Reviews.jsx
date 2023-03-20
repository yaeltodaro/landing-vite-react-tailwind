import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Reviews = () => {
  return (
    <div className="p-8 flex flex-col gap-8 bg-gray-50">
      <h2 className="font-black text-[40px] text-center text-tertiary">
        Let’s hear What they says
      </h2>
      <div className="flex justify-center">
      <span className="text-5xl text-primary" >
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel
          lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum
          turpis amet id posuere torto quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore.
        </p>
        <span className="text-5xl text-primary" >
          <RiDoubleQuotesR />
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-8 md:gap-12">
          <img
            src="a1.jpg"
            alt=""
            className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full "
          />{" "}
          <img
            src="a3.jpg"
            alt=""
            className="w-10 h-10 md:w-14 md:h-14 object-cover rounded-full "
          />
          <img
            src="a2.jpg"
            alt=""
            className="w-14 h-14 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-primary p-1"
          />
          <img
            src="a3.jpg"
            alt=""
            className="w-10 h-10 md:w-14 md:h-14 object-cover rounded-full  "
          />
          <img
            src="a4.jpg"
            alt=""
            className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full  "
          />
        </div>
        <div>
          <h4 className="font-black text-2xl text-center text-tertiary">
            Ricky Aprilia
          </h4>
          <p className="text-gray-500 text-center">Founder of Varibo</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
