import React from "react";
import { Tabs } from "react-simple-tabs-component";
import "react-simple-tabs-component/dist/index.css";
import { projectData } from "../data/data";
import ProjectCard from "../components/ProjectCard";


const TabContent = ({ label }) => {
  return (
    <div className="flex lg:flex-row flex-wrap items-center flex-col">
      {projectData.filter(project => project.tags.includes(label)).map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

const tabs = [
  {
    label: "All", // Tab Title - String
    Component: () => <TabContent label="All" />, // Tab Body - JSX.Element
  },
  {
    label: "React",
    Component: () => <TabContent label="React" />,
  },
  {
    label: "Full-Stack",
    Component: () => <TabContent label="Full-Stack" />,
  },
  {
    label: "React-Native",
    Component: () => <TabContent label="React-Native" />,
  },
  {
    label: "AWS",
    Component: () => <TabContent label="AWS" />
  }
];

const Projects = () => {
  return (
    <div className="w-100 h-screen color-1">
      <section className="color-1 h-auto min-h-full flex flex-col items-center py-5 md:px-[200px] px-[20px]">
        <div className="w-full h-auto color-1 py-10">
          <h3 className="text-white font-semibold md:text-3xl text-2xl w-full mb-8">
            Projects
          </h3>
          <div>
            <Tabs tabs={tabs} type="tabs" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
