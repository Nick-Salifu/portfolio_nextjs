
import Image from "next/image"

const ServicesCard = ({description, name, icon}) => {
  return (
    <div>
        <Image src={icon} alt="icon image" height={60} width={60} />
        <h1 className="mt-6 text-xl md:text-2xl text-gray-200 font-bold">{name}</h1>
        <p className="mt-6 text-gray-300">{description}</p>
    </div>
  )
}

export default ServicesCard