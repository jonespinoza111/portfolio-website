import React from "react";
import { useNavigate } from "react-router-dom";
import SlideMotion from "./SlideMotion";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  return (
    <SlideMotion direction="up">
      <div
        className="card bg-white text-black container-box-shadow w-[325px] h-[350px] flex flex-col-reverse my-5 mx-4 cursor-pointer rounded-lg hover:scale-105 transition-all duration-200"
        onClick={() => navigate(`/project/${project.id}`)}
      >
        <div className="w-full h-[30%]">
          <h3 className="pl-5 pt-2 font-semibold text-xl">{project.title}</h3>
          <p className="pl-5 pr-2 pt-2 font-medium text-[15px]">
            {project.description}
          </p>
        </div>
        <div className="img-container w-full h-[70%] flex justify-center items-center bg-red-100 rounded-t-lg">
          <img
            src={`src/assets/${project.images[0]}`}
            className={`${
              project.id === 3 ? "w-auto" : "w-full"
            } h-full rounded-t-lg`}
          />
        </div>
      </div>
    </SlideMotion>
  );
};

export default ProjectCard;
