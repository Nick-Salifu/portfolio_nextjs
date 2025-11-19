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


const Home = () => {
 useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      await import("aos/dist/aos.css");
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
      <Footer />
    </div>
  )
}

export default Home