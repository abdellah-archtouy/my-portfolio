import React from 'react'
import { FaDocker } from "react-icons/fa";


function Docker() {
  return (
    <div className='w-[148px] h-[178px] flex flex-col items-center justify-center gap-[20px]  '>
        <FaDocker className='w-[100px] h-auto text-[#0db7ed] bg-transparent ' />
        <h2 className='font-montserrat font-normal text-[24px]  '>DOCKER</h2>
    </div>
  )
}

export default Docker