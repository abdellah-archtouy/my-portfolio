import React from 'react'
import { BiLogoTypescript } from "react-icons/bi";

function Ts() {
  return (
    <div className=' h-[50px] w-fit xl:w-[148px] xl:h-[178px] flex xl:flex-col items-center justify-start gap-[10px] xl:gap-[20px] '>
        <BiLogoTypescript className='w-[40px] xl:w-[100px] h-auto text-[#007ACC] ' />
        <h2 className='font-montserrat font-normal text-[14px] xl:text-[24px]  '>TYPESCRIPT</h2>
    </div>
  )
}

export default Ts