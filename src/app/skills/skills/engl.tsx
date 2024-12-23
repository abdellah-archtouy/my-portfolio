import Image from 'next/image';
import React from 'react'

function English() {
  return (
    <div className=' h-[50px] w-[148px] xl:h-[178px] flex xl:flex-col items-center justify-start gap-[20px]  '>
        <Image src="/eng.png"
         width={100}
         height={100}
        alt="french" />
        <h2 className='font-montserrat font-normal text-[14px] xl:text-[24px]  '>ENGLISH</h2>
    </div>
  )
}

export default English