"use client"

import { useEffect } from "react"
import Blog from "./Blog/Blog"
import ClientReview from "./ClientReview/ClientReview"
import Contact from "./Contact/Contact"
import Hero from "./Hero/Hero"
import Projects from "./Projects/Projects"
import Resume from "./Resume/Resume"
import Services from "./Services/Services"
import Skills from "./Skills/Skills"
import AOS from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
 useEffect(() => {
    const initAOS = async () => {
      await import('aos')
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom"
      });
    };
    initAOS();
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <Resume />
      <Projects />
      <Skills />
      <ClientReview />
      <Blog />
      <Contact />
    </div>
  )
}

export default Home