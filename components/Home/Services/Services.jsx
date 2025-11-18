
import ServicesCard from "./ServicesCard"

const Services = () => {
  return (
    <div id="services" className="py-16">
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl text-white font-bold">
            Turning vision into reality <br /> for brands and agencies
        </h1>
        <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center">
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
                <ServicesCard 
                    icon="/images/s2.png" 
                    name="Website Development"
                    description="I build responsive, user-focused websites that are fast, modern, and aligned with a brand’s goals."
                />
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
                <ServicesCard 
                    icon="/images/s3.png" 
                    name="Design & Creative"
                    description="I design interfaces that are visually clear and enjoyable to use. Designs that not only look good but also work effectively."
                />
            </div>
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
                <ServicesCard 
                    icon="/images/s4.png" 
                    name="Website maintenance"
                    description="I provide ongoing support to keep your website running smoothly, secure, and up-to-date ensuring everything works"
                />
            </div>
             <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                <ServicesCard 
                    icon="/images/s1.png" 
                    name="UI/UX Implementation"
                    description="I transform design concepts and wireframes into functional, smooth and interactive user interfaces."
                />
            </div>
        </div>
    </div>
  )
}

export default Services
