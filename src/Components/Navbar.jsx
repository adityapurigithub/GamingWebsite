import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState(false);

  const navTransition = () => {
    if (window.scrollY > 2) {
      console.log("hey");
      setNav(true);
    } else {
      setNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", navTransition);

    return () => window.addEventListener("scroll", navTransition);
  }, []);

  return (
    <div
      className={`${
        nav && "bg-slate-900"
      } flex justify-between items-center px-5 sticky top-0 z-10 transition`}
    >
      <img className="w-28 h-20 invert" src={logo} alt="logo" />
      <ul className="hidden sm:flex text-[18px] gap-4 font-semibold text-gray-100">
        <li>Products</li>
        <li>Apps and Games</li>
        <li>Contact Us</li>
        <li>
          <img
            className="w-7 object-cover"
            src="https://cdn-icons-png.flaticon.com/512/4526/4526437.png"
          />
        </li>
      </ul>

      <div className="sm:hidden">
        <img
          src={
            open
              ? "https://cdn-icons-png.flaticon.com/128/463/463612.png"
              : "https://cdn-icons-png.flaticon.com/512/2976/2976215.png"
          }
          className="w-8 cursor-pointer"
          onClick={() => setOpen(!open)}
        />
        <div
          className={`drop-menu ${
            !open ? "hidden" : "flex"
          } z-50 absolute right-10 top-[70px] text-gray-200 min-w-[150px] rounded-xl bg-drop-down-gradient p-4`}
        >
          <ul className="text-center flex flex-col items-center gap-4 font-semibold ">
            <li>Products</li>
            <li>Apps and Games</li>
            <li>Contact Us</li>
            <li>
              <img
                className="w-10"
                src="https://cdn-icons-png.flaticon.com/512/4526/4526437.png"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
