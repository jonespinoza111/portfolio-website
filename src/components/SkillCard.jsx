import { faCss3Alt, faHtml5, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import SlideMotion from './SlideMotion';

const SkillCard = ({ skill }) => {
  return (
    <SlideMotion direction={'right'}>
      <div className="card color-1 container-box-shadow text-white w-[225px] h-[180px] flex flex-col my-5 rounded">
          <div className="img-container w-full h-[50%] mb-5 color-1 flex flex-row justify-center items-center">
              <FontAwesomeIcon className='text-[50px] text-red-200' icon={skill.icon} />
          </div>
          <div className='border-t-[1px] border-white border-solid pb-4'>
              <h3 className="pl-5 pt-2 text-[20px]">{skill.name}</h3>
              <p className="pl-5 pt-2 text-[14px]">{skill.description}</p>
          </div>
      </div>
    </SlideMotion>
  )
}

export default SkillCard;
