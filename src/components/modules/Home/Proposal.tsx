import service from "@/assets/service.png";
import Image from "next/image";
const Proposal = () => {
  return (
    <section className="my-20 ">
      <div className="flex items-center bg-[#F3F3F3] md:h-[280px] rounded-2xl  px-8 md:px-14 py-12 md:py-0">
        <div className="left flex flex-col gap-5 dark:text-black" >
          <h3 className="font-medium text-3xl">
            Let&rsquo;s make things happen
          </h3>
          <p className="w-full md:w-[60%]">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
           <button className="border cursor-pointer w-60 text-white transition-all duration-300 text-lg font-medium border-black px-5 p-3 bg-[#191A23] rounded-xl hover:bg-[#B9FF66] hover:text-black">
           Get your free proposal
          </button>
        </div>
        <div className=" w-[50%] hidden md:block">
          <Image src={service} alt="service-image" width={300} />
        </div>
      </div>
    </section>
  );
};

export default Proposal;
