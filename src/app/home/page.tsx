import '@fontsource/montserrat';
import '@fontsource/raleway';
import '@fontsource/open-sans';
import Image from 'next/image';
import { FaGithub } from "react-icons/fa6";
import { CiAt } from "react-icons/ci";
import { TbBrandLinkedinFilled } from "react-icons/tb";

export default function Home() {
    return(
      <div className=' overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent'>
      <div className='grid bg-black relative overflow-hidden w-screen h-screen items-end xl:bg-[#D7D7D7]'>
      <div className='absolute bg-[#D7D7D7] w-[200%] h-full  top-[70%] rotate-[-10deg]  xl:rotate-12 xl:top-[-50%] xl:h-[250%] xl:right-[70%] xl:bg-black '></div>
        <img className="  w-auto h-[90%]  absolute bottom-[-5%] right-[-10%] xl:left-[10%] xl:h-[80%]  "
         src="/my-picture.png" 
         alt="my image" />
      <div className='absolute bg-[#0000006b] w-[200%] h-full  top-[70%] rotate-[-10deg] xl:hidden '></div>
      <div className='z-0 relative flex  w-full  h-[20%] xl:h-full xl:w-[60%] xl:gap-[5%] lg:pb-[0] xl:pb-[8%] lg:mb-7 xl:mb-0 xl:flex-col  xl:justify-end justify-self-end xl:text-[#000000] pr-[3%] justify-end 2xl:justify-end  '>
        <nav className="xl:flex flex-row h-[10%] absolute top-[60px] right-[10%] 2xl:h-[15%] 2xl:w-[60%] w-[50%] hidden justify-end text-[clamp(0.75rem,0.639vw+0.341rem,1.875rem)]  text-[#0000009e] gap-[10%] justify-self-end m-0 self-end font-bold ">
            <h4 className="w-[30%] h-[clamp(1.875rem,1.674vw+0.804rem,2.813rem)]  text-center flex items-center  justify-center">Home</h4>
            <h4 className="w-[30%] h-[clamp(1.875rem,1.674vw+0.804rem,2.813rem)] whitespace-nowrap text-center flex items-center  justify-center">About me</h4>
            <h4 className="w-[30%] h-[clamp(1.875rem,1.674vw+0.804rem,2.813rem)] text-center flex items-center  justify-center">Skills</h4>
            <h4 className="w-[30%] h-[clamp(1.875rem,1.674vw+0.804rem,2.813rem)] text-center flex items-center  justify-center">Project</h4>
            <h4 className="w-[30%] h-[clamp(1.875rem,1.674vw+0.804rem,2.813rem)] whitespace-nowrap text-center lg:text-[clamp(0.625rem,0.558vw+0.268rem,0.938rem)] flex items-center  px-4  text-[#D7D7D7] bg-[#000000be] rounded-[30px] justify-center ">CONTACT ME</h4>
        </nav>
        <div className='flex-1 flex flex-col  p-[5%] h-full gap-[2%] xl:pl-[10%]  3xl:p-0 2xl:pl-[1%] justify-center lg:gap-[4%]  xl:p-0 xl:h-fit xl:flex-none '>
            <h2 className='leading-none font-raleway pl-[5%]  text-[18px] sm:text-[25px] md:text-[30px] font-bold 2xl:text-[35px] 3xl:text-[250%] xl:text-[40px] '>Hi, I am</h2>
            <h1 className='font-raleway leading-none text-[30px] sm:text-[45px] md:text-[55px] font-bold 2xl:text-[80px] xl:text-[70px] 3xl:text-[450%] '>Abdellah Archtouy</h1>
            <h3 className='text-[#909090] leading-none font-extrabold font-raleway text-[16px] sm:text-[20px] xl:text-[28px] md:text-[23px] ' >Full-stack Developer / UI Designer</h3>
        </div> 
        <div className='xl:flex flex-col hidden  gap-[8%] xl:pl-[20%] 2xl:pl-[10%] 3xl:p-0 2xl:gap-[25px] '>
          <h2 className='leading-none font-raleway text-[20px] sm:text-[25px] md:text-[30px]  2xl:text-[250%] font-bold' >About Me:</h2>
          <p className='font-open-sans font-normal lg:text-[16px]  xl:text-[25px] 2xl:text-[28px] 3xl:text-[220%]  ' >Hi, I&#39;m Abdellah, a passionate Full-Stack Developer and UI Designer currently studying 
            at 1337 (42) School of Programming. I specialize in building intuitive,
             responsive, and visually appealing user interfaces, as well as developing robust back-end
              systems. My technical expertise spans across front-end technologies like React, HTML, CSS,
               and JavaScript, as well as back-end frameworks such as Django and Node.js.</p>
        </div>
        <div className=' xl:absolute bottom-[60px] right-[10%] w-[15%] flex flex-col xl:flex-row justify-around items-center lg:gap-2 xl:pb-[0] pb-3 xl:gap-[10%] xl:p-0 xl:mb-0 xl:self-end '>
          <CiAt className='w-7 h-8 sm:w-8 md:w-9  text-white xl:text-black xl:h-[100%] xl:w-[60px] xl:bg-[#C4C4C4] xl:p-[5px] shadow-xl rounded-sm ' />
          <FaGithub className='w-7 h-8 sm:w-8 md:w-9 text-white xl:text-black xl:h-[100%] xl:w-[60px] xl:bg-[#C4C4C4] xl:p-[5px] shadow-xl rounded-sm ' />
          <TbBrandLinkedinFilled className='w-7 h-8 sm:w-8 md:w-9 font-bold xl:text-black xl:h-[100%] xl:w-[60px] xl:bg-[#C4C4C4] xl:p-[5px] shadow-xl rounded-sm   text-white' />
        </div>
      </div>
      </div> 
      <div className='w-screen h-screen bg-[#D7D7D7] flex flex-col px-[5%]  items-center xl:hidden gap-[10%] justify-center '>
        <h1 className='text-black font-bold font-raleway text-[30px]  '>About Me:</h1>
        <p className='font-open-sans text-black font-normal text-[16px] sm:text-[22px] md:text-[32px] xl:text-[220%] 2xl:text-[220%]  ' >
          Hi, I&#39;m Abdellah, a passionate Full-Stack Developer and UI Designer currently studying 
            at 1337 (42) School of Programming. I specialize in building intuitive,
            responsive, and visually appealing user interfaces, as well as developing robust back-end
              systems. My technical expertise spans across front-end technologies like React, HTML, CSS,
              and JavaScript, as well as back-end frameworks such as Django and Node.js.</p>
      </div>
        
      </div>
    );
}