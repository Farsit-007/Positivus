import Image from "next/image";
import heroImg from "@/assets/hero.png";
const Hero = () => {
  return (
    <section>
      <div className="grid lg:grid-cols-2 gap-10 ">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-snug py-5 lg:py-0">
            <span className="block">Navigating the</span>
            <span className="block">digital landscape</span>
            <span className="block ">for success</span>
          </h1>
          <div className=" flex justify-center lg:hidden lg:justify-end dark:bg-gray-200/70 dark:rounded-2xl">
            <Image
              src={heroImg}
              alt="Illustration"
              className=" object-cover"
              priority
            />
          </div>
          <p className="my-6 text-base md:text-lg leading-relaxed max-w-md">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>

          <button className="border cursor-pointer text-white transition-all duration-300 text-lg font-medium border-black px-5 p-3 bg-[#191A23] rounded-xl hover:bg-[#B9FF66] hover:text-black">
            Book a consultation
          </button>
        </div>
        <div className="hidden lg:flex justify-center lg:justify-end dark:bg-gray-200/70 dark:rounded-2xl ">
          <Image
            src={heroImg}
            alt="Illustration"
            className=" object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
