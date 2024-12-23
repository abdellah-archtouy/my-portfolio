import React from 'react'

function Figma() {
  return (
    <div className=' h-[50px] w-[148px] xl:h-[178px] flex xl:flex-col items-center justify-start gap-[20px]  '>
        <div className='w-[20px] xl:w-[60px] h-fit  flex flex-wrap justify-start items-center'>
            <div className='w-[10px] xl:w-[30px] h-[10px] xl:h-[30px] bg-[#F24E1E] rounded-l-full '></div>
            <div className='w-[10px] xl:w-[30px] h-[10px] xl:h-[30px]  bg-[#FF7262] rounded-r-full'></div>
            <div className='w-[10px] xl:w-[30px] h-[10px] xl:h-[30px]  bg-[#A259FF] rounded-l-full'></div>
            <div className='w-[10px] xl:w-[30px] h-[10px] xl:h-[30px]  bg-[#1ABCFE] rounded-full'></div>
            <div className='w-[10px] xl:w-[30px] h-[10px] xl:h-[30px]  bg-[#0ACF83] rounded-l-full rounded-br-full'></div>
        </div>
        <h2 className='font-montserrat font-normal text-[14px] xl:text-[24px]  '>FIGMA</h2>
    </div>
  )
}

export default Figma