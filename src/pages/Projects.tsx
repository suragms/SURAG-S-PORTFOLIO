import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { BrainCog, Wallet, Gamepad2, Dice5, Globe, Timer, Smartphone, Database, Shield, Palette, Rocket, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Stress Detection for IT Professionals',
      description: 'An AI-based system that analyzes behavioral and physiological data to detect stress levels. Integrated with a Rasa chatbot for interactive user support and built using a Random Forest classifier.',
      technologies: ['Django', 'scikit-learn', 'SQLite3', 'Rasa'],
      icon: <BrainCog size={56} />,
      liveUrl: 'https://stress-detection-for-it-professionals.onrender.com',
      sourceUrl: 'https://www.instagram.com/surag_sunil?message=Hi! I\'m interested in your Stress Detection for IT Professionals project. Can you tell me more about it?'
    },
    {
      title: 'Enhanced Personal Finance Tracker',
      description: 'A smart finance management tool for tracking income, expenses, and bill uploads. Users can filter transactions, view reports, and analyze trends through charts.',
      technologies: ['Django', 'Bootstrap', 'Chart.js', 'SQLite3'],
      icon: <Wallet size={56} />,
      liveUrl: 'https://expensive-tracker-nahn.onrender.com',
      sourceUrl: 'https://www.instagram.com/surag_sunil?message=Hi! I\'m interested in your Enhanced Personal Finance Tracker project. Can you tell me more about it?'
    },
    {
      title: 'Bounce Game – React Edition',
      description: 'A fun, interactive bouncing ball game built using React.js. Focused on learning React hooks, canvas drawing, and event handling in a gaming context.',
      technologies: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
      icon: <Gamepad2 size={56} />,
      liveUrl: 'https://bouncegame2025.netlify.app',
      sourceUrl: 'https://www.instagram.com/surag_sunil?message=Hi! I\'m interested in your Bounce Game – React Edition project. Can you tell me more about it?'
    },
    {
      title: 'Snake and Ladder – Django Edition',
      description: 'A digital single-player version of the classic board game with session-based tracking and an intuitive interface.',
      technologies: ['Django', 'HTML5', 'CSS3', 'JavaScript'],
      icon: <Dice5 size={56} />,
      liveUrl: 'coming-soon',
      sourceUrl: 'https://www.instagram.com/surag_sunil?message=Hi! I\'m interested in your Snake and Ladder – Django Edition project. Can you tell me more about it?'
    },
    {
      title: 'Sample Portfolio Website – React Edition',
      description: 'A clean and modern personal portfolio showcasing my skills, projects, and contact information. Fully responsive with smooth navigation and optimized performance.',
      technologies: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
      icon: <Globe size={56} />,
      liveUrl: 'https://astounding-cucurucho-bf9177.netlify.app',
      sourceUrl: 'https://www.instagram.com/surag_sunil?message=Hi! I\'m interested in your Portfolio Website – React Edition project. Can you tell me more about it?'
    },
    {
      title: 'Screen Time Tracker App',
      description: 'A productivity-focused app that helps users track their daily work hours, task durations, and generate visual logs of time spent. Includes timer functionality and history analytics.',
      technologies: ['Django', 'JavaScript', 'SQLite3', 'Chart.js'],
      icon: <Timer size={56} />,
      liveUrl: 'https://screen-time-tracker-app.onrender.com',
      sourceUrl: 'https://www.instagram.com/surag_sunil?message=Hi! I\'m interested in your Screen Time Tracker App project. Can you tell me more about it?'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's a collection of projects I've worked on, ranging from web applications 
              to mobile apps and everything in between. Each project represents a unique 
              challenge and learning experience.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  icon={project.icon}
                  technologies={project.technologies}
                  liveUrl={project.liveUrl}
                  sourceUrl={project.sourceUrl}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Connect with More Projects */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Connect with More Projects
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              I'm constantly working on new projects and exploring innovative technologies. 
              Connect with me to see more of my work, discuss collaboration opportunities, 
              or get updates on upcoming projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Contact Us
              </a>
              <a
                href="https://www.linkedin.com/in/surag-sunil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                Connect on LinkedIn
              </a>
              <a
                href="https://www.instagram.com/surag_sunil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Interested in Working Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. 
              Let's create something amazing together!
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
