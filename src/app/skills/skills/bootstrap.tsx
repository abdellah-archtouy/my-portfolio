import React from 'react'
import { DiBootstrap } from "react-icons/di";

function Bootstap() {
  return (
    <div className=' h-[50px] w-[148px] xl:h-[178px] flex xl:flex-col items-center justify-start gap-[20px]  '>
        <DiBootstrap className='w-[40px] xl:w-[100px]  h-auto text-[#563D7C] ' />
        <h2 className='font-montserrat font-normal text-[14px] xl:text-[24px]  '>BOOTSTRAP</h2>
    </div>
  )
}

export default Bootstap