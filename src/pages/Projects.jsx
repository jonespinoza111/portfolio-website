import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="w-100 h-screen color-1">
      <section className="color-1 h-auto min-h-full flex flex-col items-center py-5 px-10">
        <div className="w-full h-auto color-1 py-10">
            <div className="w-full h-auto flex flex-col md:flex-row px-10 gap-2">
                {/* <h1 className="text-black text-5xl">Web 3</h1> */}
                <CustomButton type="2" text="React" btnColor="blue" />
                <CustomButton type="2" text="Solidity" btnColor="green" />
                <CustomButton type="2" text="FullStack" btnColor="red" />
            </div>
            <div className="flex lg:flex-row flex-wrap items-center flex-col mt-[30px]">
            {["laptop", "car", "dog", "dog", "car", "laptop"].map((card, index) => (
                <div
                key={index}
                className="card bg-blue-200 text-black container-box-shadow w-[325px] h-[350px] flex flex-col-reverse my-5 mx-2 cursor-pointer"
                onClick={() => navigate(`/project/${index+1}`)}
                >
                <div className="w-full h-[25%]">
                    <h3 className="pl-5 pt-2 font-semibold">Solidity</h3>
                    <p className="pl-5 pt-2 text-[10px] font-medium">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.
                    </p>
                </div>
                <div className="img-container w-full h-[75%]">
                    <img
                    src={`src/assets/${card}.jpg`}
                    className="w-full h-full"
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
