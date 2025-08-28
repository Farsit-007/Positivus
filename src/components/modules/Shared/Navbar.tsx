"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { PiStarFourFill } from "react-icons/pi";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Services", href: "#"},
  { name: "Use Cases", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Blog", href: "#" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav>
      <div className="flex justify-between items-center h-18 my-2 md:my-8 ">
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="text-4xl font-extrabold flex items-center gap-2 cursor-pointer text-gray-900 dark:text-gray-50  "
          >
            <PiStarFourFill className="rotate-45" size={40} /> Positivus
          </Link>
        </div>

        <div className="hidden lg:block">
          <div className=" flex items-baseline space-x-4">
            <div className="flex items-baseline gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group px-3 py-2 rounded-md font-medium transition-all duration-200"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-[#B9FF66] transition-all duration-400 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button className="border cursor-pointer dark:bg-[#B9FF66] dark:hover:bg-gray-50 transition-all duration-300 text-lg font-medium border-black p-3 rounded-xl  hover:bg-[#B9FF66] text-black">
                Request for quote
              </button>
              <ThemeToggle />
            </div>
          </div>
        </div>

        <div className="lg:hidden flex item-center gap-3">
          <button
            onClick={toggleMenu}
            type="button"
            className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none  transition-colors duration-200"
          >
            {!isMenuOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
          <ThemeToggle />
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 dark:bg-gray-800 bg-gray-50 rounded-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium hover:text-[#B9FF66] transition-all  duration-200`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <button className="border cursor-pointer dark:bg-[#B9FF66] dark:hover:bg-gray-50 transition-all duration-300 text-lg font-medium border-black p-3 rounded-xl  hover:bg-[#B9FF66] text-black">
              Request for quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
