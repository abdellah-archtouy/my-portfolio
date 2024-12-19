import React from 'react'
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CgMail } from "react-icons/cg";


function footer() {
  return (
    <div className='bg-black text-white h-[220px] w-screen gap-5 flex flex-col pt-[10px] justify-center items-center'>
      <MdKeyboardDoubleArrowUp/>
      <p className='font-montserrat font-bold text-[15px] '>BACK TO TOP</p>
      <div className='flex gap-3 justify-around w-[100px]'>
        <FaGithub className='h-[30px] w-[30px] ' />
        <CiLinkedin  className='h-[30px] w-[30px] ' />
        <CgMail  className='h-[30px] w-[30px] ' />
      </div>  
      <p className='text-[18px]  '>@2024 Abdellah Archtouy All Rights Reserved.</p>
    </div>
  )
}

export default footer