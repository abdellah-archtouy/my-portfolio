import React from 'react'
import { SiSocketdotio } from "react-icons/si";

function Socketio() {
  return (
    <div className=' h-[50px] w-[148px] xl:h-[178px] flex xl:flex-col items-center justify-start gap-[20px]  '>
        <SiSocketdotio className='w-[40px] xl:w-[100px] h-auto text-black ' />
        <h2 className='font-montserrat font-normal text-[14px] xl:text-[24px]  '>SOCKET.IO</h2>
    </div>
  )
}

export default Socketio