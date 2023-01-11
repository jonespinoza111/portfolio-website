import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import Tag from "../components/Tag";
import { Tabs } from 'react-simple-tabs-component'
import 'react-simple-tabs-component/dist/index.css'

const TabOne = () => {
    return (
      <>
        <h3>Tab One</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sint illum iusto nostrum cumque qui
          voluptas tenetur inventore ut quis?
        </p>
      </>
    )
}
const tabs = [
    {
      label: 'All', // Tab Title - String
      Component: TabOne // Tab Body - JSX.Element
    },
    {
        label: 'React',
        Component: TabOne 
    },
    {
      label: 'Solidity',
      Component: TabOne
    },
    {
      label: 'Front-End',
      Component: TabOne
    },
    {
        label: 'Full-Stack',
        Component: TabOne
    },
    {
        label: 'React-Native',
        Component: TabOne
    }
  ]

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="w-100 h-screen color-1">
      <section className="color-1 h-auto min-h-full flex flex-col items-center py-5 px-10 md:px-[200px] px-[20px]">
        <div className="w-full h-auto color-1 py-10">
          {/* <div className="w-full h-auto flex flex-col md:flex-row gap-2">
            {["Projects", "React", "Solidity", "Front-End", "Full-Stack"].map(
              (tag, index) => (
                <Tag tag={tag} key={index} />
              )
            )}
          </div> */}
          <h3 className='text-white font-semibold text-2xl w-full mb-8'>Projects</h3>
          <div>
            <Tabs tabs={tabs} type="tabs"e />
          </div>
          <div className="flex lg:flex-row flex-wrap items-center flex-col">
            {["laptop", "car", "dog", "dog", "car", "laptop"].map(
              (card, index) => (
                <div
                  key={index}
                  className="card bg-white text-black container-box-shadow w-[325px] h-[350px] flex flex-col-reverse my-5 mx-4 cursor-pointer rounded-lg hover:scale-105 transition-all duration-200"
                  onClick={() => navigate(`/project/${index + 1}`)}
                >
                  <div className="w-full h-[25%]">
                    <h3 className="pl-5 pt-2 font-semibold">Solidity</h3>
                    <p className="pl-5 pt-2 text-[10px] font-medium">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                  <div className="img-container w-full h-[75%]">
                    <img
                      src={`src/assets/${card}.jpg`}
                      className="w-full h-full rounded-t-lg"
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
