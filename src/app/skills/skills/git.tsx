import React from 'react'
import { FaGitAlt } from "react-icons/fa6";

function Git() {
  return (
    <div className=' h-[50px] w-fit xl:w-[148px] xl:h-[178px] flex xl:flex-col items-center justify-start gap-[10px] xl:gap-[20px] '>
        <FaGitAlt className='w-[40px] xl:w-[100px] h-auto text-[#F1502F] ' />
        <h2 className='font-montserrat font-normal text-[14px] xl:text-[24px]  '>GIT</h2>
    </div>
  )
}

export default Git