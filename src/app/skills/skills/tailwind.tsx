import React from 'react'
import { RiTailwindCssFill } from "react-icons/ri";

function Tailwind() {
  return (
    <div className='w-[148px] h-[178px] flex flex-col items-center justify-center gap-[20px]  '>
        <RiTailwindCssFill className='w-[100px] h-auto text-[#2aabad] ' />
        <h2 className='font-montserrat font-normal text-[24px]  '>TAILWIND</h2>
    </div>
  )
}

export default Tailwind