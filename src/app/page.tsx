import Home from "./home/page";
import Skills from "./skills/page";

export default function Portfolio() {
  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden scrollbar-none">
      <Home/>
      <Skills/>
    </div>
  );
}
