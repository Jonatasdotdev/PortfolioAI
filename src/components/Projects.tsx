import React from 'react';
import { ExternalLink, Github, Brain, Eye, MessageSquare, BarChart } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Neural Style Transfer App',
      description: 'Deep learning application that transforms photos using artistic styles from famous paintings. Built with TensorFlow and deployed on AWS.',
      image: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['TensorFlow', 'Python', 'AWS', 'React'],
      icon: Brain,
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'Computer Vision Analytics',
      description: 'Real-time object detection and tracking system for retail analytics. Processes 1000+ images per minute with 94% accuracy.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['PyTorch', 'OpenCV', 'Docker', 'Flask'],
      icon: Eye,
      github: '#',
      demo: '#',
      featured: true,
    },
    {
      title: 'AI Chatbot Platform',
      description: 'Intelligent conversational AI using natural language processing. Handles customer support queries with 89% resolution rate.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['NLP', 'Transformers', 'FastAPI', 'MongoDB'],
      icon: MessageSquare,
      github: '#',
      demo: '#',
      featured: false,
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Machine learning dashboard for financial forecasting. Analyzes market trends and predicts stock movements with interactive visualizations.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Scikit-learn', 'D3.js', 'Node.js', 'PostgreSQL'],
      icon: BarChart,
      github: '#',
      demo: '#',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing innovative AI solutions that demonstrate technical expertise and real-world impact
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {featuredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-800 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-700 hover:border-blue-500/50"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <Icon className="h-8 w-8 text-blue-400" />
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Other Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-purple-500/50 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="h-8 w-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                    <div className="flex space-x-2">
                      <a href={project.github} className="text-gray-400 hover:text-white transition-colors duration-200">
                        <Github size={20} />
                      </a>
                      <a href={project.demo} className="text-gray-400 hover:text-white transition-colors duration-200">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;