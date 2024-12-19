import React from 'react'
import Image from 'next/image';

function Project() {
  return (
    <div className='text-black bg-[#D7D7D7] overflow-x-hidden scrollbar-none overflow-y-auto gap-10  pb-[30px] w-screen  h-fit flex   font-montserrat pt-3 2xl:pt-[60px] font-bold text-[30px] justify-stretch flex-col items-center '>
        <h1 className='font-montserrat  font-bold text-[30px] leading-none'>
            Project
        </h1>
        <div className='flex  flex-col  flex-1 items-center gap-[50px]'>
            <div className='flex flex-col gap-[50px]  h-fit items-center  w-[80%] xl:flex-row '>
              <Image className=' h-[350px] w-auto rounded-[30px] ' 
              width={200}
              height={200}
              src="/1337.jpeg"
              alt='1337 pic'
              ></Image>
              <p className='text-[32px] text-start font-open-sans font-semibold text-[#000000c1]'>
                Hello! I'm Abdellah, a dedicated Full-Stack Developer and UI Designer currently 
                studying at the 1337 (42 Network) School of Programming. I specialize in building
                 seamless, responsive, and intuitive user interfaces while also developing efficient
                  and scalable back-end solutions. My focus is on delivering not just functional 
                  applications, but also engaging and visually appealing experiences.</p>
            </div>
            <div className='w-[80%]'>
              <p className=' text-[32px] text-start font-open-sans font-normal text-[#000000c1]'>
              At 1337 (42), I'm strengthening my problem-solving skills and expanding my software 
              development knowledge in a collaborative environment. I’m always eager to learn new 
              technologies and improve my design skills to create smooth user experiences. Whether
              coding back-end systems or designing interfaces, I focus on delivering high-quality,
                scalable solutions that meet both user needs and business goals.
              </p>
            </div>
            <div className='flex flex-col gap-[50px] justify-center  h-fit items-center  w-[80%] xl:flex-row '>
              <Image className=' h-[450px] w-auto rounded-[20px] ' 
              width={200}
              height={200} 
              src='/netp.png' alt='NetPractice'/>
              <div className='flex flex-col gap-[20px]  h-fit items-center'>
                <h2 className='font-open-sans text-[40px] font-semibold '>NetPractice</h2>
                <p className='text-[30px] text-start font-open-sans font-normal text-[#000000c1] '>
                  NetPractice is an introductory networking project designed to help students
                   understand fundamental concepts of computer networks, such as IP addressing, 
                   subnetting, routing, and network troubleshooting. The goal is to solve practical 
                   scenarios involving network configurations and connectivity, developing both 
                   theoretical knowledge and problem-solving skills in network design and analysis.</p>
              </div>
            </div>
            <div className='flex flex-col gap-[50px] justify-center  h-fit items-center  w-[80%] xl:flex-row '>
              <div className='flex flex-col gap-[20px]  h-fit items-center'>
                <h2 className='font-open-sans text-[40px] font-semibold '>Ft_Irc</h2>
                <p className='text-[30px] text-start font-open-sans font-normal text-[#000000c1] '>
                ft_irc is a system-level programming project at 1337 (42) that challenges students 
                to create a fully functional IRC (Internet Relay Chat) server. The project involves 
                implementing the IRC protocol (RFC 2812), handling client connections, managing 
                channels, and supporting basic commands. It helps students deepen their understanding 
                of networking, socket programming, and server-client architecture.</p>
              </div>
              <Image className=' h-[450px] w-auto  ' 
              width={200}
              height={200} 
              src='/irc.png' alt='ft_irc'/>
            </div>
            <div className='flex flex-col gap-[50px] justify-center  h-fit items-center  w-[80%] xl:flex-row '>
              <Image className=' h-[450px] w-auto  ' 
              width={200}
              height={200} 
              src='/incep.png' alt='inception'/>
              <div className='flex flex-col gap-[20px]  h-fit items-center'>
                <h2 className='font-open-sans text-[40px] font-semibold '>Inception</h2>
                <p className='text-[30px] text-start font-open-sans font-normal text-[#000000c1] '>
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