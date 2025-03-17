import React from 'react';

const SimpleAbout = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Hello! I'm Imane Benkhati, a passionate creator focused on building beautiful, functional digital experiences.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I specialize in creating minimalistic, user-friendly interfaces that prioritize simplicity and elegance.
            My approach combines clean design with intuitive functionality to deliver exceptional user experiences.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300">
            Feel free to reach out if you'd like to collaborate or learn more about my work!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SimpleAbout; 