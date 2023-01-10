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
    <div className="w-100 h-screen color-1 flex flex-col">
      <CustomButton type="2" text="Back" btnColor="red" icon={faArrowLeft} onClick={previousPage} />
      <div className='w-full h-auto flex flex-row justify-center pt-[50px]'>
        <div className='project-details-card flex flex-row bg-red-200 w-[80%] h-[500px] box-shadow-2'>
            <div className='w-[50%] h-full'>
                <img src='../src/assets/website-1.png' className='w-full h-full' />
            </div>
            <div className='w-[50%] h-full bg-white flex flex-col justify-evenly gap-5 py-10 px-5'>
                <div>
                    <h2 className='font-bold text-4xl'>ChatWithUs</h2>
                </div>
                <div>
                    <h3 className='text-xl'>Project Details:</h3>
                    <p className='font-light mb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <ul className='my-2'>
                        <li className='font-light'>- Makes a good option</li>
                        <li className='font-light'>- Makes a good option</li>
                        <li className='font-light'>- Makes a good option</li>
                        <li className='font-light'>- Makes a good option</li>
                        <li className='font-light'>- Makes a good option</li>
                    </ul>
                </div>
                <div className='buttons-container flex flex-row gap-6'>
                    <CustomButton type="2" text="github repo" icon={faCode} btnColor="black" />
                    <CustomButton type="2" text="visit site" icon={faDesktop} btnColor="blue" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails;
