import React from "react";

const Clients = () => {
  return (
    <div className="bg-gray-100 p-8 flex flex-col justify-center items-center gap-8 mt-20 xl:mt-0">
      <h2 className="pb-8 text-2xl font-medium text-gray-800 text-center">Trusted by greatest companies</h2>
      <div className="flex flex-col flex-wrap md:flex-row items-center gap-20">
        <img src="logo_1.png" alt="" />
        <img src="logo_2.png" alt="" />
        <img src="logo_3.png" alt="" />
        <img src="logo_4.png" alt="" />
        <img src="logo_5.png" alt="" />
      </div>
    </div>
  );
};

export default Clients;
