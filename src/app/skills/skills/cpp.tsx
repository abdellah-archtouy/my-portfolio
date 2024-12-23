import Image from 'next/image';
import React from 'react'

function CPP() {
  return (
    <div className=' h-[50px] w-[148px] xl:h-[178px] flex xl:flex-col items-center justify-start gap-[20px]  '>
        <Image className='w-[40px] xl:w-[100px] h-auto  '        
        src="/cpp.png" 
         width={100}
         height={100}
        alt="c icone" />
        <h2 className='font-montserrat font-normal text-[14px] xl:text-[24px]  '>C++</h2>
    </div>
  )
}

export default CPP