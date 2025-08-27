"use client";
import React, { useState } from "react";
import Titles from "../Shared/Titles";
import WorkingProcessCard from "../Cards/WorkingProcessCard";
const workingProccess = [
  {
    id: "01",
    title: "Consultation",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: "02",
    title: "Research and Strategy Development",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: "03",
    title: "Implementation",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: "04",
    title: "Monitoring and Optimization",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: "05",
    title: "Reporting and Communication",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: "06",
    title: "Continual Improvement",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
];

const WorkingProcess = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const handleAccordionClick = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  return (
    <section className="my-20">
      <div className="heading mb-10">
        <Titles
          title="Our Working Process"
          subTitle="Step-by-Step Guide to Achieving Your Business Goals Step-by-Step Guide to Achieving Your Business Goals"
        />
      </div>

      <div>
        {workingProccess.map((proccess, index) => (
          <WorkingProcessCard
            key={index}
            text={proccess.text}
            title={proccess.title}
            id={proccess.id}
            isOpen={openIndex === index}
            onToggle={() => handleAccordionClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkingProcess;
