import React from 'react'
import { FaDocker } from "react-icons/fa";


function Docker() {
  return (
    <div className=' h-[50px] w-[148px] xl:h-[178px] flex xl:flex-col items-center justify-start gap-[20px]  '>
        <FaDocker className='w-[40px] xl:w-[100px] h-auto text-[#0db7ed] bg-transparent ' />
        <h2 className='font-montserrat font-normal text-[14px] xl:text-[24px]  '>DOCKER</h2>
    </div>
  )
}

export default Docker