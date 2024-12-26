"use client";

import {useRef } from "react";
// import { usePathname } from "next/navigation"; // Correct hook for path in app directory
import Home from "./home/page";
import Skills from "./skills/page";
import Project from "./project/page";
import Image from 'next/image';
import Footer from "./footer";


export default function Portfolio() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const sections = document.querySelectorAll("section");

  //   // Create an IntersectionObserver to observe section visibility
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           const sectionId = entry.target.id;
  //           // Update the URL hash when the section is visible
  //           window.history.replaceState(null, "", `#${sectionId}`);
  //         }
  //       });
  //     },
  //     {
  //       root: scrollContainerRef.current, // Observe within the scrollable container
  //       threshold: 0.5, // 50% visibility to trigger
  //     }
  //   );

  //   sections.forEach((section) => observer.observe(section));

  //   return () => observer.disconnect(); // Cleanup observer on component unmount
  // }, []);

  const scrollToTop = () => {
    // Scroll the container instead of the window
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scrolling effect
      });
    }
  };

  return (
    <div
      ref={scrollContainerRef} // Assign the ref to the scrollable container
      className="h-screen overflow-y-auto overflow-x-hidden scrollbar-none scroll-smooth"
    >
      <section id="home">
        <Home />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section>
        <div className="flex flex-col text-black  bg-[#D7D7D7] pt-[60px] pb-[60px] flex-1 items-center gap-[50px]">

            <div className='relative w-[85%] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[700px] rounded-[30px]'>
              <Image className=' w-[100%] h-[100%] rounded-[30px] ' 
              width={1000}
              height={700} 
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
        </div>
      </section>
      <section id="project"  >
        <Project/>
      </section>
      <section id="footer">
        <Footer scrollToTop={scrollToTop} />  
      </section>
    </div>
  );
}
