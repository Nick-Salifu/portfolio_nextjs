"use client"

import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // show and hide scroll to top button
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) setIsVisible(true)
            else setIsVisible(false)
        }   
        window.addEventListener("scroll", toggleVisibility)

        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    // scroll to top function
    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className="fixed bottom-4 right-4 animate-pulse">
            {isVisible && (
                <button className="bg-blue-950/60 cursor-pointer rounded-full text-white h-12 w-12 flex items-center justify-center focus:outline-none" onClick={ScrollToTop}>
                    <FaArrowUp />
                </button>
            )}
        </div>
    )
}
export default ScrollToTop