import React from 'react'
import { FaHtml5 } from "react-icons/fa";

function Html() {
  return (
    <div className=' h-[50px] w-[148px] xl:h-[178px] flex xl:flex-col items-center justify-start gap-[20px]  '>
        <FaHtml5 className='w-[40px] xl:w-[80px] h-auto text-[#FF5722] bg-transparent ' />
        <h2 className='font-montserrat font-normal text-[14px] xl:text-[24px]  '>HTML5</h2>
    </div>
  )
}

export default Html