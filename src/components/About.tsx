import React from 'react';
import { Brain, Code, Database, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'Deep Learning',
      description: 'Neural networks, computer vision, and natural language processing',
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Python, JavaScript, React, and modern web technologies',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Big data processing, ETL pipelines, and data architecture',
    },
    {
      icon: Zap,
      title: 'MLOps & Deployment',
      description: 'Model deployment, monitoring, and production optimization',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate about pushing the boundaries of artificial intelligence and machine learning.
              I specialize in creating intelligent systems that solve real-world problems and drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  <div className="mb-6">
                    <Icon className="h-12 w-12 text-blue-400 group-hover:text-purple-400 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 md:p-12 border border-blue-500/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  With over 5 years of experience in AI and machine learning, I've worked on diverse projects 
                  ranging from computer vision systems to natural language processing applications. My passion 
                  lies in translating complex algorithms into practical solutions that make a real impact.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I believe in the power of AI to transform industries and improve lives. Whether it's building 
                  recommendation systems, developing autonomous systems, or creating intelligent chatbots, 
                  I approach each project with curiosity and precision.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    5+
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Years of Experience</h4>
                    <p className="text-gray-400">In AI & ML Development</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    50+
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Projects Completed</h4>
                    <p className="text-gray-400">From Concept to Production</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                    10+
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Technologies Mastered</h4>
                    <p className="text-gray-400">Frameworks & Tools</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;