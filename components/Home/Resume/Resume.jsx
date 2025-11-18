import { FaCodepen, FaReact } from "react-icons/fa"
import ResumeCard from "./ResumeCard"
import { BsDatabase } from "react-icons/bs"
import { BiBadge } from "react-icons/bi"

const Resume = () => {
  return (
    <div id="resume" className="pt-20 pb-16">
        <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
            {/* Work part */}
            <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">My Work <span className="text-cyan-200">Experience</span></h1>
                <div className="mt-10" data-aos="zoom-in" data-aos-anchor-placement="top-center">
                    <ResumeCard Icon={FaCodepen} role="Frontend Developer" company="Design Digital Studios">
                        I work closely with the development team to bring the company's creative concepts to life on the web.
                    </ResumeCard>
                    <ResumeCard Icon={FaReact} role="Frontend Developer" company="Eliteentrepreneurs">
                        I work closely with the development team to bring the company's creative concepts to life on the web.
                    </ResumeCard>
                    <ResumeCard Icon={BsDatabase} role="Frontend Developer" company="IT Dynamics">
                        I work closely with the development team to bring the company's creative concepts to life on the web.
                    </ResumeCard>
                </div>
            </div>
            
            {/* EDUCATION SECTION */}
            <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white">My <span className="text-cyan-200">Education</span></h1>
                <div className="mt-10" data-aos="zoom-out" data-aos-anchor-placement="top-center" data-aos-delay="300">
                    <ResumeCard Icon={BiBadge} role="Coders Academy" date="Jan 2020 - Jul 2020">
                        Completed structured training in modern and advanced frontend technologies
                    </ResumeCard>
                    <ResumeCard Icon={FaReact} role="Bachelors' Degree in ICT" date="2017 - 2022">
                        Studied the fundamentals of computing, networking, and digital communication systems.
                    </ResumeCard>
                    <ResumeCard Icon={BsDatabase} role="Web dev Bootcamp" date="Mar 2017 - Jun 2017">
                        Completed an intensive bootcamp focused on the fundamentals of web development
                    </ResumeCard>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume