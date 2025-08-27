import Image, { StaticImageData } from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";

interface ServiceCardProps {
  title1: string;
  title2: string;
  image: StaticImageData;
  bgColor: string;
  textColor: string;
  highlightColor: string;
  arrowBgColor: string;
  arrowIconColor: string;
  buttonTextColor: string;
}

const ServiceCard = ({
  title1,
  title2,
  image,
  bgColor,
  textColor,
  highlightColor,
  arrowBgColor,
  arrowIconColor,
  buttonTextColor,
}: ServiceCardProps) => {
  return (
    <div
  className="flex justify-between items-center h-[300px] w-full p-4 md:p-10 rounded-4xl border border-black border-b-8
             transform transition-all duration-500 hover:-translate-y-3 hover:scale-105"
  style={{ backgroundColor: bgColor, color: textColor }}
>
     
      <div className="flex flex-col gap-10 max-w-[60%]">
        <h3 className="font-medium text-3xl leading-snug space-y-1">
          <span className="p-2 rounded-lg block" style={{ backgroundColor: highlightColor }}>{title1}</span>
          
          <span className="p-2 rounded-lg " style={{ backgroundColor: highlightColor }}>{title2}</span>
        </h3>

       
        <div className="flex items-center gap-3">
          <button
            className="rounded-full p-3"
            style={{ backgroundColor: arrowBgColor }}
          >
            <MdOutlineArrowOutward size={30} style={{ color: arrowIconColor }} />
          </button>
          {buttonTextColor && (
            <p style={{ color: buttonTextColor }}>Learn more</p>
          )}
        </div>
      </div>

      <div className="flex items-center">
        <Image
          src={image}
          alt="service"
          className="w-[140px] object-contain"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
