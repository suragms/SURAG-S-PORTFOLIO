import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showEmail, setShowEmail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm always interested in hearing about new opportunities and interesting projects. 
              Whether you have a question or just want to say hello, I'd love to hear from you!
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              {/* Contact Us with Photo and Info */}
              <div className="flex flex-col items-center lg:items-start bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl shadow-2xl p-12 border border-blue-100 h-full justify-center transition-shadow duration-300 hover:shadow-blue-200">
                <h2 className="text-2xl font-bold text-blue-700 mb-8 w-full text-center lg:text-left tracking-tight">Contact Me</h2>
                <img
                  src="/hi.jpg"
                  alt="Surag Sunil"
                  className="w-full h-126 object-cover object-center rounded-t-2xl mb-6 border-b-4 border-blue-400 shadow-lg"
                />
                <h3 className="text-2xl font-semibold text-gray-900 mb-1 text-center lg:text-left w-full">Surag M S</h3>
                <p className="text-base text-gray-600 mb-4 text-center lg:text-left w-full">Web Developer & Freelancer</p>
                <div className="w-full border-t border-gray-200 my-4"></div>
                <div className="space-y-6 w-full">
                  {/* Email as button for business enquiry */}
                  <div className="flex flex-col items-center lg:items-start w-full">
                    <button
                      type="button"
                      onClick={() => setShowEmail((prev) => !prev)}
                      className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full max-w-xs text-center text-base tracking-wide"
                    >
                      For Business Enquiry
                    </button>
                    {showEmail && (
                      <a href="mailto:officialsurag@gmail.com" className="mt-3 text-blue-700 text-base select-all break-all underline w-full max-w-xs text-center lg:text-left font-mono">officialsurag@gmail.com</a>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row items-center lg:items-start w-full gap-2">
                    <User className="bg-blue-100 text-blue-600 mr-3 p-2 rounded-full shadow-sm transition-transform duration-200 hover:scale-110" size={22} />
                    <span className="text-gray-700 text-lg font-semibold mr-2">Social Media Collab:</span>
                    <a href="https://instagram.com/surag_sunil" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline text-lg">@surag_sunil</a>
                  </div>
                  <div className="flex items-center w-full">
                    <MessageSquare className="bg-blue-100 text-blue-600 mr-3 p-2 rounded-full shadow-sm transition-transform duration-200 hover:scale-110" size={22} />
                    <span className="text-gray-700 text-lg">Usually responds within 24 hours</span>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-3 w-full">
                    <a href="https://www.linkedin.com/in/suragsunil" target="_blank" rel="noopener noreferrer" className="group flex items-center">
                      <span className="bg-blue-100 text-blue-700 p-2 rounded-full shadow-sm flex items-center justify-center transition-transform duration-200 group-hover:scale-110 mr-2" style={{width: '36px', height: '36px'}}>
                        {/* LinkedIn SVG */}
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                      </span>
                      
                    </a>
                    <a href="https://github.com/suragms" target="_blank" rel="noopener noreferrer" className="group">
                      <span className="bg-gray-100 text-gray-800 p-2 rounded-full shadow-sm flex items-center justify-center transition-transform duration-200 group-hover:scale-110" style={{width: '36px', height: '36px'}}>
                        {/* GitHub SVG */}
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 7.43c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48C19.13 20.58 22 16.76 22 12.26 22 6.58 17.52 2 12 2z"/></svg>
                      </span>
                    </a>
                    <a href="https://instagram.com/surag_sunil" target="_blank" rel="noopener noreferrer" className="group">
                      <span className="bg-pink-100 text-pink-600 p-2 rounded-full shadow-sm flex items-center justify-center transition-transform duration-200 group-hover:scale-110" style={{width: '36px', height: '36px'}}>
                        {/* Instagram SVG */}
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="16" height="16" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
                      </span>
                    </a>
                    <a href="https://facebook.com/suraagms" target="_blank" rel="noopener noreferrer" className="group">
                      <span className="bg-blue-100 text-blue-800 p-2 rounded-full shadow-sm flex items-center justify-center transition-transform duration-200 group-hover:scale-110" style={{width: '36px', height: '36px'}}>
                        {/* Facebook SVG */}
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H6v4h4v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                      </span>
                    </a>
                    <a href="https://www.youtube.com/@SuragDevStudiov" target="_blank" rel="noopener noreferrer" className="group">
                      <span className="bg-red-100 text-red-600 p-2 rounded-full shadow-sm flex items-center justify-center transition-transform duration-200 group-hover:scale-110" style={{width: '36px', height: '36px'}}>
                        {/* YouTube SVG */}
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="16" height="6" rx="3"/><polygon points="9 9 13 12 9 15 9 9"/></svg>
                      </span>
                    </a>
                    <a href="https://linktr.ee/suragdevstudio" target="_blank" rel="noopener noreferrer" className="group">
                      <span className="bg-green-100 text-green-700 p-2 rounded-full shadow-sm flex items-center justify-center transition-transform duration-200 group-hover:scale-110" style={{width: '36px', height: '36px'}}>
                        {/* Linktree SVG (chain icon) */}
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 7a5 5 0 0 1 0 7l-3 3a5 5 0 0 1-7-7l1-1"/><path d="M7 17a5 5 0 0 1 0-7l3-3a5 5 0 0 1 7 7l-1 1"/></svg>
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Let's work together Card */}
              <div className="flex flex-col justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-10 text-white shadow-lg border border-blue-400 h-full min-h-[400px]">
                <h3 className="text-2xl font-bold mb-4">Let's work together!</h3>
                <p className="mb-6 text-lg">
                  I'm currently available for freelance work and full-time opportunities. If you have a project in mind or want to discuss potential collaboration, don't hesitate to reach out.
                </p>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-white/80 hover:text-white transition-colors duration-200">
                    <User size={20} />
                  </a>
                  <a href="mailto:officialsurag@gmail.com" className="text-white/80 hover:text-white transition-colors duration-200">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
