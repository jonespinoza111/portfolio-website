import React from "react";
import SlideMotion from "./SlideMotion";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ project }) => {
  return (
    <SlideMotion direction="up">
      <ProjectModal projectDetails={project}>
        <div className="card bg-white text-black container-box-shadow w-[425px] h-[350px] flex flex-col my-5 mx-4 cursor-pointer rounded-lg hover:-translate-y-1 hover:scale-105 transition-all duration-200">
          <div className="img-container w-full h-[65%] sm:h-[70%] flex justify-center items-center bg-black rounded-t-lg">
            <img
              src={project.images[0]}
              className={`${
                project.id === 3 ? "w-auto" : "w-full"
              } h-full rounded-t-lg`}
            />
          </div>
          <div className="w-full h-[35%] sm:h-[30%]">
            <h3 className="pl-5 pt-2 font-semibold text-xl">{project.title}</h3>
            <p className="pl-5 pr-2 pt-2 font-medium text-[15px]">
              {project.description}
            </p>
          </div>
        </div>
      </ProjectModal>
    </SlideMotion>
  );
};

export default ProjectCard;
