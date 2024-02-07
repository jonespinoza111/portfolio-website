import React from 'react'
import ArticleCard from '../components/ArticleCard';
import TestHeroImage from '../assets/test-hero-image.jpg';
import TestHeroImage2 from '../assets/test-hero-image-2.jpg';
import TestHeroImage3 from '../assets/test-hero-image-3.png';
import ArticleImage from "../assets/test-article-image.jpg";
import ArticleImage2 from "../assets/test-article-image-2.webp";
import ArticleImage3 from "../assets/test-article-image-3.jpg";
import ArticleImage4 from "../assets/test-article-image-4.jpg";


const Blog = () => {
  return (
    <div className='bg-white w-full h-auto md:ml-[260px] pb-[4em]'>
        <div className='w-[100%] h-[35em] py-10 px-10'>
            <div className='w-[100%] h-[100%] relative flex justify-center'>
                <img className='w-[100%] h-[100%] rounded-xl' src={TestHeroImage3} />
                <div className=' bg-gray-600 opacity-80 absolute bottom-[1em] w-[98%] h-auto rounded-md px-5 py-6'>
                <span className='text-white'>Featured</span>
                <h1 className="text-white text-4xl font-bold mb-4">Exploring React Native: Building Cross-Platform Apps</h1>
                <p className='text-white text-lg w-[70%]'>Discover the power of React Native as we delve into its capabilities for developing cross-platform mobile applications. Learn how React Native enables efficient code sharing and rapid development, making it a top choice for mobile app development.</p>
                </div>
            </div>
        </div>
        <section className='px-10 py-5'>
            <div className='w-[100%] flex flex-row justify-between items-center'>
            <h1 className="text-2xl mt-8 mb-4 text-start">Latest Blog Posts</h1>
            <span className='bg-blue-200 hover:bg-blue-300 transform transition-all py-3 px-6 cursor-pointer rounded-md'>See All Posts</span>
            </div>
        <div className='articles-container flex flex-row flex-wrap gap-x-10 gap-y-[2.5em] justify-start items-center'>
            <ArticleCard image={ArticleImage} />
            <ArticleCard image={ArticleImage2} />
            <ArticleCard image={ArticleImage3} />
            <ArticleCard image={ArticleImage4} />
            <ArticleCard image={ArticleImage2} />
            <ArticleCard image={ArticleImage3} />
        </div>
        </section>
    </div>
  )
}

export default Blog;
