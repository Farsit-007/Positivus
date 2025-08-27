import Titles from "../Shared/Titles";
import { MdOutlineArrowOutward } from "react-icons/md";
import Marquee from "react-fast-marquee";

const cases = [
  {
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

const Case = () => {
  return (
    <section className="my-20">
      <Titles
        title="Case Studies"
        subTitle="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />

      <div className="hidden lg:flex my-12 py-16 bg-[#191A23] rounded-3xl px-10 lg:divide-x lg:divide-white gap-5">
        {cases.map((c, index) => (
          <div key={index} className="w-1/3 px-6">
            <p className="text-white">{c.text}</p>
            <div className="flex items-center mt-5 gap-2">
              <p className="text-[#B9FF66]">Learn More</p>
              <MdOutlineArrowOutward className="text-[#B9FF66]" />
            </div>
          </div>
        ))}
      </div>


      <div className="lg:hidden my-12">
        <Marquee pauseOnHover gradient={false} speed={50}>
          {cases.map((c, index) => (
            <div
              key={index}
              className="w-[260px] bg-[#191A23] p-6 mr-6 rounded-3xl flex-shrink-0"
            >
              <p className="text-white">{c.text}</p>
              <div className="flex items-center mt-5 gap-2">
                <p className="text-[#B9FF66]">Learn More</p>
                <MdOutlineArrowOutward className="text-[#B9FF66]" />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Case;
