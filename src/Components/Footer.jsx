import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="mt-20 sm:px-6 px-3 bg-gray-800 text-center">
      <div className="flex sm:flex-row sm:justify-evenly flex-col items-center">
        <img className="w-28 h-20 invert" src={logo} alt="logo" />
        <ul className="flex sm:flex-row items-center sm:text-[18px] text-[12px] gap-4 font-semibold text-gray-100">
          <span>Products</span>
          <span>Apps and Games</span>
          <span>Contact Us</span>
          <span>Terms</span>
          <span>Privacy</span>
        </ul>
      </div>
      <p className="text-gray-200 py-2 italic text-[15px]">
        @Copyright-2023 AdityaPuri
      </p>
    </div>
  );
};

export default Footer;
