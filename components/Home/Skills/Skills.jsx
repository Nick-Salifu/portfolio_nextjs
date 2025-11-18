"use client"

import { SiJavascript, SiNodedotjs, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si"
import Tilt from "react-parallax-tilt"



const skills = [
    {
        name: 'JavaScript',
        icon: <SiJavascript />,
    },
    {
        name: 'React.js',
        icon: <SiReact />,
    },
    {
        name: 'Next.js',
        icon: <SiNextdotjs />,
    },
    {
        name: 'Node.js',
        icon: <SiNodedotjs />,
    },
    {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss />,
    },
    {
        name: 'Typescript',
        icon: <SiTypescript />,
    },
]


const Skills = () => {
  return (
    <div id="skills" className="text-white py-16">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl text-white font-bold">
            My <span className="text-cyan-300">Skills</span>
        </h1>
        
        <div className="flex flex-wrap justify-center mt-6 gap-10">
            {skills.map((skill, i) => {
                return(
                   <Tilt key={skill.name} scale={1.2} transitionSpeed={400}>
                        <div
                            data-aos="flip-right" data-aos-anchor-placement="top-center"
                            data-aos-delay={i * 100}
                            className="flex flex-col items-center justify-center bg-[#14134145] text-center w-32 h-38 rounded-3xl">
                            <div className="text-5xl mb-4 text-gray-300">
                                {skill.icon}
                            </div>
                            <p className="text-purple-400 mt-1">{skill.name}</p>
                        </div>
                   </Tilt> 
                )
            })}
        </div>
    </div>
  )
}

export default Skills