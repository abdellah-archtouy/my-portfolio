import Home from "./home/page";
import Skills from "./skills/page";
import Project from "./project/page";
import Footer from "./footer";


export default function Portfolio() {
  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden scrollbar-none">
      <Home/>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  );
}
