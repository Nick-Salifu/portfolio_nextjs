"use client"

import { NavLinks } from "@/constant/constant"
import Link from "next/link"
import { FaCode } from "react-icons/fa"
import { BiDownload } from "react-icons/bi"
import { HiBars3BottomRight } from "react-icons/hi2"
import { useEffect, useState } from "react"


const Nav = ({openNav}) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if(window.scrollY >= 90) setNavBg(true)
      if(window.scrollY < 90) setNavBg(false)
    }
    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <div className={`w-full h-[12vh] ${navBg ? 'bg-[#0f142ed9] shadow-md' : 'fixed'} fixed transition-all duration-200 z-[10000]`}>
        <div className="flex items-center justify-between h-full w-[90%] mx-auto">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex flex-col items-center justify-center">
              <FaCode className="w-5 h-5 text-black" />
            </div>
            <h1 className="hidden sm:block md:text-2xl text-white font-bold text-xl">Nick</h1>
          </div>
          
          {/* NavLinks */}
          <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => {
              return(
                <Link key={link.id} href={link.url} className="text-white font-medium hover:text-cyan-300 transition-all duration-200">
                  <p>{link.label}</p>
                </Link>
              )
            })}
          </div>
          
          {/* Button */}
          <div className="flex items-center space-x-4">
            <button className="px-8 py-3.5 text-white text-sm rounded-lg bg-blue-800 hover:bg-blue-900 flex items-center space-x-2 transition-all duration-300 cursor-pointer">
              <BiDownload className="w-5 h-5" />
              <span>Download CV</span>
            </button>
            
            {/* Hamburger Menu */}
            <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden" />
          </div>
        </div>
    </div>
  )
}

export default Nav