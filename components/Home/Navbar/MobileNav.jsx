import { NavLinks } from "@/constant/constant"
import Link from "next/link"
import { CgClose } from "react-icons/cg"


const MobileNav = ({showNav, closeNav}) => {
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[100%]';

  return (
    <div>
      {/* Overlay */}
      <div className={`fixed inset-0 ${navOpen} transform transition-all right-0 duration-500 bg-black z-100002 opacity-70 w-full h-screen`}>
      </div>

      {/* Navlink */}
      <div className={`fixed text-white ${navOpen} flex flex-col justify-center h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-cyan-800 space-y-6 right-0 z-100050`}>
        {NavLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className="text-white text-xl w-fit ml-12 border-b-[1.5px] pb-1 border-white sm:text-3xl">{link.label}</p>
            </Link>
          )
        })}

        {/* Close icon */}
      <CgClose onClick={closeNav} className="absolute top-8 right-[1.4rem] w-6 h-6 sm:w-8 sm:h-8" />
      </div>
    </div>
  )
}

export default MobileNav