import React from "react";
import SlideMotion from "../components/SlideMotion";
import homeImage from "../assets/home-image.jpg";
import Resume from "../assets/Jonathan-Espinoza-Web-Developer-Resume.pdf";

const Home = () => {
  return (
    <div className="home-page w-[100%] min-h-screen bg-white flex flex-col justify-center md:pb-0 pb-5 md:pt-0 pt-10">
      <SlideMotion>
        <section
          id="home"
          className="h-auto front-section flex flex-col md:flex-row justify-center items-center text-black mr-5"
        >
          <div className="quick-description md:pl-20 pl-0 md:mt-0 mt-10">
            <h3 className="md:text-[24px] text-[14px]">Hello, I'm</h3>
            <h2 className="font-bold md:text-[70px] text-[30px]">Jonathan</h2>
            <p className="md:w-[500px] w-[300px] mb-5 md:text-[18px] text-[16px]">
              Welcome to my portfolio website! I am a highly skilled developer
              based in Florida, with a passion for creating visually stunning
              and intuitive websites that provide a seamless user experience.
              Browse my portfolio to see examples of my work, and contact me to
              discuss opportunities.
            </p>
            <div className="button flex flex-row justify-start">
              <a
                href={Resume}
                download="Jonathan-Espinoza-Web-Developer-Resume.pdf"
                className="button-1 m-0 cursor-pointer hover:text-black"
              >
                <span className="button-span">Download Resume</span>
              </a>
            </div>
          </div>
          <div className="center-image">
            <img src={homeImage} width={500} height={200} />
          </div>
        </section>
      </SlideMotion>
    </div>
  );
};

export default Home;
