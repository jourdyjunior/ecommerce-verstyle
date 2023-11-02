import React from "react";
import { NavLink } from "react-router-dom";

const HeroItems = () => {
  return (
    <div className=" h-full w-full">
      <div className="h-screen bg-[#252525]">
        <div className="">
          <div className="flex justify-between p-8 text-white ">
            <h1 className="text-2xl">Our Product</h1>
            <NavLink to="/product">
              <button className="py-2 px-4 bg-white text-black rounded-full text-sm font-semibold">
                View All
              </button>
            </NavLink>
          </div>

          <div className="max-w-xs bg-white rounded overflow-hidden shadow-lg py-2">
            <img src="/catharsis__1.png" alt="gambar" className="max-w-xs" />
            <div className="px-6 py-2">
              <div className="font-bold text-xl mb-2">Catharsis</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
            <div className="px-6 py-4">
              <span className="text-gray-700 text-sm"></span>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full float-right mt-2">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroItems;
