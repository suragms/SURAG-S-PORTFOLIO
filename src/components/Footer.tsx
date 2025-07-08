import React from 'react';
import { Mail, User, Youtube, Linkedin, Github, Instagram, Link as LinkIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
            Full-stack developer building smart, scalable, and meaningful digital solutions. Let's turn ideas into impact.


            </p>
            <div className="flex space-x-4">
              <a href="mailto:officialsurag@gmail.com" aria-label="Email" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Mail size={20} />
              </a>
              <a href="https://linkedin.com/in/suragsunil" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/suragms" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="https://instagram.com/surag_sunil" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="https://linktr.ee/suragdevstudio" aria-label="Linktree" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <LinkIcon size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="/projects" className="text-gray-300 hover:text-white transition-colors duration-200">Projects</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Full-Stack Web Development</li>
              <li>AI & Machine Learning Integration</li>
              <li>UI/UX Design & Prototyping</li>
              <li>Technical Consulting & Deployment</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
          © 2025 Surag Dev Studio. Powered by React and Tailwind CSS. Hosted on Netlify.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
