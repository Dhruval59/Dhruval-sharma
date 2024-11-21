'use client';
import Link from "next/link";
import ThemeToggle from "../Components/ThemeToggle";
import { useState } from "react";

export default function Header() {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleMenu = () => {
    // setIsOpen(!isOpen);
    // };
  return (
    <header className="bg-slate-400 dark:bg-gray-800 text-black dark:text-white shadow-md sticky top-0 z-50 ">
      <div className="flex container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <Link href="/">Dhruval Sharma</Link>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <ul className="flex space-x-6 text-xl">
            <li>
              <Link href="#about">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center`}
        >
          <ul className="space-y-2 text-white">
            <li>
              <Link href="#about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Call-to-Action Button */}
        <div className="hidden md:flex text-xl">
          
          <ul className="flex space-x-6">
            <li>
            <Link href="https://drive.google.com/file/d/1JP2rd2ESKsO57RORAr9nNkn_LrGIFTuk/view?usp=sharing" target="_blank">
              View Resume
          </Link>
            </li>
            <li>
              {/* <ThemeToggle /> */}
            </li>
          </ul>
        </div>
      </div>

    </header>
  );
}
