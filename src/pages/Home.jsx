import React from "react";
import CustomButton from "../components/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons' 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <section className="flex flex-row items-center text-black mr-5">
        <div className="quick-description pl-20">
          <h3 className="text-[20px]">Hello, I'm</h3>
          <h2 className="font-bold text-[70px]">Jonathan</h2>
          <p className="w-[500px] mb-5">
            Today I am going to help you with the magic in the world. If you have to
            make it here now then you will go to the water park. I need to take you
            there sometime but I won't force it.
          </p>
          <CustomButton type="1" text="Click Here" />
        </div>
        <div className="center-image">
          <img src="src/assets/6192651.jpg" width={500} height={200} />
        </div>
        <div className="cards-container">
          {['laptop', 'car', 'dog'].map((card, index) => (
            <div key={index} className="card color-1 container-box-shadow text-white w-[225px] h-[200px] flex flex-col my-5">
              <div className="img-container w-full h-[100px]">
                <img src={`src/assets/${card}.jpg`} className="w-full h-full" />
              </div>
              <h3 className="pl-5 pt-2">Web 3</h3>
              <p className="pl-5 pt-2 text-[10px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          ))}
        </div>
      </section>
      {/* <section className="color-1 py-5 px-10">
        <div className="flex flex-row justify-between">
          {['laptop', 'car', 'dog'].map((card, index) => (
            <div key={index} className="card bg-white text-black container-box-shadow w-[425px] h-[300px] flex flex-col my-5">
              <div className="img-container w-full h-[200px]">
                <img src={`src/assets/${card}.jpg`} className="w-full h-[200px]" />
              </div>
              <h3 className="pl-5 pt-2">Web 3</h3>
              <p className="pl-5 pt-2 text-[10px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          ))}
        </div>
      </section> */}
      <div className="social-media-buttons flex flex-row gap-6 pl-10 bottom-0">
        {['facebook', 'twitter', 'google'].map((num, index) => (
          <div key={index} className={`social-button btn ${num} flex items-center justify-center h-[70px] w-[70px]`}>
            {num === "facebook" && (
              <FontAwesomeIcon className="fa" icon={faGithubAlt} />
            )}
            {num === "twitter" && (
              <FontAwesomeIcon className="fa" icon={faLinkedinIn} />
            )}
            {num === "google" && (
              <FontAwesomeIcon className="fa" icon={faEnvelope} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
