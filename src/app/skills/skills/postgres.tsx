import React from 'react'
import { BiLogoPostgresql } from "react-icons/bi";

function Postgres() {
  return (
    <div className='w-[148px] h-[178px] flex flex-col items-center justify-center gap-[20px]  '>
        <BiLogoPostgresql className='w-[100px] h-auto text-[#0064a5] ' />
        <h2 className='font-montserrat font-normal text-[24px]  '>POSTGRES</h2>
    </div>
  )
}

export default Postgres