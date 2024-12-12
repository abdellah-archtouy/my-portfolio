import React from 'react'
import { SiSocketdotio } from "react-icons/si";

function Socketio() {
  return (
    <div className='w-[148px] h-[178px] flex flex-col items-center justify-center gap-[20px]  '>
        <SiSocketdotio className='w-[100px] h-auto text-black ' />
        <h2 className='font-montserrat font-normal text-[24px]  '>SOCKET.IO</h2>
    </div>
  )
}

export default Socketio