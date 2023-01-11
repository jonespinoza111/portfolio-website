import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons' 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SocialLinks = () => {
  return (
    <div className="social-media-buttons flex flex-row items-center justify-center gap-6">
        {['github', 'linkedin', 'gmail'].map((num, index) => (
          <div key={index} className={`social-button btn ${num} flex items-center justify-center h-[70px] w-[70px]`}>
            {num === "github" && (
                <a href="https://github.com/jonespinoza111" target="_blank">
                    <FontAwesomeIcon className="fa" icon={faGithubAlt} />
                </a>
            )}
            {num === "linkedin" && (
              <FontAwesomeIcon className="fa" icon={faLinkedinIn} />
            )}
            {num === "gmail" && (
                 <a href="mailto:jonespinoza111@gmail.com">
                     <FontAwesomeIcon className="fa" icon={faEnvelope} />
                 </a> 
            )}
          </div>
        ))}
      </div>
  )
}

export default SocialLinks;
