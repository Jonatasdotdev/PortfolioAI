import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior ML Engineer',
      company: 'TechCorp AI',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: [
        'Lead a team of 5 ML engineers in developing production-ready AI models',
        'Built and deployed computer vision systems processing 10M+ images daily',
        'Increased model accuracy by 15% through advanced feature engineering',
        'Mentored junior developers and established ML best practices'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'AWS', 'Docker', 'Python'],
    },
    {
      title: 'Machine Learning Engineer',
      company: 'DataSolutions Inc',
      period: '2020 - 2022',
      location: 'New York, NY',
      description: [
        'Developed recommendation systems serving 1M+ users with 92% accuracy',
        'Implemented MLOps pipelines reducing model deployment time by 60%',
        'Created automated data preprocessing workflows handling TB-scale datasets',
        'Collaborated with product teams to translate business requirements into ML solutions'
      ],
      technologies: ['Scikit-learn', 'Apache Spark', 'Kubernetes', 'PostgreSQL'],
    },
    {
      title: 'Data Scientist',
      company: 'Analytics Pro',
      period: '2019 - 2020',
      location: 'Austin, TX',
      description: [
        'Built predictive models for financial forecasting with 89% accuracy',
        'Designed A/B testing frameworks improving conversion rates by 25%',
        'Created interactive dashboards using D3.js and Tableau',
        'Presented insights to C-level executives driving strategic decisions'
      ],
      technologies: ['R', 'Python', 'Tableau', 'SQL', 'D3.js'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building intelligent systems and leading AI initiatives across diverse industries
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-500"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:mb-16">
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-800 z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}`}>
                  <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        <div className="flex items-center space-x-2 text-blue-400 mb-2">
                          <Briefcase size={16} />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-gray-400 text-sm">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;