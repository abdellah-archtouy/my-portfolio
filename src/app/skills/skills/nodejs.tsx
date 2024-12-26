import React from 'react'
import { LiaNodeJs } from "react-icons/lia";

function nodejs() {
  return (
    <div className=' h-[50px] w-fit xl:w-[148px] xl:h-[178px] flex xl:flex-col items-center justify-start gap-[10px] xl:gap-[20px] '>
        <LiaNodeJs className='w-[40px] xl:w-[100px] h-auto text-[#539E43] ' />
        <h2 className='font-montserrat font-normal text-[14px] xl:text-[24px]  '>NODE JS</h2>
    </div>
  )
}

export default nodejs