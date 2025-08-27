import Titles from "../Shared/Titles";
import t1 from "@/assets/t1.png";
import t2 from "@/assets/t2.png";
import t3 from "@/assets/t3.png";
import t4 from "@/assets/t4.png";
import t5 from "@/assets/t5.png";
import t6 from "@/assets/t6.png";
import TeamCard from "../Cards/TeamCard";

export const teamMembers = [
  {
    id: 1,
    image: t1,
    name: "John Smith",
    position: "CEO and Founder",
    bio: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },
  {
    id: 2,
    image: t2,
    name: "Jane Doe",
    position: "Director of Operations",
    bio: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },
  {
    id: 3,
    image: t3,
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    bio: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },
  {
    id: 4,
    image: t4,
    name: "Emily Johnson",
    position: "PPC Manager",
    bio: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },
  {
    id: 5,
    image: t5,
    name: "Brian Williams",
    position: "Social Media Specialist",
    bio: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },
  {
    id: 6,
    image: t6,
    name: "Sarah Kim",
    position: "Content Creator",
    bio: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
  },
];

const Team = () => {
  return (
    <section className="my-20">
      <Titles
        title="Team"
        subTitle="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />

      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className=" rounded-4xl border border-black border-b-8 p-8  "
          >
            <TeamCard
              image={member.image}
              name={member.name}
              position={member.position}
              bio={member.bio}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center md:justify-end">
        <button className="border cursor-pointer text-white transition-all duration-300 text-lg font-medium border-black px-5 p-3 bg-[#191A23] rounded-xl hover:bg-[#B9FF66] hover:text-black">
        Sell all team
      </button>
      </div>
    </section>
  );
};

export default Team;
