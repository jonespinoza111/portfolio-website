import { faArrowLeft, faCode, faDesktop } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/CustomButton';

const ProjectDetails = () => {
  const navigate = useNavigate();

  const previousPage = () => {
    navigate('/projects');
    console.log('Lets take it back');
  }
  return (
    <div className="w-100 min-h-screen h-auto color-1 flex flex-col pb-10">
      <CustomButton type="2" text="Back" btnColor="red" size="small" icon={faArrowLeft} onClick={previousPage} />
      <div className='w-full h-auto flex flex-row justify-center pt-[50px]'>
        <div className='project-details-card flex flex-col lg:flex-row color-1 bg-opacity-20 md:w-[80%] w-[300px] lg:h-[500px] h-auto box-shadow-2 rounded-2xl'>
            <div className='lg:w-[35%] md:w-[100%] lg:h-full md:h-[50%] h-[400px] bg-color-1 bg-gray-700 bg-opacity-60 lg:rounded-2xl rounded-t-2xl'>
                <img src='../src/assets/website-1.png' className='w-full h-full lg:rounded-2xl rounded-t-2xl' />
            </div>
            <div className='lg:w-[65%] w-full lg:h-full md:h-[50%] h-auto bg-gray-700 bg-opacity-60 text-white flex flex-col justify-evenly gap-5 px-10 py-10'>
                <div>
                    <h2 className='font-bold text-4xl'>ChatWithUs</h2>
                </div>
                <div>
                    <div className='bg-yellow-200 max-w-[170px] w-auto text-white p-1 px-4 rounded-xl mb-4'>
                        <h3 className='text-xl text-black'>Project Details:</h3>
                    </div>
                    <p className='font-normal mb-2'>This is a chat app that uses websockets to allow uses to make friends and chat with each other.</p>
                    <ul className='my-2'>
                        <li className='font-light'>- Websockets</li>
                        <li className='font-light'>- Fullstack</li>
                        <li className='font-light'>- React</li>
                        <li className='font-light'>- Gives real time updates</li>
                        <li className='font-light'>- Friend accepting</li>
                    </ul>
                </div>
                <div className='buttons-container flex md:flex-row flex-col gap-6 md:pb-0 pb-10 md:pt-0 pt-10'>
                    <CustomButton type="2" text="github repo" size="medium" icon={faCode} btnColor="green" />
                    <CustomButton type="2" text="visit site" size="medium" icon={faDesktop} btnColor="blue" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails;
