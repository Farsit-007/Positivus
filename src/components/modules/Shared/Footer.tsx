import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { PiStarFourFill } from "react-icons/pi";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Use Cases", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Blog", href: "#" },
  ];
  return (
    <footer className="  text-white">
      <div className="bg-[#191A23]  rounded-t-3xl px-15 py-15">
        <div className="col-1 flex flex-col lg:flex-row gap-8 justify-between items-center">
          <div className="">
            {" "}
            <Link
              href="/"
              className="text-4xl flex items-center gap-2 font-extrabold cursor-pointer text-gray-50"
            >
              <PiStarFourFill className="rotate-45" size={40}/> Positivus
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row text-center gap-4 lg:gap-8">
            {navLinks.map((link, idx) => (
              <ul key={idx}>
                <li className="underline">
                  <a href={link.href}>{link.name}</a>
                </li>
              </ul>
            ))}
          </div>

          <div className=" hidden md:block space-x-4">
            <button className="cursor-pointer rounded-full bg-[#F3F3F3] p-2">
              <FaLinkedinIn className="text-[#191A23]" />
            </button>
            <button className="cursor-pointer rounded-full bg-[#F3F3F3] p-2">
              <FaFacebookF className="text-[#191A23]" />
            </button>
            <button className="cursor-pointer rounded-full bg-[#F3F3F3] p-2">
              <FaTwitter className="text-[#191A23]" />
            </button>
          </div>
        </div>
        <div className="col-2 pt-5 md:py-15 flex flex-col lg:flex-row gap-5 items-center justify-between">
          <div className="space-y-5 text-center lg:text-start">
            <h2 className="bg-[#B9FF66] md:w-[220px] text-black rounded-lg p-2 text-4xl">
              Contact Us
            </h2>
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p>
              Address: 1234 Main St <br />
              Moonstone City, Stardust State 12345
            </p>
          </div>
          <div className="right flex bg-[#292A32] p-10 rounded-xl mt-5">
            <form className="flex gap-8 flex-col lg:flex-row justify-between">
              <input
                type="email"
                placeholder="Email"
                className="placeholder-white border border-white px-[15px] py-[10px] md:px-[22px] md:py-[15px] rounded-xl"
              />

              <button className="border cursor-pointer hover:text-white transition-all duration-300 text-lg font-medium border-black px-5 p-3 hover:bg-black rounded-xl bg-[#B9FF66] text-black">
                Subscribe to news
              </button>
            </form>
          </div>
          <div className="block md:hidden space-x-4">
            <button className="cursor-pointer rounded-full bg-[#F3F3F3] p-2">
              <FaLinkedinIn className="text-[#191A23]" />
            </button>
            <button className="cursor-pointer rounded-full bg-[#F3F3F3] p-2">
              <FaFacebookF className="text-[#191A23]" />
            </button>
            <button className="cursor-pointer rounded-full bg-[#F3F3F3] p-2">
              <FaTwitter className="text-[#191A23]" />
            </button>
          </div>
        </div>
        <hr className="my-8" />
        <div className="col-3 flex flex-col lg:flex-row gap-3 lg:gap-8 text-center">
          <h3>© {new Date().getFullYear()} Positivus. All Rights Reserved.</h3>
          <h3 className="underline">Privacy Policy</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
