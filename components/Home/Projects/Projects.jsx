import Image from "next/image"
import { BsArrowBarRight } from "react-icons/bs"


const Projects = () => {
  return (
    <div id="works" className="py-16">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl text-white font-bold">
            A small selection of recent 
            <span className="text-cyan-300">projects</span>
        </h1>
        <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
            {/* First Project */}
            <div>
                <Image 
                    data-aos="fade-up" 
                    data-aos-anchor-placement="top-center" 
                    data-aos-delay="0" 
                    src="/images/spike.png" 
                    alt="image" 
                    width={800} 
                    height={650} 
                    className="rounded-lg" 
                />
                <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">Property Listing Website</h1>
                <a 
                    href="https://spike-properties.vercel.app"
                    target="_blank"
                    className="px-3 py-1 mt-2 bg-blue-500 rounded-full text-gray-300 hover:bg-blue-600 flex items-center space-x-2 transition-all duration-300 w-20"
                >
                    Live
                    <BsArrowBarRight className="w-5 h-5 text-white font-bold" />
                </a>
            </div>
            {/* Second Project */}
            <div>
                <Image 
                    data-aos="fade-up" 
                    data-aos-anchor-placement="top-center" 
                    data-aos-delay="100" 
                    src="/images/spike.png" 
                    alt="image" 
                    width={800} 
                    height={650} 
                    className="rounded-lg" 
                />
                <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">Property Listing Website</h1>
                <a 
                    href="https://spike-properties.vercel.app"
                    target="_blank"
                    className="px-3 py-1 mt-2 bg-blue-500 rounded-full text-gray-300 hover:bg-blue-600 flex items-center space-x-2 transition-all duration-300 w-20"
                >
                    Live
                    <BsArrowBarRight className="w-5 h-5 text-white font-bold" />
                </a>
            </div>
            {/* Third Project */}
            <div>
                <Image 
                    data-aos="fade-up" 
                    data-aos-anchor-placement="top-center" 
                    data-aos-delay="200" 
                    src="/images/spike.png" 
                    alt="image" 
                    width={800} 
                    height={650} 
                    className="rounded-lg" 
                />
                <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">Property Listing Website</h1>
                <a 
                    href="https://spike-properties.vercel.app"
                    target="_blank"
                    className="px-3 py-1 mt-2 bg-blue-500 rounded-full text-gray-300 hover:bg-blue-600 flex items-center space-x-2 transition-all duration-300 w-20"
                >
                    Live
                    <BsArrowBarRight className="w-5 h-5 text-white font-bold" />
                </a>
            </div>
            {/* Fourth Project */}
            <div>
                <Image 
                    data-aos="fade-up" 
                    data-aos-anchor-placement="top-center" 
                    data-aos-delay="300" 
                    src="/images/portfolio.png" 
                    alt="image" 
                    width={800} 
                    height={650} 
                    className="rounded-lg" 
                />
                <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white">My Portfolio</h1>
                <a 
                    href="https://spike-properties.vercel.app"
                    target="_blank"
                    className="px-3 py-1 mt-2 bg-blue-500 rounded-full text-gray-300 hover:bg-blue-600 flex items-center space-x-2 transition-all duration-300 w-20"
                >
                    Live
                    <BsArrowBarRight className="w-5 h-5 text-white font-bold" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Projects