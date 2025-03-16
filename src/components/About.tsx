const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-indigo-600">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm Imane Benkhati, a passionate indie app developer with a love for creating 
              intuitive and impactful digital experiences. My journey in software development 
              began with a curiosity about how technology can solve everyday problems.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Over the years, I've honed my skills in both mobile and web development, 
              focusing on creating applications that are not only functional but also 
              delightful to use. I believe that great software should be accessible, 
              intuitive, and make a positive difference in people's lives.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              As an indie developer, I handle all aspects of the development process - 
              from initial concept and design to development, testing, and deployment. 
              This end-to-end involvement allows me to ensure quality and consistency 
              across all my projects.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Approach</h3>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-medium mb-2 text-indigo-600">User-Centered Design</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  I put users at the center of everything I build, focusing on creating 
                  experiences that are intuitive, accessible, and enjoyable.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-medium mb-2 text-indigo-600">Clean Code</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  I'm committed to writing clean, maintainable code that stands the test of time 
                  and can evolve with changing requirements.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-medium mb-2 text-indigo-600">Continuous Learning</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  The tech world never stands still, and neither do I. I'm constantly learning 
                  new technologies and techniques to improve my craft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 