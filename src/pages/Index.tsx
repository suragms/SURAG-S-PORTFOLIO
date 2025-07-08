import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Index = () => {
  const featuredProjects = [
    {
      title: 'Stress Detection for IT Professionals',
      description: 'A stress detection system for IT professionals using physiological and behavioral data.',
      icon: '🧠',
      // image: '/Stress.png',
      technologies: ['Django', 'scikit-learn', 'SQLite3', 'Rasa'],
      liveUrl: 'https://www.instagram.com/surag_sunil',
      sourceUrl: 'https://github.com/suragms/STRESS-DETECTION-FOR-IT-PROFESSIONALS.git'
    },
    {
      title: 'Enhanced Personal Finance Tracker',
      description: 'A full-stack application to track, categorize, and visualize income and expenses. Includes bill upload, date-based filtering, and chart-based analysis..',
      image: 'photo-1611224923853-80b023f02d71',
      icon: '💰',
      technologies: ['Django', 'Bootstrap', 'Chart.js', 'SQLite3'],
      liveUrl: 'https://www.instagram.com/surag_sunil',
      sourceUrl: 'https://github.com/suragms/EXPENSIVE-TRACKER.git'
    },
    {
      title: 'Bounce Game',
      description: 'A fun web-based bouncing ball game created as a learning project. Uses canvas animation, game logic, and responsive design techniques.',
      image: 'photo-1504608524841-42fe6f032b4b',
      technologies: ['React', 'Html5', 'JavaScript', 'CSS3'],
      liveUrl: 'https://www.instagram.com/surag_sunil',
      sourceUrl: 'https://github.com/suragms/Bounce-Game.git',
      icon: '🏀'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      content: 'Working with this developer was an absolute pleasure. The attention to detail and quality of work exceeded our expectations.',
      avatar: 'photo-1511367461989-f85a21fda167',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'Delivered our project on time and within budget. The code quality is exceptional and the user experience is fantastic.',
      avatar: 'photo-1472099645785-5658abf4ff4e',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Design Lead',
      company: 'Creative Agency',
      content: 'Transformed our designs into pixel-perfect, responsive web applications. Great communication throughout the process.',
      avatar: 'photo-1438761681033-6461ffad8d80',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Building Digital Experiences That Matter
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I'm a passionate full-stack developer and AI enthusiast with expertise in React.js, Django, and Python. I specialize in building scalable, data-driven applications that are not only user-friendly but also solve meaningful real-world problems — from personal finance tools to AI-powered stress detection systems.


              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Frontend</h3>
                  <p className="text-gray-600">React.js, HTML5, CSS3, JavaScript (ES6+)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Backend</h3>
                  <p className="text-gray-600">Django, Python, SQLite3, PostgreSQL</p>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Learn More About Me
              </Link>
            </div>
            <div className="relative">
              <img
                src="/it.jpg"
                alt="Coding workspace"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for creating amazing digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                sourceUrl={project.sourceUrl}
                icon={project.icon}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/projects"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take my word for it - here's what my clients have to say about working with me.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                content={testimonial.content}
                avatar={testimonial.avatar}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. I'm always excited to take on new challenges and create something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Get In Touch
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
