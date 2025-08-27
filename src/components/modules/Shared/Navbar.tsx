"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { PiStarFourFill } from "react-icons/pi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Use Cases", href: "/portfolio" },
  { name: "Pricing", href: "/contact" },
  { name: "Blog", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav>
      <div className="flex justify-between items-center h-18 my-2 md:my-8">
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="text-4xl font-extrabold flex items-center gap-2 cursor-pointer text-gray-900 dark:text-gray-50  "
          >
            <PiStarFourFill className="rotate-45" size={40}/> Positivus
          </Link>
        </div>

        <div className="hidden lg:block">
          <div className=" flex items-baseline space-x-4">
            <div className=" flex items-baseline gap-4 ">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md hover:text-[#B9FF66] transition-all font-medium  duration-200`}
                >
                  {link.name}
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

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
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
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 `}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4">
             <button className="border cursor-pointer dark:bg-[#B9FF66] dark:hover:bg-gray-50 transition-all duration-300 text-lg font-medium border-black p-3 rounded-xl  hover:bg-[#B9FF66] text-black"> 
              Request for quote
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
