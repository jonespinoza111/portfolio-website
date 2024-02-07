import { faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ open, closeSidebar }) => {
  return (
    <nav
      className={`w-[220px] lg:w-[260px] ${
        open ? "visible" : "translate-x-[-100%]"
      } z-10 top-0 left-0 bg-black h-screen flex flex-col items-center justify-between pt-[3em] pb-[2em] fixed inset-y-0 text-white transition-transform transform duration-300 ease-in-out`}
    >
      <div className="visible md:hidden top-0 left-0 absolute">
        <button
          onClick={closeSidebar}
          className="bg-blue-200 hover:bg-blue-300 text-black px-3 py-2"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className="main-info flex flex-col items-center gap-y-2">
        <img
          src="https://cdn4.iconfinder.com/data/icons/male-occupation-avatar-1/64/Programmer-Coding-Avatar-Occupation-Man-512.png"
          className="bg-gray-300 rounded-full w-[100px] h-[100px]  md:w-[160px] md:h-[160px]"
        />
        <h3 className="text-white text-[1.4em]">Jonathan Espinoza</h3>
      </div>
      <div className="links flex flex-col gap-y-5 text-[1.2em] text-white text-center">
        <NavLink
          className="bg-black hover:text-blue-300 text-white font-bold py-2 px-4 rounded transition duration-300"
          to="/#home"
        >
          Home
        </NavLink>
        <NavLink
          className="bg-black hover:text-blue-300 text-white font-bold py-2 px-4 rounded transition duration-300"
          to="/#about"
        >
          About Me
        </NavLink>
        <NavLink
          className="bg-black hover:text-blue-300 text-white font-bold py-2 px-4 rounded transition duration-300"
          to="/#projects"
        >
          Projects
        </NavLink>
        <NavLink
          className="bg-black hover:text-blue-300 text-white font-bold py-2 px-4 rounded transition duration-300"
          to="/#contact"
        >
          Contact
        </NavLink>
      </div>
      <div className="social-media-buttons flex flex-row items-center justify-center gap-x-3">
        {["github", "linkedin", "gmail"].map((num, index) => (
          <>
            {num === "github" && (
              <a
                key={index}
                href="https://github.com/jonespinoza111"
                className={`social-button btn ${num} flex items-center justify-center h-[70px] w-[70px]`}
                target="_blank"
              >
                <FontAwesomeIcon className="fa" icon={faGithubAlt} />
              </a>
            )}
            {num === "linkedin" && (
              <a
                key={index}
                href="https://www.linkedin.com/in/jonathan-espinoza-21965a184"
                className={`social-button btn ${num} flex items-center justify-center h-[70px] w-[70px]`}
                target="_blank"
              >
                <FontAwesomeIcon className="fa" icon={faLinkedinIn} />
              </a>
            )}
            {num === "gmail" && (
              <a
                key={index}
                href="mailto:jonespinoza111@gmail.com"
                className={`social-button btn ${num} flex items-center justify-center h-[70px] w-[70px]`}
              >
                <FontAwesomeIcon className="fa" icon={faEnvelope} />
              </a>
            )}
          </>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
