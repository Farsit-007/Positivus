import card1 from '@/assets/card1.png';
import card2 from '@/assets/card2.png';
import card3 from '@/assets/card3.png';
import card4 from '@/assets/card4.png';
import card5 from '@/assets/card5.png';
import card6 from '@/assets/card6.png';

import ServiceCard from '../Cards/ServiceCard';

import Titles from '../Shared/Titles';


const Services = () => {
  return (
    <section className="my-20">
      <Titles
        title="Services"
        subTitle="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 mt-12">

          <ServiceCard
            title1="Search engine"
            title2="optimization"
            image={card1}
            bgColor="#F3F3F3"
            textColor="black"
            highlightColor="#B9FF66"
            arrowBgColor="black"
            buttonTextColor="black"
            arrowIconColor="#B9FF66"
          />
          <ServiceCard
            title1="Pay-per-click"
            title2="advertising"
            image={card2}
            bgColor="#B9FF66"
            textColor="black"
            highlightColor="#FFFFFF"
            arrowBgColor="black"
            arrowIconColor="#B9FF66"
             buttonTextColor="black"
          />
          <ServiceCard
            title1="Social Media"
            title2="Marketing"
            image={card3}
            bgColor="#191A23"
            textColor="black"
            highlightColor="#FFFFFF"
            arrowBgColor="#FFFFFF"
            arrowIconColor="black"
            buttonTextColor="#FFFFFF"
          />
          <ServiceCard
            title1="Email"
            title2="Marketing"
            image={card4}
            bgColor="#F3F3F3"
            textColor="black"
            highlightColor="#B9FF66"
            arrowBgColor="black"
            arrowIconColor="#B9FF66"
            buttonTextColor="black"
          />
          <ServiceCard
            title1="Content"
            title2="Creation"
            image={card5}
            bgColor="#B9FF66"
            textColor="black"
            highlightColor="#FFFFFF"
            arrowBgColor="black"
            arrowIconColor="#B9FF66"
            buttonTextColor="black"
          />
          <ServiceCard
            title1="Analytics and"
            title2="Tracking"
            image={card6}
            bgColor="#191A23"
            textColor="black"
            highlightColor="#B9FF66"
            arrowBgColor="#FFFFFF"
            arrowIconColor="black"
            buttonTextColor="#FFFFFF"
          />
        </div>
      </div>

      
    </section>
  );
};

export default Services;