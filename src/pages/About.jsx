import React from "react";
import SkillCard from "../components/SkillCard";
import {
  faCss3Alt,
  faHtml5,
  faNodeJs,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import SlideMotion from "../components/SlideMotion";
import aboutMe1 from '../assets/about-me-1.jpg';
import aboutMe2 from '../assets/about-me-2.jpg';
import aboutMe3 from '../assets/about-me-3.jpg';


const skills = [
  {
    name: "HTML5",
    icon: faHtml5,
    description: "Markup Language",
  },
  {
    name: "CSS3",
    icon: faCss3Alt,
    description: "Style Sheet Language",
  },
  {
    name: "JavaScript",
    icon: faSquareJs,
    description: "Front-end Language",
  },
  {
    name: "React",
    icon: faReact,
    description: "Front-end JS Framework",
  },
  {
    name: "MongoDB",
    icon: faDatabase,
    description: "Document Database Program"

  },
  {
    name: "NodeJS",
    icon: faNodeJs,
    description: "Back-end JS Runtime Environment",
  },
];

const About = () => {
  return (
    <div className="w-full min-h-screen h-auto color-1 py-5 md:px-[200px] px-[20px] flex flex-col gap-10">
      <section className="w-full h-auto color-1 p-10 flex flex-col justify-center flex-wrap">
        <h3
          className="text-white font-semibold md:text-3xl text-2xl w-full flex 
            md:justify-start justify-center md:mb-0 mb-5"
        >
          Skills
        </h3>
        <div className="w-full h-auto flex flex-col items-center md:flex-row flex-wrap gap-4">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </section>
      {/*1*/}

      <SlideMotion direction={'left'}>
        <div className="w-full h-auto color-1 p-5 flex flex-col lg:flex-row justify-center md:items-start items-center">
          <div className="md:w-[470px] w-[300px] md:h-[300px] h-[200px] p-2 bg-white">
            <img className="w-full h-full" src={aboutMe1} />
          </div>
          <div className="p-5 color-1 max-h-[300px]">
            <div className="flex flex-col items-start justify-center w-[420px] h-full md:px-0 px-10">
              <h3 className="text-white font-semibold md:text-2xl text-lg w-full">
                  Passion for Learning
              </h3>
              <p className="text-white font-light w-full mt-2 md:text-[16px] text-[14px]">
                As a web developer with a passion for learning, I am always eager
                to take on new challenges and expand my skillset. I have
                experience working with HTML, CSS, JavaScript and React. I am a quick learner and am dedicated to producing high-quality work that meets the needs of my clients.
              </p>
            </div>
          </div>
        </div>
      </SlideMotion>

      {/*2*/}
      <SlideMotion direction={'right'}>

        <div className="w-full h-auto color-1 p-5 flex flex-col lg:flex-row-reverse justify-center md:items-start items-center">
          <div className="md:w-[470px] w-[300px] md:h-[300px] h-[200px] p-2 bg-white">
            <img className="w-full h-full" src={aboutMe2} />
          </div>
          <div className="p-5 flex flex-col items-end color-1 max-h-[300px]">
            <div className="fflex flex-col items-start justify-center w-[420px] h-full md:px-0 px-10">
              <h3 className="text-white font-semibold md:text-2xl text-lg w-full">
                I use many tools to build beautiful applications
              </h3>
              <p className="text-white font-light w-full mt-2 md:text-[16px] text-[14px]">
                I am a developer with with a lot of experience using different
                programming technologies and languages. Front-end is my specialty,
                but I can also build a reliable back-end to go along with an app.
                I will use all the tools available at my disposal to make a fully
                functional website for you.
              </p>
            </div>
          </div>
        </div>
      </SlideMotion>

      {/*3*/}
      <SlideMotion direction={'left'}>
        <div className="w-full h-auto color-1 p-5 flex flex-col lg:flex-row justify-center md:items-start items-center">
          <div className="md:w-[470px] w-[300px] md:h-[300px] h-[200px] p-2 bg-white">
            <img className="w-full h-full" src={aboutMe3} />
          </div>
          <div className="p-5 color-1 max-h-[300px]">
            <div className="flex flex-col items-start justify-center w-[420px] h-full md:px-0 px-10">
              <h3 className="text-white font-semibold md:text-2xl text-lg w-full">
                Strong Problem-Solving Skills
              </h3>
              <p className="text-white font-light w-full mt-2 md:text-[16px] text-[14px]">
                My strong problem-solving skills and attention to detail make me
                an asset to any team. I am currently gaining experience in the
                industry through self-study and hands-on projects.
              </p>
            </div>
          </div>
        </div>
      </SlideMotion>
    </div>
  );
};

export default About;
