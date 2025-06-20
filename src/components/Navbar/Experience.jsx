import React from 'react'
import {FaCss3,FaFigma,FaHtml5,FaJs,FaReact} from "react-icons/fa";
import{SiRedis} from "react-icons/si";
import{FaGoogle} from "react-icons/fa";
import{SiMongodb} from "react-icons/si";

const Experience = () => {
  return (
    <div id="experience" className='p-10 md:p-24'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Experience</h1>
        <div className='flex flex-wrap items-center justify-around'>
            <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
             <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaHtml5 color="#E34F26" size={50}/>
             </span>
             <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaCss3 color="#1572b6" size={50}/>
             </span>
             <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaReact color="#61DAFB" size={50}/>
             </span>
             <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaJs color="#E34F26" size={50}/>
             </span>
             <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <FaFigma color="#F24E1E" size={50}/>
             </span>
             <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                <SiMongodb color="#47A248" size={50}/>
             </span>
              
            </div>

<div>
            <div className='flex gap-10 bg-slate-800 bg-opacity-45 mt-4 rounded-lg p-4 items-center'> 
            <span className='text-white '> 
                <h2 className='leading-tight font-bold text-yellow-200'>Web Developer Intern at SkillCraft Technology (Remote) </h2>
                <p className='text-sm leading-tight font-thin'>June,2024 to July,2024</p>
                <ul className='text-sm p-2'> <li> -Worked as Frontend developer</li></ul>
            </span>
            </div>
            <div className='flex gap-10 bg-slate-800 bg-opacity-45 mt-4 rounded-lg p-4 items-center'> 
            <span className='text-white '> 
                <h2 className='leading-tight font-bold text-yellow-200'>Graphic Design Intern at MREI (On-site) </h2>
                <p className='text-sm leading-tight font-thin'>September,2024 to December,2024</p>
                <ul className='text-sm p-2'> <li> -Worked as web designer,graphics and banners designing</li></ul>
            </span>
            </div>
            <div className='flex gap-10 bg-slate-800 bg-opacity-45 mt-4 rounded-lg p-4 items-center'> 
            <span className='text-white '> 
                <h2 className='leading-tight font-bold text-yellow-200'>Operation Executive Intern at Dfree Novelish (Remote) </h2>
                <p className='text-sm leading-tight font-thin'>June,2025 to present</p>
                <ul className='text-sm p-2'> <li> -currently working as software developer ,social media management</li></ul>
            </span>
            </div>
</div>           
        </div>
    </div>
  )
}

export default Experience
