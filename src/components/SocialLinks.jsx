import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons' 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SlideMotion from './SlideMotion';

const SocialLinks = () => {
  return (
    <div className="social-media-buttons flex flex-row items-center justify-center gap-6">
      <SlideMotion direction={'up'}>
        {['github', 'linkedin', 'gmail'].map((num, index) => (
          <>
            {num === "github" && (
                <a key={index} href="https://github.com/jonespinoza111" className={`social-button btn ${num} flex items-center justify-center h-[70px] w-[70px]`} target="_blank">
                    <FontAwesomeIcon className="fa" icon={faGithubAlt} />
                </a>
            )}
            {num === "linkedin" && (
              <a  key={index} href="www.linkedin.com/in/jonathan-espinoza-21965a184" className={`social-button btn ${num} flex items-center justify-center h-[70px] w-[70px]`}>
                <FontAwesomeIcon className="fa" icon={faLinkedinIn} />
              </a>
            )}
            {num === "gmail" && (
                 <a  key={index} href="mailto:jonespinoza111@gmail.com" className={`social-button btn ${num} flex items-center justify-center h-[70px] w-[70px]`}>
                     <FontAwesomeIcon className="fa" icon={faEnvelope} />
                 </a> 
            )}
          </>
        ))}
      </SlideMotion>
      </div>
  )
}

export default SocialLinks;
