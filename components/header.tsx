"use client";

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // <header className={`bg-white w-full border-b md:sticky md:top-0 md:z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      
    <header className={`bg-white w-full border-b sticky top-0 z-50 transition-shadow duration-300 md:static ${scrolled ? 'shadow-md' : ''}`}>

      {/* Desktop Header */}
      <div className="hidden lg:flex items-center justify-between px-10 py-6 h-[250px]">
        <div>
          {/* Left - Navigation */}
          <nav className="flex gap-10 text-xl font-semibold tracking-wide">
            <a href="/" className="hover:text-gray-700 transition-colors border-b-2 border-black">
              HOME
            </a>
            <a href="/blog" className="hover:text-gray-700 transition-colors">
              BLOG
            </a>
            <a href="/about" className="hover:text-gray-700 transition-colors">
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
          <Link href={"https://www.amazon.com/Flight-Attendant-Report-Real-Tales/dp/B0F68L1269/ref=sr_1_1?crid=3T0YRJXIKG6GU&dib=eyJ2IjoiMSJ9.eMF_adW34TMyjXvoKM6wCHIjXviT87Kh6KYlLLQoakdyqZhHcI6tp33k5_H-oUuAjRtYp9yfKBq5_5sRaQ10d1HOoRmWXnGfXFjgtWbTusSGGxEf9TFOehlo3Y-I5sP7uvJKSjZ3QbxXBSe-_1RksEUa0x3t0zhvFYIoJKOZuRNecyDV1MH5lvwQK-9rNp6c.9rhTraHj2Bp7jqkm0Sewwv_-H83RGUVksvWMvrMK8QQ&dib_tag=se&keywords=the+flight+attendant+report&qid=1746466593&sprefix=the+flight+attendent+report%2Caps%2C274&sr=8-1"} target="_blank">
          <button className="bg-[#e0d6bd] px-16 py-6 rounded-full text-xl font-bold hover:brightness-90 transition-all">
            GET THE BOOK
          </button>
          </Link>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex lg:hidden items-center justify-between px-4 py-2 h-[200px] ">
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
              href="/blog"
              onClick={toggleMenu}
              className="hover:text-gray-600"
            >
              BLOG
            </a>
            <a
              href="/about"
              onClick={toggleMenu}
              className="hover:text-gray-600"
            >
              ABOUT
            </a>
            <Link href={"https://www.amazon.com/Flight-Attendant-Report-Real-Tales/dp/B0F68L1269/ref=sr_1_1?crid=3T0YRJXIKG6GU&dib=eyJ2IjoiMSJ9.eMF_adW34TMyjXvoKM6wCHIjXviT87Kh6KYlLLQoakdyqZhHcI6tp33k5_H-oUuAjRtYp9yfKBq5_5sRaQ10d1HOoRmWXnGfXFjgtWbTusSGGxEf9TFOehlo3Y-I5sP7uvJKSjZ3QbxXBSe-_1RksEUa0x3t0zhvFYIoJKOZuRNecyDV1MH5lvwQK-9rNp6c.9rhTraHj2Bp7jqkm0Sewwv_-H83RGUVksvWMvrMK8QQ&dib_tag=se&keywords=the+flight+attendant+report&qid=1746466593&sprefix=the+flight+attendent+report%2Caps%2C274&sr=8-1"} target="_blank">
            <button
              onClick={toggleMenu}
              className="mt-10 bg-[#e0d6bd] px-12 py-7 rounded-full text-2xl font-bold hover:brightness-90 transition-all"
            >
              GET THE BOOK
            </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


