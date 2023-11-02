import React from "react";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white z-10 border-b">
      <div className="flex justify-between items-center px-8 py-4">
        <NavLink>
          <h1 className="text-xl font-semibold cursor-pointer uppercase">
            verstyle
          </h1>
        </NavLink>
        <div>
          <ul className="flex gap-4 uppercase text-base">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-slate-700"
                  : "text-slate-400 hover:text-slate-700"
              }
              to="/"
            >
              Beranda
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-slate-700"
                  : "text-slate-400 hover:text-slate-700"
              }
              to="/product"
            >
              Product
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-slate-700"
                  : "text-slate-400 hover:text-slate-700"
              }
              to="/man"
            >
              Man
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-slate-700"
                  : "text-slate-400 hover:text-slate-700"
              }
              to="/woman"
            >
              Woman
            </NavLink>
          </ul>
        </div>
        <div>
          <div>
            <NavLink to="/login">
              <button className="flex items-center bg-gray-800 hover:bg-gray-950 text-white px-5 py-2  rounded-sm ">
                Sign In
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
