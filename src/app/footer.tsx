import React from 'react'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CgMail } from "react-icons/cg";

interface FooterProps {
  scrollToTop: () => void;
}

function footer({ scrollToTop }: FooterProps) {
  return (
    <div className=' bg-black text-white h-[220px] w-screen gap-5 flex flex-col pt-[10px] justify-center items-center'>
      <button onClick={scrollToTop} >
        <MdKeyboardDoubleArrowUp/>
      </button>
      <p className='font-montserrat font-bold text-[15px] '>BACK TO TOP</p>
      <div className='flex gap-3 justify-around w-[100px]'>
        <a href="https://github.com/abdellah-archtouy">
          <FaGithub className='h-[30px] w-[30px] ' />
          </a>
        <a href="https://www.linkedin.com/in/abdellaharchrouy/">
          <CiLinkedin  className='h-[30px] w-[30px] ' />
          </a>
        <a href="mailto:abdoarchtouy@gmail.com">
          <CgMail  className='h-[30px] w-[30px] ' />
          </a>
      </div>  
      <p className='text-[12px] sm:text-[15px] md:text-[20px]  '>@2024 Designed and developed by Abdellah Archtouy.</p>
    </div>
  )
}

export default footer