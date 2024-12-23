import React from 'react'
import Image from 'next/image';

function Project() {
  return (
    <div className='text-black  bg-[#D7D7D7] overflow-x-hidden scrollbar-none overflow-y-auto gap-10  pb-[30px] w-screen  h-fit flex   font-montserrat pt-3 2xl:pt-[60px] font-bold text-[30px] justify-stretch flex-col items-center '>
        <h1 className='font-montserrat  font-bold text-[30px] leading-none'>
            Project
        </h1>
        <div className='flex flex-col  flex-1 items-center gap-[50px]'>
            <div className='relative w-[90%] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[700px] rounded-[30px]'>
              <Image className='  rounded-[30px] ' 
              layout="fill" 
              objectFit="cover"
              quality={100} 
              src="/13372.png"
              alt='1337 pic'
              ></Image>
              </div>
            <div className='flex  h-fit items-center  w-[80%] flex-col gap-3'>
              <p className='text-start font-open-sans font-normal text-[#000000c1] text-[16px] sm:text-[22px] md:text-[28px] '>
                Hello! I&#39;m Abdellah, a dedicated Full-Stack Developer and UI Designer currently 
                studying at the 1337 (42 Network) School of Programming. I specialize in building
                 seamless, responsive, and intuitive user interfaces while also developing efficient
                  and scalable back-end solutions. My focus is on delivering not just functional 
                  applications, but also engaging and visually appealing experiences.</p>
              <p className=' text-start font-open-sans font-normal text-[#000000c1] text-[16px] sm:text-[22px] md:text-[28px] '>
              At 1337 (42), I&#39;m strengthening my problem-solving skills and expanding my software 
              development knowledge in a collaborative environment. I&#39;m always eager to learn new 
              technologies and improve my design skills to create smooth user experiences. Whether
              coding back-end systems or designing interfaces, I focus on delivering high-quality,
                scalable solutions that meet both user needs and business goals.
              </p>
            </div>
            <div className='flex flex-col gap-[50px] justify-center  h-fit items-center  w-[80%] xl:flex-row '>
              <Image className=' w-full h-auto lg:h-[450px] lg:w-auto rounded-[20px] ' 
              width={200}
              height={200} 
              src='/netp.png' alt='NetPractice'/>
              <div className='flex flex-col gap-[20px]  h-fit items-center'>
                <h2 className='font-open-sans text-[40px] font-semibold '>NetPractice</h2>
                <p className=' text-start font-open-sans font-normal text-[#000000c1] text-[16px] sm:text-[22px] md:text-[28px] '>
                  NetPractice is an introductory networking project designed to help students
                   understand fundamental concepts of computer networks, such as IP addressing, 
                   subnetting, routing, and network troubleshooting. The goal is to solve practical 
                   scenarios involving network configurations and connectivity, developing both 
                   theoretical knowledge and problem-solving skills in network design and analysis.</p>
              </div>
            </div>
            <div className='flex flex-col-reverse gap-[50px] justify-center  h-fit items-center  w-[80%] xl:flex-row '>
              <div className='flex flex-col gap-[20px]  h-fit items-center'>
                <h2 className='font-open-sans text-[40px] font-semibold '>Ft_Irc</h2>
                <p className=' text-start font-open-sans font-normal text-[#000000c1] text-[16px] sm:text-[22px] md:text-[28px] '>
                ft_irc is a system-level programming project at 1337 (42) that challenges students 
                to create a fully functional IRC (Internet Relay Chat) server. The project involves 
                implementing the IRC protocol (RFC 2812), handling client connections, managing 
                channels, and supporting basic commands. It helps students deepen their understanding 
                of networking, socket programming, and server-client architecture.</p>
              </div>
              <Image className=' w-full h-auto lg:h-[450px] lg:w-auto  ' 
              width={200}
              height={200} 
              src='/irc.png' alt='ft_irc'/>
            </div>
            <div className='flex flex-col gap-[50px] justify-center  h-fit items-center  w-[80%] xl:flex-row '>
              <Image className=' w-full h-auto lg:h-[450px] lg:w-auto  ' 
              width={200}
              height={200} 
              src='/incep.png' alt='inception'/>
              <div className='flex flex-col gap-[20px]  h-fit items-center'>
                <h2 className='font-open-sans text-[40px] font-semibold '>Inception</h2>
                <p className=' text-start font-open-sans font-normal text-[#000000c1] text-[16px] sm:text-[22px] md:text-[28px] '>
                Inception is a system administration and virtualization project at 1337 (42) that 
                introduces students to containerization using Docker. The goal is to set up a 
                multi-container architecture with Docker Compose, hosting services like a web 
                server, database, and WordPress site. Students learn to configure Docker images,
                 manage volumes, networks, and ensure proper isolation and communication between containers.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Project