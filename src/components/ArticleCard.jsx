import React, { useState } from 'react';
import RightArrowIcon from "../assets/right-arrow-icon.png"

const ArticleCard = ({ image }) => {
    const [isHovered, setIsHovered] = useState(false);
  return (
        <div className="max-w-sm w-[90%] lg:w-[45%] xl:w-[31%] rounded overflow-hidden shadow-lg cursor-pointer flex flex-col" onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
            <div className={`w-full h-[270px] relative`}>
                <img
                    className="w-[100%] h-[100%]"
                    src={image}
                    alt="Woman sitting on grassy hillside"
                />
                <div className={`absolute ${isHovered ? '' : 'hidden'} bg-black opacity-60 left-0 right-0 top-0 bottom-0 flex justify-center items-center`}>
                </div>
            </div>
            <div className={``}>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Tranquil Moments</div>
                <p className="text-yellow-600 text-sm mt-2">February 5, 2024</p>
                <p className="text-gray-700 text-base">
                A young woman enjoying a peaceful moment in nature.
                </p>
            </div>
            <div className="px-6 py-4 pb-6">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #tech
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #react-native
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #news
                </span>
            </div>
            </div>
        <div className="bg-gray-100 flex flex-row justify-between items-center h-[3.7em]">
            <div className={`px-6 py-4 clip-path-background h-[100%] transition-all duration-300 transform ease-in-out 'bg-gray-200' ${isHovered && 'bg-black opacity-90'} w-[60%] flex items-center`}>
            <button className={isHovered ? "text-white text-md font-bold py-2 px-4 rounded" : "text-black-700 text-md font-bold py-2 px-4 rounded"}>
                Read Article
            </button>
            <img className={`h-6 w-6 relative top-[1px] left-[0px]`} style={isHovered ? { filter: 'invert(1) sepia(1) saturate(5) hue-rotate(175deg)' } : {}} src={RightArrowIcon} />
            </div>
            <div className='px-6 py-4 w-[40%] h-[100%] flex items-center'>
                <a href="#" className="text-yellow-600 text-sm">Comments (10)</a>
            </div>
        </div>
        </div>
  )
}

export default ArticleCard;
