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
    <Html />,
    <Css />,
    <Js />,
    <Ts />,
    <Reactt />,
    <Nextjs />,
    <Tailwind />,
    <Nodejs />,
    <Django />,
    <Git />,
    <Socketio />,
    <CPP />,
    <C />,
    <Bootstap />,
    <Postgres />,
    <Docker />,
    <Figma />,
  ];

  return (
    <div className="slider-container">
      <div className="slider-track text-black">
        {/* Render the skills twice for seamless looping */}
        {[...skills, ...skills].map((skill, index) => (
          <div key={index} className="slider-item">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
