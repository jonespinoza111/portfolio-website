import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Resume from "../assets/Jonathan-Espinoza-Web-Developer-Resume.pdf";

const Navbar = () => {
  const [toggleDrawer, setToggleDrawer] = useState(false);
  return (
    <div className="bg-white text-black flex sm:flex-row items-center justify-between w-full h-16 md:px-10 px-5">
      <Link id="nav-link" to="/home">
        <div className="logo font-semibold">JONATHAN-ESPINOZA</div>
      </Link>
      <div className="links sm:flex sm:flex-row align-items space-x-10 hidden text-[18px]">
        <Link id="nav-link" to="/home">
          Home
        </Link>
        <Link id="nav-link" to="/about">
          About
        </Link>
        <Link id="nav-link" to="/projects">
          Projects
        </Link>
      </div>
      <div className="button hidden sm:flex ">
        <a
          href={Resume}
          download="Jonathan-Espinoza-Web-Developer-Resume.pdf"
          className="button-1 w-auto cursor-pointer"
        >
          <span className="button-span">Download Resume</span>
        </a>
      </div>
      <div
        className="burger-icon sm:hidden flex text-s h-auto w-auto p-2 bg-white-500 cursor-pointer"
        onClick={() => setToggleDrawer((prev) => !prev)}
      >
        <FontAwesomeIcon className="text-xl font-bold" icon={faBars} />
      </div>
      <div
        className={`flex flex-col pl-5 absolute top-[60px] right-0 left-0 bg-white z-10 shadow-secondary container-box-shadow py-4 gap-y-2 ${
          !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
        } transition-all duration-700' `}
      >
        {["home", "about", "projects"].map((link) => (
          <div className="w-auto">
            <Link
              className="hover:bg-[#54b3d6] px-4 py-2 capitalize"
              to={`/${link}`}
              onClick={() => setToggleDrawer(false)}
            >
              {link}
            </Link>
          </div>
        ))}
        <div className="w-auto">
          <a
            href={Resume}
            download="Jonathan-Espinoza-Web-Developer-Resume.pdf"
            className="hover:bg-[#54b3d6] px-4 py-2 capitalize"
            onClick={() => setToggleDrawer(false)}
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
