import React from "react";
import Buttons from "../Buttons/Buttons";

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-400 h-[60px] flex items-center justify-center text-white font-semibold text-xl">
        Edunify-Uniform Application
      </div>
      <Buttons />
    </>
  );
};

export default Navbar;
