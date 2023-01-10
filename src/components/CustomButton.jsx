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

const buttonSizes = {
  small: {
    fontSize: "text-sm",
    width: "w-[210px]",
  },
  medium: {
    fontSize: "text-base",
    width: "w-[240px]",
  },
  large: {
    fontSize: "text-lg",
    width: "w-[270px]",
  },
};

const CustomButton = ({ type, text, icon, btnColor, size = "medium", onClick }) => {
  return (
    <div className="button-container" onClick={onClick}>
      {type === "1" && (
        <div className="w-full max-w-[180px] cursor-pointer">
          <div className={`button-1 w-auto`}>
            <span className="button-span">{text}</span>
          </div>
        </div>
      )}
      {type === "2" && (
        <div
          className={`button-2 flex flex-row cursor-pointer ${buttonColors[btnColor].bg} ${buttonColors[btnColor].text} border-[3px] border-solid ${buttonColors[btnColor].border} ${buttonSizes[size].width} ${buttonSizes[size].fontSize} z-0`}
          onClick={onClick}
        >
          {icon && <FontAwesomeIcon icon={icon} />}
          <span className="ml-5">{text}</span>
        </div>
      )}
      {type === "3" && (
        <div className={`cursor-pointer btn button-3`} onClick={onClick}>
          <svg>
            <rect x="0" y="0" fill="none" width="100%" height="100%" />
          </svg>
          <FontAwesomeIcon icon={icon} />
          {text}
        </div>
      )}
    </div>
  );
};

export default CustomButton;
