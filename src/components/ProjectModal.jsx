import React, { useRef, useState } from 'react'
import CustomButton from './CustomButton';
import { faCode, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const ProjectModal = ({ children, projectDetails }) => {
    const modalRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal();
        }
    };
    
  
    return (
      <div onClick={openModal}>
        {children}
        {isModalOpen && (
          <div onClick={(e) => {
                e.stopPropagation();
                handleClickOutside(e);
            }} className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
            <div ref={modalRef} className="bg-white relative rounded-lg p-6 w-[85%] md:w-[60%] h-[40em] flex flex-col overflow-y-scroll">
                <div className='w-full flex justify-center'>
                    <h2 className="text-[1.7em] font-bold mb-4">{projectDetails.title}</h2>
                </div>
                <div className='flex flex-col w-full flex-1 items-center gap-y-6'>
                    <div className='w-[80%]'>
                        <Slide>
                            {projectDetails.videos && (
                                <div className={`w-full h-[20em] bg-cover bg-black flex justify-center items-center`}>
                                    <video width="200" height="20em" controls autoPlay>
                                        <source src={projectDetails.videos[0]} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            )}
                            {projectDetails.images.map((image) => (
                            <div
                                className={`w-full h-auto md:h-[20em] bg-cover bg-black ${
                                (projectDetails.id === 4 || projectDetails.id === 7) && "flex justify-center items-center h-[20em]"
                                }`}
                            >
                                <img
                                className={`h-full max-h-[320px] object-contain ${
                                    (projectDetails.id === 4 || projectDetails.id === 7) ? "w-auto" : "w-[100%]"
                                }`}
                                src={image}
                                />
                            </div>
                            ))}
                        </Slide>
                    </div>
                    <div className='px-4 w-[80%]'>
                        <h3 className='font-semibold text-[1.2em]'>Project Info:</h3>
                        <p className="mb-4">{projectDetails.description}</p>
                        <h3 className='font-semibold text-[1.2em]'>Project Details:</h3>
                        <div className='mb-3 flex flex-col h-auto sm:h-[13em] flex-wrap'>
                            {projectDetails.features.map((feature, index) => (
                            <li key={index} className="font-light list-none mb-2">
                                - {feature}
                            </li>
                            ))}
                        </div>
                        <div className="buttons-container flex xl:flex-row flex-col mb-4 gap-6 md:pb-0 pb-10 md:pt-0 pt-10">
                            <CustomButton
                                type="2"
                                text="github repo"
                                size={window.innerWidth < 450 ? "small" : "medium"}
                                icon={faCode}
                                btnColor="green"
                                link={projectDetails.github}
                            />
                            {projectDetails.link !== "" && (
                                <CustomButton
                                type="2"
                                text="visit site"
                                size={window.innerWidth < 450 ? "small" : "medium"}
                                icon={faDesktop}
                                btnColor="blue"
                                link={projectDetails.link}
                                />
                            )}
                        </div>
                        <button onClick={(e) => {
                            e.stopPropagation();
                            closeModal();
                        }} class="absolute top-2 right-2 bg-red-300 hover:bg-red-400 rounded-full p-2 shadow-md hover:shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
          </div>
        )}
      </div>
    );
}

export default ProjectModal;
