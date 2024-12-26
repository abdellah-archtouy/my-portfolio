import React from "react";
import Figma from "../skills/skills/figma";
import Html from "../skills/skills/Html";
import Css from "../skills/skills/Css3";
import Js from "../skills/skills/js";
import Reactt from "../skills/skills/React";
import Django from "../skills/skills/Django";
import Nextjs from "../skills/skills/Nextjs";
import Tailwind from "../skills/skills/tailwind";
import Bootstap from "../skills/skills/bootstrap";
import Postgres from "../skills/skills/postgres";
import Ts from "../skills/skills/ts";
import Nodejs from "../skills/skills/nodejs";
import Socketio from "../skills/skills/socketio";
import C from "../skills/skills/c";
import CPP from "../skills/skills/cpp";
import Git from "../skills/skills/git";
import Docker from "../skills/skills/docker";

const AutoSlider = () => {
    const skills = [
      { id: 1, component: <Html /> },
      { id: 2, component: <Css /> },
      { id: 3, component: <Js /> },
      { id: 4, component: <Ts /> },
      { id: 5, component: <Reactt /> },
      { id: 6, component: <Nextjs /> },
      { id: 7, component: <Tailwind /> },
      { id: 8, component: <Nodejs /> },
      { id: 9, component: <Django /> },
      { id: 10, component: <Git /> },
      { id: 11, component: <Socketio /> },
      { id: 12, component: <CPP /> },
      { id: 13, component: <C /> },
      { id: 14, component: <Bootstap /> },
      { id: 15, component: <Postgres /> },
      { id: 16, component: <Docker /> },
      { id: 17, component: <Figma /> },
    ];
  
    return (
      <div className="slider-container overflow-hidden relative w-full h-[50px] bg-transparent">
        <div className="slider-track flex gap-[15px] animate-scroll">
          {skills.map((skill) => (
            <div
              key={skill.id} // Unique key for each skill
              className="slider-item text-black whitespace-nowrap"
            >
              {skill.component}
            </div>
          ))}
          {/* Duplicate skills for seamless scrolling */}
          {skills.map((skill) => (
            <div
              key={`duplicate-${skill.id}`} // Unique key for duplicates
              className="slider-item text-black whitespace-nowrap"
            >
              {skill.component}
            </div>
          ))}
        </div>
      </div>
    );
  };

export default AutoSlider;
