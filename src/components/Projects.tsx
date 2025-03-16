import Image from 'next/image';

// Sample project data - this could be moved to a separate data file
const projectsData = [
  {
    id: 1,
    title: 'FitTrack Pro',
    description: 'A fitness tracking mobile app that helps users monitor workouts, set goals, and track progress over time.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    imageUrl: '/placeholder-project1.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'TaskFlow',
    description: 'A productivity web application for teams to manage projects, assign tasks, and track deadlines.',
    technologies: ['React', 'TypeScript', 'MongoDB', 'Express'],
    imageUrl: '/placeholder-project2.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'RecipeVault',
    description: 'A recipe management app that allows users to save, categorize, and share their favorite recipes.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore'],
    imageUrl: '/placeholder-project3.jpg',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-indigo-600">Projects</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          Here are some of the applications I've built. Each project represents a unique challenge 
          and showcases different aspects of my skills and approach to development.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                {/* Replace with actual project images */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                  {project.title}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={project.link} 
                  className="inline-block text-indigo-600 hover:text-indigo-800 dark:hover:text-indigo-400 font-medium text-sm"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/imanebenkhati" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 