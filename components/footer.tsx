import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-black text-mycolor w-full px-6 py-10">
      <div className="flex flex-col md:flex-col lg:flex-row justify-between items-center lg:items-center gap-10">
        
        {/* Section 1 - Book Image */}
        <div className="flex w-full lg:w-1/3 justify-center lg:justify-end">
          <div className="bg-mycolor p-2 rounded-md">
            <Image
              src="/assets/images/book-cover-3.png"
              alt="Footer Book Image"
              width={300} // Make image larger here
              height={330} // Maintain proportion
              className="object-contain"
            />
          </div>
        </div>

        {/* Section 2 - Text and Button */}
        <div className="flex flex-col items-center text-center justify-center w-full lg:w-1/3">
          <p className="text-lg font-serif mb-4">
            Now available in paperback and eBook from Amazon and other book sellers.
          </p>
          <button className="bg-mycolor text-black px-8 py-4 rounded-full text-lg font-bold hover:brightness-90 transition-all">
            GET THE BOOK
          </button>
        </div>

        {/* Section 3 - Large Logo */}
        <div className="flex w-full lg:w-1/3 justify-center lg:justify-start">
          <a href="/" className="bg-white p-3 rounded-md">
            <div className="relative w-[250px] h-[120px]">
              <Image
                src="/assets/logo/The-Flight-Attendant-Logo.png"
                alt="Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
