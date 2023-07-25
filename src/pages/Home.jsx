import React from "react";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import SlideMotion from "../components/SlideMotion";
import homeImage from '../assets/home-image.jpg'


const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page min-h-screen bg-white flex flex-col justify-start md:pb-0 pb-5">
      <SlideMotion>
        <section className="h-auto front-section flex flex-col md:flex-row justify-center items-center text-black mr-5">
          <div className="quick-description md:pl-20 pl-0 md:mt-0 mt-10">
            <h3 className="md:text-[24px] text-[14px]">Hello, I'm</h3>
            <h2 className="font-bold md:text-[70px] text-[30px]">Jonathan</h2>
            <p className="md:w-[500px] w-[300px] mb-5 md:text-[18px] text-[16px]">
              Welcome to my portfolio website! I am a highly skilled developer
              based in Florida, with a passion for creating visually stunning and
              intuitive websites that provide a seamless user experience. Browse
              my portfolio to see examples of my work, and contact me to discuss
              opportunities.
            </p>
            <CustomButton
              type="1"
              text="Learn More"
              onClick={() => navigate("/about")}
            />
          </div>
          <div className="center-image">
            <img src={homeImage} width={500} height={200} />
          </div>
        </section>
      </SlideMotion>
      <SocialLinks />
        <div className="flex justify-center items-center mt-40 mb-10 font-extralight  mx-5">
        <a href="https://www.flaticon.com/free-icons/biography" title="biography icons">Biography icons created by manshagraphics - Flaticon</a>
      </div>
    </div>
  );
};

export default Home;
