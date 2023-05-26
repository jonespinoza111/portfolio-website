import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "./CustomButton";

const Navbar = () => {
  // const [isActive, setIsActive] = useState("page");
  const [toggleDrawer, setToggleDrawer] = useState(false);
  return (
    <div className="bg-white text-black flex sm:flex-row items-center justify-between w-full h-16 md:px-10 px-5">
      <div className="logo font-semibold">JONATHAN-ESPINOZA</div>
      <div className="links sm:flex sm:flex-row align-items space-x-10 hidden text-[18px]">
        <Link id="nav-link" to="/home">Home</Link>
        <Link id="nav-link" to="/about">About</Link>
        <Link id="nav-link" to="/projects">Projects</Link>
        {/* <Link to="/contact">Contact</Link> */}
      </div>
      <div className="button hidden sm:flex ">
        <CustomButton type="1" text="Contact Me" />
      </div>
      <div
        className="burger-icon sm:hidden flex text-s h-auto w-auto p-2 bg-white-500 cursor-pointer"
        onClick={() => setToggleDrawer((prev) => !prev)}
      >
        <FontAwesomeIcon className="text-xl font-bold" icon={faBars} />
      </div>
      <div
        className={`flex flex-col pl-5 absolute top-[60px] right-0 left-0 bg-white z-10 shadow-secondary py-4 ${
          !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
        } transition-all duration-700' `}
      >
        <div>
          <Link to="/home" onClick={() => setToggleDrawer(false)}>
            Home
          </Link>
        </div>
        <div className="w-auto">
          <Link to="/about" onClick={() => setToggleDrawer(false)}>
            About
          </Link>
        </div>
        <div className="w-auto">
          <Link to="/projects" onClick={() => setToggleDrawer(false)}>
            Projects
          </Link>
        </div>
        {/* <div className="w-auto">
          <Link to="/cancel" onClick={() => setToggleDrawer(false)}>
            Cancel
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
