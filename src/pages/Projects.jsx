import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import Tag from "../components/Tag";
import { Tabs } from "react-simple-tabs-component";
import "react-simple-tabs-component/dist/index.css";
import { projectData } from "../data/data";

const Data = ({ title, description }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  );
};

const TabOne = () => {
  const { id, title, description } = projectData[0];
  return <Data key={id} title={title} description={description} />;
};

const tabs = [
  {
    label: "All", // Tab Title - String
    Component: TabOne, // Tab Body - JSX.Element
  },
  {
    label: "React",
    Component: TabOne,
  },
  {
    label: "Full-Stack",
    Component: TabOne,
  },
  {
    label: "React-Native",
    Component: TabOne,
  },
];

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="w-100 h-screen color-1">
      <section className="color-1 h-auto min-h-full flex flex-col items-center py-5 md:px-[200px] px-[20px]">
        <div className="w-full h-auto color-1 py-10">
          <h3 className="text-white font-semibold md:text-3xl text-2xl w-full mb-8">
            Projects
          </h3>
          <div>
            <Tabs tabs={tabs} type="tabs" e />
          </div>
          <div className="flex lg:flex-row flex-wrap items-center flex-col">
            {projectData.map((project, index) => (
              <div
                key={index}
                className="card bg-white text-black container-box-shadow w-[325px] h-[350px] flex flex-col-reverse my-5 mx-4 cursor-pointer rounded-lg hover:scale-105 transition-all duration-200"
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <div className="w-full h-[30%]">
                  <h3 className="pl-5 pt-2 font-semibold text-xl">
                    {project.title}
                  </h3>
                  <p className="pl-5 pr-2 pt-2 font-medium text-[15px]">
                    {project.description}
                  </p>
                </div>
                <div className="img-container w-full h-[70%]">
                  <img
                    src={`src/assets/dog.jpg`}
                    className="w-full h-full rounded-t-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
