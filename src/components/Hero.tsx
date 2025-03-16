import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero" className="pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-indigo-600">Imane Benkhati</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Indie App Developer crafting beautiful, user-friendly applications
          </h2>
          <p className="text-gray-700 dark:text-gray-400 mb-8 text-lg">
            I specialize in creating innovative mobile and web applications with a focus on 
            intuitive user experiences and clean, efficient code.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-600">
            {/* Replace with actual profile image */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-white text-6xl font-bold">
              IB
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 