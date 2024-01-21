"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Services", "Contact"];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="shadow-sm w-full">
      <nav className="max-w-5xl mx-auto py-5 px-1 flex flex-wrap justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" width={50} height={50} alt="flow jobs logo" />
        </Link>

        <div className="block lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 focus:outline-none"
          >
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
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className={`hidden lg:flex space-x-10 ${
            isMobileMenuOpen ? "hidden" : ""
          }`}
        >
          {navItems.map((navItem) => (
            <Link href={`/${navItem.toLowerCase()}`} key={navItem}>
              {navItem}
            </Link>
          ))}
          <Button className="shadow-gradient">Add</Button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white z-20">
            <div className="flex flex-col space-y-4 py-4">
              {navItems.map((navItem) => (
                <Link
                  key={navItem}
                  href={`/${navItem.toLowerCase()}`}
                  className="text-gray-800 hover:text-gray-600"
                >
                  {navItem}
                </Link>
              ))}
              <Button className="shadow-gradient">Add</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
