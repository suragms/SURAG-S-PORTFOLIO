import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Mail, User, MessageSquare } from 'lucide-react';

const Contact = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

              {/* Let's work together Card with LinkedIn Integration */}
              <div className="flex flex-col justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-10 text-white shadow-lg border border-blue-400 h-full min-h-[400px]">
                <h3 className="text-2xl font-bold mb-4">Let's work together!</h3>
                <p className="mb-6 text-lg">
                  I'm currently available for freelance work and full-time opportunities. If you have a project in mind or want to discuss potential collaboration, don't hesitate to reach out.
                </p>
                
                {/* LinkedIn Profile Card - Authentic LinkedIn Style */}
                <div className="mb-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
                  {/* Profile Content (no banner) */}
                  <div className="p-6 flex flex-col items-center">
                    {/* Profile Picture */}
                    <div className="mb-4">
                      <img 
                        src="https://media.licdn.com/dms/image/v2/D5603AQGfl_w7HEkPFQ/profile-displayphoto-scale_400_400/B56ZgmrzbAG0Ag-/0/1752995676420?e=1759968000&v=beta&t=MKBKszWeYfnPeMGbPuDnIJKvxLmr4yOvFdkfvjq8dnc"
                        alt="Surag M S LinkedIn Profile"
                        className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
                      />
                    </div>
                    
                    {/* Profile Info */}
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-bold text-white mr-2">Surag M S</h3>
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <span className="text-white/70 text-sm ml-2">He/Him</span>
                        {/* LinkedIn Premium Badge */}
                        <div className="ml-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded px-2 py-1 flex items-center">
                          <div className="w-3 h-3 bg-white rounded-sm mr-1 flex items-center justify-center">
                            <span className="text-amber-600 text-xs font-bold">in</span>
                          </div>
                          <span className="text-white text-xs font-semibold">Premium</span>
                        </div>
                      </div>
                      
                      <p className="text-white/90 text-sm mb-2">
                        Full Stack Developer | AI/ML Enthusiast | Founder – Stress Detection for IT Professionals | PG MCA – Calicut University | Python • Django • React • scikit-learn • Rasa
                      </p>
                      
                      <p className="text-white/70 text-sm mb-2">Thrissur, Kerala, India</p>
                      
                      <div className="flex items-center text-white/70 text-sm mb-4">
                        <span>1K+ followers • 500+ connections</span>
                      </div>
                      
                      {/* Education */}
                      <div className="flex items-center text-white/70 text-sm mb-4">
                        <div className="w-4 h-4 bg-gray-400 rounded mr-2 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                          </svg>
                        </div>
                        <span>University of Calicut MCA CCSIT Thalikullam</span>
                      </div>
                    </div>
                   
                    {/* Connect Button */}
                    <a 
                      href="https://www.linkedin.com/in/suragsunil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
                
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
