import React from 'react'
import Image from 'next/image';

function Project() {
  return (
    <div className='min-h-screen text-black bg-[#D7D7D7]   w-screen gap-[20px]  h-fit flex font-montserrat pt-[60px] font-bold text-[30px]  flex-col  items-center '>
        <h1 className='font-montserrat font-bold text-[30px] leading-none'>
            Project
        </h1>
        <div className='flex flex-col items-center'>
            <div className='flex flex-col gap-5 items-center border  w-[80%] xl:flex-row '>
              <Image className='w-full h-auto ' 
              width={200}
              height={200}
              src="/1337.jpeg"
              alt='1337 pic'
              ></Image>
              <p className='text-[14px] text-center font-open-sans font-normal text-[#000000c1] '>At 1337, I followed the Common Core, which is a rigorous and immersive software development program. 
                It gave me practical experience in C programming, algorithms, Unix systems, as well as familiarized me
                 with tools like Git for version control. I learned how to work as a team, break large projects into subproblems, 
                 and take ownership over my own education in the peer-to-peer environment. I learnt software engineering technology 
                 fundamentals through real-world projects, equipping me to tackle advanced challenges and thrive in the tech industry.</p>
            </div>
        </div>
    </div>
  )
}

export default Project