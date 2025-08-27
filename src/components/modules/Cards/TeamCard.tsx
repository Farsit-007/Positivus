import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const TeamCard = ({
  name,
  position,
  bio,
  image,
}: {
  name: string;
  position: string;
  bio: string;
  image: StaticImageData;
}) => {
  return (
    <div className="transform transition-all duration-500 hover:-translate-y-3 hover:scale-105">
      <div className="flex justify-between items-start  ">
        <div className="flex gap-2 items-end">
          <div className="">
            <Image src={image} alt="team" className="" />
          </div>
          <div>
            <h2 className="font-medium text-xl">{name}</h2>
            <p className="text-base">{position}</p>
          </div>
        </div>

        <button className="rounded-full bg-black p-2">
          <FaLinkedinIn className="text-[#B9FF66]" />
        </button>
      </div>

      <div className="mt-4">
        <hr className="border-black my-6" />
        <p className="text-base">{bio}</p>
      </div>
    </div>
  );
};

export default TeamCard;
