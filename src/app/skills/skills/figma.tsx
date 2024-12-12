import React from 'react'

function Figma() {
  return (
    <div className='w-[148px] h-[178px] flex flex-col items-center justify-center gap-[20px]  '>
        <div className='w-[60px] h-fit  flex flex-wrap justify-start items-center'>
            <div className='w-[30px] h-[30px] bg-[#F24E1E] rounded-l-full '></div>
            <div className='w-[30px] h-[30px]  bg-[#FF7262] rounded-r-full'></div>
            <div className='w-[30px] h-[30px]  bg-[#A259FF] rounded-l-full'></div>
            <div className='w-[30px] h-[30px]  bg-[#1ABCFE] rounded-full'></div>
            <div className='w-[30px] h-[30px]  bg-[#0ACF83] rounded-l-full rounded-br-full'></div>
        </div>
        <h2 className='font-montserrat font-normal text-[24px]  '>FIGMA</h2>
    </div>
  )
}

export default Figma