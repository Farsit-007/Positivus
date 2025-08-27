import Brand from "@/components/modules/Home/Brand";
import Case from "@/components/modules/Home/Case";
import ContactUs from "@/components/modules/Home/ContactUs";
import Hero from "@/components/modules/Home/Hero";
import Proposal from "@/components/modules/Home/Proposal";
import Services from "@/components/modules/Home/Services";
import Team from "@/components/modules/Home/Team";
import Testimonial from "@/components/modules/Home/Testimonial";
import WorkingProcess from "@/components/modules/Home/WorkingProcess";

export default function Home() {
  return (
    <div>
      <Hero />
      <Brand />
      <Services />
      <Proposal/>
      <Case/>
      <WorkingProcess/>
      <Team/>
      <Testimonial/>
      <ContactUs/>
    </div>
  );
}
