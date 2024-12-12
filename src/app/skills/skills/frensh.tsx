import Image from 'next/image';
import React from 'react'

function Frensh() {
  return (
    <div className='w-[148px] h-[178px] flex flex-col items-center justify-center gap-[20px]  '>
        <Image src="/fre.png" 
        width={100}
        height={100}
        alt="french" />
        <h2 className='font-montserrat font-normal text-[24px]  '>FRENCH</h2>
    </div>
  )
}

export default Frensh