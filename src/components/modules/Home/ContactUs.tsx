import React from "react";
import f from "@/assets/f.png";
import Image from "next/image";
import Titles from "../Shared/Titles";

const ContactUs = () => {
  return (
    <section className="my-20">
      <div className="">
        <Titles
          title="Contact Us"
          subTitle="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        />
      </div>

      <div className="bg-[#F3F3F3] rounded-3xl lg:my-10 flex flex-col lg:flex-row justify-between items-center px-10 lg:pe-0 lg:gap-12">
        <div className="w-full lg:w-1/2">
          <form className="space-y-8 px-0 py-10 md:px-8">
            <div className="flex gap-10 justify-center md:justify-start mb-6">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="contactType"
                  id="say-hi"
                  className="appearance-none w-5 h-5 border-2 border-black rounded-full checked:bg-[#B9FF66] checked:border-black"
                  defaultChecked
                />
                <label htmlFor="say-hi" className="text-black cursor-pointer">
                  Say Hi
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="contactType"
                  id="quote"
                  className="appearance-none w-5 h-5 border-2 border-black rounded-full checked:bg-[#B9FF66] checked:border-black"
                />
                <label htmlFor="quote" className="text-black cursor-pointer">
                  Get a Quote
                </label>
              </div>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block mb-1 text-black">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full border border-black rounded-xl px-4 py-2 bg-white placeholder-gray-400"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-1 text-black">
                Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full border border-black rounded-xl px-4 py-2 bg-white placeholder-gray-400"
                required
              />
            </div>

         
            <div>
              <label htmlFor="message" className="block mb-1 text-black">
                Message*
              </label>
              <textarea
                id="message"
                placeholder="Message"
                rows={6}
                className="w-full border border-black rounded-xl px-4 py-2 bg-white placeholder-gray-400"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#191A23] text-white py-3 rounded-xl border border-black transition-all hover:bg-[#B9FF66] hover:text-black"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="w-full lg:w-1/2 flex justify-end items-center lg:py-6 pr-0">
          <Image
            src={f}
            alt="form illustration"
            className="max-w-[300px] md:max-w-[400px] lg:max-w-[500px] hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
