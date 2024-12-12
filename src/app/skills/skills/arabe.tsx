import Image from 'next/image';
import React from 'react'

function Arabe() {
  return (
    <div className='w-[148px] h-[178px] flex flex-col items-center justify-center gap-[20px]  '>
        <Image 
        src="/ara.png"
        alt="french" 
         width={100}
         height={100}
        />
        <h2 className='font-montserrat font-normal text-[24px]  '>ARABIC</h2>
    </div>
  )
}

export default Arabe