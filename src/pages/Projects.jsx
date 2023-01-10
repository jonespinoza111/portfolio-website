import React from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="w-100 h-screen color-1">
      <section className="color-1 h-full flex flex-col items-center justify-center py-5 px-10">
        <div className="w-full h-[200px] flex justify-center items-center">
            <h1 className="text-white text-5xl">Web 3</h1>
        </div>
        <div className="flex lg:flex-row items-center flex-col justify-between">
          {["laptop", "car", "dog"].map((card, index) => (
            <div
              key={index}
              className="card bg-white text-black container-box-shadow w-[425px] h-[300px] flex flex-col my-5 cursor-pointer mx-10"
              onClick={() => navigate(`/project/${index+1}`)}
            >
              <div className="img-container w-full h-[200px]">
                <img
                  src={`src/assets/${card}.jpg`}
                  className="w-full h-[200px]"
                />
              </div>
              <h3 className="pl-5 pt-2">Web 3</h3>
              <p className="pl-5 pt-2 text-[10px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
