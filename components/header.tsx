"use client";

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white w-full border-b shadow-md">
      {/* Desktop Header */}
      <div className="hidden lg:flex items-center justify-between px-10 py-6 h-[250px]">
        <div>
          {/* Left - Navigation */}
          <nav className="flex gap-10 text-xl font-semibold tracking-wide">
            <a href="/" className="hover:text-gray-700 transition-colors border-b-2 border-black">
              HOME
            </a>
            <a href="#blog" className="hover:text-gray-700 transition-colors">
              BLOG
            </a>
            <a href="#about" className="hover:text-gray-700 transition-colors">
              ABOUT
            </a>
          </nav>
        </div>

        <div className="h-[200px]">
          {/* Center - Logo */}
          <a href="/" className="relative w-[180px] h-[70px]">
            <Image
              src="/assets/logo/The-Flight-Attendant-Logo.png"
              alt="Logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </a>
        </div>

        <div>
          {/* Right - Large Styled Button */}
          <button className="bg-[#e0d6bd] px-16 py-6 rounded-full text-xl font-bold hover:brightness-90 transition-all">
            GET THE BOOK
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex lg:hidden items-center justify-between px-4 py-2 h-[200px]">
        {/* Left Logo */}
        <a href="/" className="relative w-[120px] h-[100px]">
          <Image
            src="/assets/logo/The-Flight-Attendant-Logo.png"
            alt="Logo"
            width={220}
            height={220}
            className="object-contain"
          />
        </a>

        {/* Hamburger / Cross */}
        <button onClick={toggleMenu} className="text-4xl">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          {/* Top - Logo and Cross */}
          <div className="flex items-center justify-between px-4 py-2 h-[200px]">
            {/* Left Logo */}
            <a href="/" className="relative w-[120px] h-[100px]">
              <Image
                src="/assets/logo/The-Flight-Attendant-Logo.png"
                alt="Logo"
                width={220}
                height={220}
                className="object-contain"
              />
            </a>

            {/* Hamburger / Cross */}
            <button onClick={toggleMenu} className="text-4xl">
              <FiX />
            </button>
          </div>

          {/* Center - Navigation Links */}
          <div className="flex flex-col items-center justify-center flex-grow space-y-10 text-3xl font-semibold tracking-wide">
            <a
              href="/"
              onClick={toggleMenu}
              className="hover:text-gray-600 border-b-2 border-black"
            >
              HOME
            </a>
            <a
              href="#blog"
              onClick={toggleMenu}
              className="hover:text-gray-600"
            >
              BLOG
            </a>
            <a
              href="#about"
              onClick={toggleMenu}
              className="hover:text-gray-600"
            >
              ABOUT
            </a>
            <button
              onClick={toggleMenu}
              className="mt-10 bg-[#e0d6bd] px-12 py-7 rounded-full text-2xl font-bold hover:brightness-90 transition-all"
            >
              GET THE BOOK
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
