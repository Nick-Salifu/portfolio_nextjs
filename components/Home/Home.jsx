"use client"

import Blog from "./Blog/Blog"
import ClientReview from "./ClientReview/ClientReview"
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"
import Hero from "./Hero/Hero"
import Projects from "./Projects/Projects"
import Resume from "./Resume/Resume"
import Services from "./Services/Services"
import Skills from "./Skills/Skills"
import Aos from "aos"
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(() => {
    const initAos = async () => {
      await import("aos");
      Aos.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom"
      })
    };
    initAos()
  }, [])

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
      <Footer />
    </div>
  )
}

export default Home