import React from "react";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Portfolio = ({ openSidebar }) => {
  return (
    <div className="md:ml-[260px] h-auto flex flex-col flex-1 max-w-[1500px]">
      <div>
        <button
          onClick={openSidebar}
          className="bg-blue-300 hover:bg-blue-200 fixed md:hidden py-2 px-3 top-0 left-0"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <Home />
      <About />
      <Projects />
      <Contact />
      <div className="flex text-black justify-center items-center font-extralight h-[10em] w-[100%] bg-white">
        <a
          href="https://www.flaticon.com/free-icons/biography"
          title="biography icons"
        >
          Biography icons created by manshagraphics - Flaticon
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
