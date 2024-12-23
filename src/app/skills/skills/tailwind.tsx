import React from 'react'
import { RiTailwindCssFill } from "react-icons/ri";

function Tailwind() {
  return (
    <div className=' h-[50px] w-[148px] xl:h-[178px] flex xl:flex-col items-center justify-start gap-[20px]  '>
        <RiTailwindCssFill className='w-[40px] xl:w-[100px] h-auto text-[#2aabad] ' />
        <h2 className='font-montserrat font-normal text-[14px] xl:text-[24px]  '>TAILWIND</h2>
    </div>
  )
}

export default Tailwind