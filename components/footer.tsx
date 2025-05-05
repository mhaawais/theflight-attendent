import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
          <Link href={"https://www.amazon.com/Flight-Attendant-Report-Real-Tales/dp/B0F68L1269/ref=sr_1_1?crid=3T0YRJXIKG6GU&dib=eyJ2IjoiMSJ9.eMF_adW34TMyjXvoKM6wCHIjXviT87Kh6KYlLLQoakdyqZhHcI6tp33k5_H-oUuAjRtYp9yfKBq5_5sRaQ10d1HOoRmWXnGfXFjgtWbTusSGGxEf9TFOehlo3Y-I5sP7uvJKSjZ3QbxXBSe-_1RksEUa0x3t0zhvFYIoJKOZuRNecyDV1MH5lvwQK-9rNp6c.9rhTraHj2Bp7jqkm0Sewwv_-H83RGUVksvWMvrMK8QQ&dib_tag=se&keywords=the+flight+attendant+report&qid=1746466593&sprefix=the+flight+attendent+report%2Caps%2C274&sr=8-1"} target="_blank">
          <button className="bg-mycolor text-black px-8 py-4 rounded-full text-lg font-bold hover:brightness-90 transition-all">
            GET THE BOOK
          </button>
          </Link>
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
