import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt, faLinkedinIn, } from '@fortawesome/free-brands-svg-icons' 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SocialLinks = () => {
  return (
    <div className="social-media-buttons flex flex-row items-center justify-center gap-6">
        {['facebook', 'twitter', 'google'].map((num, index) => (
          <div key={index} className={`social-button btn ${num} flex items-center justify-center h-[70px] w-[70px]`}>
            {num === "facebook" && (
              <FontAwesomeIcon className="fa" icon={faGithubAlt} />
            )}
            {num === "twitter" && (
              <FontAwesomeIcon className="fa" icon={faLinkedinIn} />
            )}
            {num === "google" && (
              <FontAwesomeIcon className="fa" icon={faEnvelope} />
            )}
          </div>
        ))}
      </div>
  )
}

export default SocialLinks;
