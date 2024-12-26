import React from 'react'

interface FooterProps {
  changeIsVisibleTrue: () => void;
  changeIsVisibleFalse: () => void;
}

function Navbar({changeIsVisibleTrue, changeIsVisibleFalse} : FooterProps) {
  return (
    <nav className="z-10 absolute flex items-center justify-end h-[60px] w-full   bg-black pr-[2%]">
            <a href='#home' onClick={() => { changeIsVisibleTrue()}} className="w-[8%] hover:text-[#ffffff86]  h-[clamp(1.875rem,1.674vw+0.804rem,2.813rem)]  text-center flex items-center  justify-center">Home</a>
            {/* <a href='#' className="w-[8%] hover:text-[#ffffff86]  h-[clamp(1.875rem,1.674vw+0.804rem,2.813rem)] whitespace-nowrap text-center flex items-center  justify-center">About me</a> */}
            <a href='#skills' onClick={() => { changeIsVisibleFalse()}} className="w-[8%] hover:text-[#ffffff86]  h-[clamp(1.875rem,1.674vw+0.804rem,2.813rem)] text-center flex items-center  justify-center">Skills</a>
            <a href='#project' onClick={() => { changeIsVisibleFalse()}} className="w-[8%] hover:text-[#ffffff86]  h-[clamp(1.875rem,1.674vw+0.804rem,2.813rem)] text-center flex items-center  justify-center">Project</a>
            <a href='mailto:abdoarchtouy@gmail.com' className="w-[8%] h-[clamp(1.875rem,1.674vw+0.804rem,2.813rem)] whitespace-nowrap text-center lg:text-[clamp(0.625rem,0.558vw+0.268rem,0.938rem)] flex items-center  px-4  text-[#000000] hover:bg-[#ffffff86] bg-[#FFFFFF] rounded-[30px] justify-center ">
              CONTACT ME
            </a>
    </nav>
  )
}

export default Navbar