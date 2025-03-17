import React from 'react';
import Link from 'next/link';

const MinimalHero = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Imane Benkhati
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Welcome to my minimalistic website. I focus on creating beautiful, functional digital experiences.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="#about" className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            About Me
          </Link>
          <Link href="#contact" className="px-8 py-3 rounded-full bg-white hover:bg-gray-100 text-blue-600 font-medium border border-blue-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get In Touch
          </Link>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-10 w-20 h-20 rounded-full bg-blue-500 opacity-10 blur-xl"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-purple-500 opacity-10 blur-xl"></div>
    </section>
  );
};

export default MinimalHero; 