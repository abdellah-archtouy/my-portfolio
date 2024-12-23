import React from 'react'
import { BiLogoPostgresql } from "react-icons/bi";

function Postgres() {
  return (
    <div className=' h-[50px] w-[148px] xl:h-[178px] flex xl:flex-col items-center justify-start gap-[20px]  '>
        <BiLogoPostgresql className='w-[40px] xl:w-[100px] h-auto text-[#0064a5] ' />
        <h2 className='font-montserrat font-normal text-[14px] xl:text-[24px]  '>POSTGRES</h2>
    </div>
  )
}

export default Postgres