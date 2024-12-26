"use client";

import { useEffect, useState } from "react";
import Navbar from "./navbar"; // Assuming you have a Navbar component
import { usePathname } from "next/navigation"; // Correct hook for path in app directory
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isHomeVisible, setIsHomeVisible] = useState(false); // State to track if "home" section is visible
  const changeIsVisibleTrue = () => {
    console.log("changeIsVisible");
    setIsHomeVisible(true);
  }
  const changeIsVisibleFalse = () => {
    console.log("changeIsVisible");
    setIsHomeVisible(false);
  }
  useEffect(() => {
    
    const homeSection = document.getElementById("home"); // Get the home section

    const updateVisibility = () => {
      if (!homeSection) return;

      const rect = homeSection.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
      setIsHomeVisible(isVisible);
    };

    // Handle intersection observer for dynamic scrolling
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === homeSection) {
            setIsHomeVisible(entry.isIntersecting);
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // 50% of the section should be visible before considering it
      }
    );

    if (homeSection) {
      observer.observe(homeSection);
      updateVisibility(); // Check visibility on mount
    }

    // Handle hash-based navigation (e.g., http://localhost:3000/#home)
    window.addEventListener("hashchange", updateVisibility);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", updateVisibility); // Clean up
    };
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full overflow-hidden`}>
        <div className={`transition-transform duration-500 hidden lg:flex ${
          isHomeVisible ? "smooth-slide-show" : "smooth-slide"
        }`}>

          {!isHomeVisible && <Navbar changeIsVisibleTrue={changeIsVisibleTrue} changeIsVisibleFalse={changeIsVisibleFalse} />}
        </div>

        {children}
      </body>
    </html>
  );
}
