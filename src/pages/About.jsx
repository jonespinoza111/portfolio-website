import React from 'react'

const About = () => {
  return (
    <div className='w-full min-h-screen h-auto color-1 py-5 px-[200px] flex flex-col gap-10'>
        {/*1*/}
        <div className='w-full h-auto color-1 p-5 flex flex-row md:flex-row justify-center'>
            <div className='w-[470px] h-[300px] p-2 bg-white'>
                <img className='w-full h-full' src='../src/assets/about-me-1.jpg' />
            </div>
            <div className='p-5 color-1 max-h-[300px]'>
            <div className='flex flex-col items-start w-[420px] h-full'>
                <h3 className='text-white font-semibold text-2xl w-full'>I use many tools to build beautiful applications</h3>
                <p className='text-white font-light w-full mt-2'>I am a developer with with a lot of experience using different programming technologies and languages. Front-end is my specialty, but I can also build a reliable back-end to go along with an app. I will use all the tools available at my disposal to make a fully functional website for you</p>
            </div>
            </div>
        </div>
        
        {/*2*/}
        <div className='w-full h-auto color-1 p-5 flex flex-row md:flex-row-reverse justify-center'>
            <div className='w-[470px] h-[300px] p-2 bg-white'>
                <img className='w-full h-full' src='../src/assets/about-me-2.jpg' />
            </div>
            <div className='p-5 flex flex-col items-end color-1 max-h-[300px]'>
                <div className='flex flex-col items-start w-[420px] h-full'>
                    <h3 className='text-white font-semibold text-2xl w-[100%]'>I use many tools to build beautiful applications</h3>
                    <p className='text-white font-light w-[100%] mt-2'>I am a developer with with a lot of experience using different programming technologies and languages. Front-end is my specialty, but I can also build a reliable back-end to go along with an app. I will use all the tools available at my disposal to make a fully functional website for you</p>
                </div>
            </div>
        </div>

        {/*3*/}
        <div className='w-full h-auto color-1 p-5 flex flex-row md:flex-row justify-center'>
            <div className='w-[470px] h-[300px] p-2 bg-white'>
                <img className='w-full h-full' src='../src/assets/about-me-3.jpg' />
            </div>
            <div className='p-5 color-1 max-h-[300px]'>
                <div className='flex flex-col items-start w-[420px] h-full'>
                    <h3 className='text-white font-semibold text-2xl w-full'>I use many tools to build beautiful applications</h3>
                    <p className='text-white font-light w-full mt-2'>I am a developer with with a lot of experience using different programming technologies and languages. Front-end is my specialty, but I can also build a reliable back-end to go along with an app. I will use all the tools available at my disposal to make a fully functional website for you</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;
