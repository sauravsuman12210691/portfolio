import React from 'react';
import { ExternalLink, Github, Layout } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Mock Master',
      description: 'A MERN-based platform with AI-driven mock interviews and ATS resume analysis for job seekers.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI'],
      image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=500&q=60',
      demoLink: '#', // replace with your live demo link
      codeLink: 'https://github.com/sauravsuman12210691/mock-master', // update if different
    },
    {
      title: 'PickMe Travel App',
      description: 'A cross-platform travel app for ride-sharing and trip discovery, built using Flutter and Firebase.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=500&q=60',
      demoLink: '#', // replace with actual demo
      codeLink: 'https://github.com/sauravsuman12210691/pickme', // update if different
    },
    {
      title: 'Krshna Website',
      description: 'A PHP and SQL powered platform that uses AI to solve user queries based on Bhagavad Gita teachings.',
      technologies: ['PHP', 'SQL', 'OpenAI API', 'Bootstrap'],
      image: 'https://images.unsplash.com/photo-1522926193341-e7f2f1b1d37a?auto=format&fit=crop&w=500&q=60',
      demoLink: '#', // replace if hosted
      codeLink: 'https://github.com/sauravsuman12210691/krshna', // update if needed
    },
    {
      title: 'Nexus Connect',
      description: 'A MERN-based social media platform for real-time connection and post sharing.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=500&q=60',
      demoLink: '#',
      codeLink: 'https://github.com/sauravsuman12210691/nexus-connect',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title">My Projects</h2>
        <p className="text-gray-600 max-w-2xl mb-12">
          Here are some of the projects I've worked on. Each one presented unique challenges that helped me grow as a developer.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 font-serif">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a
                    href={project.demoLink}
                    className="flex items-center gap-1 text-portfolio-purple hover:text-portfolio-dark-purple transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Layout size={16} />
                    <span>Live Demo</span>
                  </a>
                  
                  <a
                    href={project.codeLink}
                    className="flex items-center gap-1 text-portfolio-purple hover:text-portfolio-dark-purple transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://github.com/sauravsuman12210691"
            className="inline-flex items-center gap-2 text-portfolio-purple hover:text-portfolio-dark-purple transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View more projects on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
