"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation"; // Correct hook for path in app directory
import Home from "./home/page";
import Skills from "./skills/page";
import Project from "./project/page";
import Footer from "./footer";


export default function Portfolio() {
  const pathname = usePathname();
  const scrollContainerRef = useRef<HTMLDivElement>(null); // Reference for the scrollable container

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    
    // Create a new IntersectionObserver to observe each section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;

            // Only update the URL hash if it's different from the current one
            if (sectionId && !pathname.includes(sectionId)) {
              window.history.replaceState(null, "", `#${sectionId}`);
            }
          }
        });
      },
      {
        root: scrollContainerRef.current, // Observe within the scrollable container
        threshold: 0.5, // Section will be considered "visible" when 50% of it is in view
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

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
      <section id="project">
        <Project />
      </section>
      <section id="footer">
        <Footer scrollToTop={scrollToTop} />  
      </section>
    </div>
  );
}
