const skillsData = {
  frontend: [
    { name: 'React', level: 90 },
    { name: 'React Native', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 80 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Flutter', level: 75 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Firebase', level: 90 },
    { name: 'REST APIs', level: 85 },
    { name: 'GraphQL', level: 70 },
  ],
  tools: [
    { name: 'Git', level: 85 },
    { name: 'Docker', level: 70 },
    { name: 'Figma', level: 80 },
    { name: 'Jest', level: 75 },
    { name: 'CI/CD', level: 70 },
    { name: 'Agile/Scrum', level: 80 },
  ],
};

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-indigo-600 h-2.5 rounded-full" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-indigo-600">Skills</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          I've developed a diverse set of skills throughout my journey as an indie developer.
          Here's an overview of my technical expertise.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-center">Frontend Development</h3>
            {skillsData.frontend.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-center">Backend Development</h3>
            {skillsData.backend.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-center">Tools & Methodologies</h3>
            {skillsData.tools.map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 