import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Hero = () => {
  return (
    <div className="flex items-center px-8 w-full h-full">
      <div className="h-screen">
        <motion.div
          variants={fadeIn("right", 0, 4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mt-40"
        >
          <h1 className="text-7xl font-semibold">Fashion for every style.</h1>
          <p className="mt-7 text-slate-600 text-lg">
            We have something for everyone,
          </p>
          <p className="text-slate-600 text-lg">
            so come and express yourself with fashion!
          </p>
          <p className="mt-12 text-slate-800 text-xl">
            Check out our complete products.
          </p>
          <NavLink to="/product">
            <button className="bg-gray-900 hover:bg-gray-950 mt-4 text-white px-10 py-3">
              See All
            </button>
          </NavLink>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0, 4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="absolute right-32 top-24"
        >
          <img className="max-w-xl h-[585px]" src="/gambar.jpg" alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
