import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { BrainCog, Wallet, Gamepad2, Dice5, Globe, Timer } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Stress Detection for IT Professionals',
      description: 'An AI-based system that analyzes behavioral and physiological data to detect stress levels. Integrated with a Rasa chatbot for interactive user support and built using a Random Forest classifier.',
      technologies: ['Django', 'scikit-learn', 'SQLite3', 'Rasa'],
      icon: <BrainCog size={56} />,
      liveUrl: 'https://www.instagram.com/surag_sunil',
      sourceUrl: 'https://github.com/suragms/STRESS-DETECTION-FOR-IT-PROFESSIONALS.git'
    },
    {
      title: 'Enhanced Personal Finance Tracker',
      description: 'A smart finance management tool for tracking income, expenses, and bill uploads. Users can filter transactions, view reports, and analyze trends through charts.',
      technologies: ['Django', 'Bootstrap', 'Chart.js', 'SQLite3'],
      icon: <Wallet size={56} />,
      liveUrl: 'https://www.instagram.com/surag_sunil',
      sourceUrl: 'https://github.com/suragms/EXPENSIVE-TRACKER.git'
    },
    {
      title: 'Bounce Game – React Edition',
      description: 'A fun, interactive bouncing ball game built using React.js. Focused on learning React hooks, canvas drawing, and event handling in a gaming context.',
      technologies: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
      icon: <Gamepad2 size={56} />,
      liveUrl: 'https://www.instagram.com/surag_sunil',
      sourceUrl: 'https://github.com/suragms/Bounce-Game.git'
    },
    {
      title: 'Snake and Ladder – Django Edition',
      description: 'A digital single-player version of the classic board game with session-based tracking and an intuitive interface.',
      technologies: ['Django', 'HTML5', 'CSS3', 'JavaScript'],
      icon: <Dice5 size={56} />,
      liveUrl: 'https://www.instagram.com/surag_sunil',
      sourceUrl: 'https://github.com/suragms/Snake-Ladder-Game.git'
    },
    {
      title: 'Portfolio Website – React Edition',
      description: 'A clean and modern personal portfolio showcasing my skills, projects, and contact information. Fully responsive with smooth navigation and optimized performance.',
      technologies: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
      icon: <Globe size={56} />,
      liveUrl: 'https://www.instagram.com/surag_sunil',
      sourceUrl: 'https://github.com/suragms/MY-PORTFOLIO.git'
    },
    {
      title: 'Screen Time Tracker App',
      description: 'A productivity-focused app that helps users track their daily work hours, task durations, and generate visual logs of time spent. Includes timer functionality and history analytics.',
      technologies: ['Django', 'JavaScript', 'SQLite3', 'Chart.js'],
      icon: <Timer size={56} />,
      liveUrl: 'https://www.instagram.com/surag_sunil',
      sourceUrl: 'https://github.com/suragms/Screen-Time-Tracker-App.git'
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
