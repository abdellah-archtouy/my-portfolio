import Image from 'next/image';
import React from 'react'

function CPP() {
  return (
    <div className='w-[148px] h-[178px] flex flex-col items-center justify-center gap-[20px]  '>
        <Image src="/cpp.png" 
         width={100}
         height={100}
        alt="c icone" />
        <h2 className='font-montserrat font-normal text-[24px]  '>C++</h2>
    </div>
  )
}

export default CPP