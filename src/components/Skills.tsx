import React, { useState, useEffect, useRef } from 'react';

const Skills: React.FC = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      category: 'Machine Learning',
      skills: [
        { name: 'TensorFlow', level: 95 },
        { name: 'PyTorch', level: 90 },
        { name: 'Scikit-learn', level: 88 },
        { name: 'Keras', level: 85 },
      ],
    },
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'JavaScript', level: 85 },
        { name: 'R', level: 80 },
        { name: 'SQL', level: 88 },
      ],
    },
    {
      category: 'Data & Cloud',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 82 },
        { name: 'Apache Spark', level: 78 },
        { name: 'MongoDB', level: 80 },
      ],
    },
    {
      category: 'Visualization & Tools',
      skills: [
        { name: 'Tableau', level: 85 },
        { name: 'D3.js', level: 75 },
        { name: 'Jupyter', level: 92 },
        { name: 'Git', level: 90 },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Skills</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit for building intelligent systems and data-driven solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-colors duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-8 text-center">
                  {category.category}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-blue-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-blue-400 to-purple-500 h-3 rounded-full transition-all duration-2000 ease-out"
                          style={{
                            width: inView ? `${skill.level}%` : '0%',
                            transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Models Trained', value: '200+' },
              { label: 'Data Points Processed', value: '10M+' },
              { label: 'Accuracy Achieved', value: '96%' },
              { label: 'Production Deployments', value: '25+' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;