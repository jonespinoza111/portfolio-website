import React from "react";
import CustomButton from "../components/CustomButton";

import { useNavigate } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page min-h-screen bg-white flex flex-col justify-start md:pb-0 pb-5">
      <section className="h-auto front-section flex flex-col md:flex-row justify-center items-center text-black mr-5">
        <div className="quick-description md:pl-20 pl-0 md:mt-0 mt-10">
          <h3 className="md:text-[20px] text-[14px]">Hello, I'm</h3>
          <h2 className="font-bold md:text-[70px] text-[30px]">Jonathan</h2>
          <p className="md:w-[500px] w-[300px] mb-5">
            Today I am going to help you with the magic in the world. If you have to
            make it here now then you will go to the water park. I need to take you
            there sometime but I won't force it.
          </p>
          <CustomButton type="1" text="Learn More" onClick={() => navigate('/about')} />
        </div>
        <div className="center-image">
          <img src="src/assets/6192651.jpg" width={500} height={200} />
        </div>
        {/* <div className="cards-container">
          {['laptop', 'car', 'dog'].map((card, index) => (
            <div key={index} className="card color-1 container-box-shadow text-white w-[225px] h-[180px] flex flex-col my-5 rounded">
              <div className="img-container w-full h-[50%]">
                <img src={`src/assets/${card}.jpg`} className="w-full h-full" />
              </div>
              <h3 className="pl-5 pt-2">Web 3</h3>
              <p className="pl-5 pt-2 text-[10px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          ))}
        </div> */}
      </section>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,128L80,112C160,96,320,64,480,90.7C640,117,800,203,960,208C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg> */}
      <SocialLinks />
    </div>
  );
};

export default Home;
