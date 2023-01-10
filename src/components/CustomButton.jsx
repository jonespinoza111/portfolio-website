import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const buttonColors = {
  red: {
    bg: "before:bg-[#FF0072]",
    border: "border-[#FF0072]",
    text: "text-[#FF0072]",
  },
  green: {
    bg: "before:bg-green-500",
    border: "border-green-500",
    text: "text-green-500",
  },
  blue: {
    bg: "before:bg-blue-500",
    border: "border-blue-500",
    text: "text-blue-500",
  },
  black: {
    bg: "before:bg-black",
    border: "border-black",
    text: "text-black",
  },
};

const CustomButton = ({ type, text, icon, btnColor }) => {
  return (
    <div className="button-container">
      {type === "1" && (
        <div className="w-[150px] cursor-pointer">
          <div className={`button-1`}>
            <span className="button-span">{text}</span>
          </div>
        </div>
      )}
      {type === "2" && (
        <div
          className={`button-2 ${buttonColors[btnColor].bg} cursor-pointer z-0 flex flex-row ${buttonColors[btnColor].text} border-[3px] border-solid ${buttonColors[btnColor].border}`}
        >
          <FontAwesomeIcon icon={icon} />
          <span className="ml-5">{text}</span>
        </div>
      )}
      {type === "3" && (
        <div className={`cursor-pointer btn button-3`}>
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" />
          </svg>
          {text}
        </div>
      )}
    </div>
  );
};

export default CustomButton;
