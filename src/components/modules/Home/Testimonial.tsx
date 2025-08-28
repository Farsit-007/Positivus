"use client";
import { PiStarFourFill } from "react-icons/pi";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts.",
    name: "John Smith",
    role: "CEO and Founder",
  },
  {
    quote:
      "Positivus has transformed our online strategy. Their expertise brought measurable growth in both leads and conversions. They are reliable and dedicated.",
    name: "Sarah Johnson",
    role: "Marketing Director",
  },
  {
    quote:
      "Amazing results with Positivus! Our brand visibility skyrocketed. The team is not just skilled, but also passionate about delivering value.",
    name: "David Brown",
    role: "CTO",
  },
  {
    quote:
      "We’ve seen remarkable growth thanks to Positivus’ strategies. Their professionalism is unmatched.",
    name: "Emma Wilson",
    role: "COO",
  },
  {
    quote:
      "Choosing Positivus was the best decision for our digital presence. Highly recommend their team!",
    name: "Michael Lee",
    role: "Head of Sales",
  },
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#1a1a1a] text-white rounded-3xl py-12 relative overflow-hidden">
      {/* Slider wrapper */}
      <div className="relative flex justify-center items-center h-[300px]">
        {testimonials.map((t, i) => {
          let position = "hidden";

          if (i === index) {
            position = "active";
          } else if (i === (index - 1 + testimonials.length) % testimonials.length) {
            position = "prev";
          } else if (i === (index + 1) % testimonials.length) {
            position = "next";
          }

          return (
            <div
              key={i}
              className={`absolute transition-all duration-700 ease-in-out ${
                position === "active"
                  ? "w-full scale-100 opacity-100 z-20 translate-x-0"
                  : position === "prev"
                  ? "hidden md:block w-[60%] opacity-70 z-10 -translate-x-[80%] scale-95"
                  : position === "next"
                  ? "hidden md:block w-[60%] opacity-70 z-10 translate-x-[80%] scale-95"
                  : "opacity-0 pointer-events-none scale-75"
              }`}
            >
              <div className="max-w-xl mx-auto">
                <div className="relative border border-lime-400 h-[200px] rounded-4xl px-6 py-8 bg-[#1a1a1a]">
                  <p className="text-base text-center md:text-lg leading-relaxed">
                    ”{t.quote}”
                  </p>
                  <div className="absolute bottom-[-18px] left-30 transform -translate-x-1/2 w-8 h-8 bg-[#1a1a1a] border-lime-400 border-l-2 border-b-2 rotate-315"></div>
                </div>
                <div className="my-8 ml-24">
                  <p className="text-lime-400 font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-300">{t.role}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center mt-8 gap-2">
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-[30%] text-lime-400 hover:scale-110 transition-transform"
        >
          <FaChevronLeft size={28} />
        </button>
        {testimonials.map((_, i) => (
          <PiStarFourFill
            key={i}
            onClick={() => setIndex(i)}
            size={25}
            className={`rotate-45 ${
              i === index ? "text-lime-400" : "text-gray-600"
            }`}
          />
        ))}
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-[30%] text-lime-400 hover:scale-110 transition-transform"
        >
          <FaChevronRight size={28} />
        </button>
      </div>
    </div>
  );
}
