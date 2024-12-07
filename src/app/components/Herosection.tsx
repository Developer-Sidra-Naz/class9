'use client';

import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-red-900 to-red-400 text-white flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 bg-red-500 h-96 text-center p-6">
          <h1 className="text-3xl lg:text-5xl font-extrabold mt-2">
            Must have makeup items for <span className="text-red-300">PROFESSIONALS</span>
          </h1>
          <p className="mt-6 text-md lg:text-lg text-gray-200">
            Transform your ideas into reality with a platform that brings your creativity to life.
          </p>
          <div className="mt-6">
            <button className="m-3 align-baseline bg-white text-red-900 px-6 py-2 sm:px-8 sm:py-3 rounded-full shadow-lg hover:bg-gray-100 transform hover:scale-105 transition">
              Shop Now
            </button>
            <button className="bg-red-700 border border-white px-6 py-2 sm:px-8 sm:py-3 rounded-full shadow-lg hover:bg-red-600 transform hover:scale-105 transition">
              View More
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-red-500 h-96 flex items-center justify-center relative items-end">
          <Image
            src="/makeup.png"
            alt="Close-up of professional makeup products"
            fill
            className="object-contain"
            
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
