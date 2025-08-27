import Image from "next/image";
import Marquee from "react-fast-marquee";
import amazon from "@/assets/amazon.png";
import dribble from "@/assets/dribble.png";
import hubspot from "@/assets/hubspot.png";
import notion from "@/assets/notion.png";
import netflix from "@/assets/netfilx.png";
import zoom from "@/assets/zoom.png";

const brands = [amazon, dribble, hubspot, notion, netflix, zoom];

const Brand = () => {
  return (
    <section className="my-20">
      <div className="hidden lg:block">
        <Marquee gradient={false} speed={50}>
          {brands.map((brand, index) => (
            <div key={index} className="mx-10">
              <Image
                src={brand}
                alt="Brand"
                className="h-16 w-auto filter grayscale hover:grayscale-0 transition duration-300"
                priority
              />
            </div>
          ))}
        </Marquee>
      </div>

      <div className="lg:hidden space-y-6">
        <Marquee gradient={false} speed={50}>
          {brands.slice(0, 3).map((brand, index) => (
            <div key={index} className="mx-6">
              <Image
                src={brand}
                alt="Brand"
                className="h-12 w-auto filter grayscale hover:grayscale-0 transition duration-300"
                priority
              />
            </div>
          ))}
        </Marquee>

        <Marquee gradient={false} speed={50} direction="right">
          {brands.slice(3, 6).map((brand, index) => (
            <div key={index} className="mx-6">
              <Image
                src={brand}
                alt="Brand"
                className="h-12 w-auto filter grayscale hover:grayscale-0 transition duration-300"
                priority
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Brand;
