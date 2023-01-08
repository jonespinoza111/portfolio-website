import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white flex sm:flex-row items-center justify-between mb-[35px] gap-6 w-full h-16 px-10">
      <div className='logo'>jonespinoza111</div>
      <div className='links md:flex-row md:flex align-items space-x-10 hidden'>
        <Link to="/home">
          Home
        </Link>
        <Link to="/alone">
          About
        </Link>
        <Link to="/from">
          Projects
        </Link>
        <Link to="/you">
          Contact
        </Link>
      </div>
      <div className='button hidden md:flex '>Chat Button</div>
      <div className='sm:hidden flex text-s h-[3px] w-[20px] bg-black before:content-["Hello"] after:context-["tonight"]'></div>
    </div>
  )
}

export default Navbar;
