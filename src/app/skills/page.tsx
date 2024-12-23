import React from 'react'
import Figma from './skills/figma';
import Html from './skills/Html';
import Css from './skills/Css3';
import Js from './skills/js';
import Reactt from './skills/React';
import Django from './skills/Django';
import Nextjs from './skills/Nextjs';
import Tailwind from './skills/tailwind';
import Bootstap from './skills/bootstrap';
import Postgres from './skills/postgres';
import Ts from './skills/ts';
import Nodejs from './skills/nodejs';
import Socketio from './skills/socketio';
import C from './skills/c';
import CPP from './skills/cpp';
import Git from './skills/git';
import Docker from './skills/docker';


function Skills() {
  return (
    <div className='flex font-montserrat pt-[30px] font-bold text-[30px]  overflow-hidden bg-[#D7D7D7] flex-col justify-around w-screen h-screen   text-black items-center '>
        <h1 className='font-montserrat font-bold text-[30px]'>SKILLS</h1>
        <div className='flex flex-col justify-center gap-[20px] h-[80%] items-center  w-[85%]'>
          <h2 className='font-montserrat font-bold text-[30px] self-start'>USING NOW:</h2>
          <div className='flex flex-wrap xl:overflow-hidden flex-row gap-[10px] lg:gap-[20px] 2xl:gap-[30px]  overflow-scroll overflow-x-hidden overflow-y-auto   scrollbar-thin  p-[1%] scrollbar-track-transparent scrollbar-thumb-transparent  h-[100%] text-black   w-[100%] justify-start   '>
            <Html></Html>
            <Css></Css>
            <Js></Js>
            <Nextjs></Nextjs>
            <Reactt></Reactt>
            <Tailwind></Tailwind>
            <Django></Django>
            <Git></Git>
            <Bootstap></Bootstap>
            <Figma/>
            <Nodejs></Nodejs>
            <Postgres></Postgres>
            <Ts></Ts>
            <Socketio></Socketio>
            <CPP></CPP>
            <C></C>
            <Docker></Docker>
          </div>
        </div>
        {/* <div className='flex flex-col justify-center gap-[20px] h-[30%]  items-center  w-[85%]'>
          <h2 className='font-montserrat font-bold text-[30px] self-start'>OTHER SKILLS:</h2>
          <div className='flex flex-wrap flex-row gap-[10px] lg:gap-[20px] 2xl:gap-[30px] text-black xl:overflow-hidden overflow-scroll overflow-x-hidden  md:border-0  overflow-y-auto scrollbar-thin scrollbar-track-transparent  md:backdrop-brightness-100 border border-[#0000001d]  backdrop-brightness-[99%] p-[1%] scrollbar-thumb-transparent   w-[100%] h-fit  justify-start   '>
            <English/>
            <Frensh/>
            <Arabe/>
          </div>
        </div> */}
      </div>
  )
}

export default Skills