import Image from 'next/image';
import React from 'react'

function Arabe() {
  return (
    <div className=' h-[50px] w-fit xl:w-[148px] xl:h-[178px] flex xl:flex-col items-center justify-start gap-[10px] xl:gap-[20px] '>
        <Image 
        src="/ara.png"
        alt="french" 
         width={100}
         height={100}
        />
        <h2 className='font-montserrat font-normal text-[14px] xl:text-[24px]  '>ARABIC</h2>
    </div>
  )
}

export default Arabe