import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section id="about-me" className="relative pt-20 pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-32 left-40 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-700 mb-6">
                  👋 Welcome to my story
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                  About{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Me
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Hi, I’m <span className="font-semibold text-blue-600">Surag M S</span>—holding a <span className="font-semibold">Master of Computer Applications (MCA)</span> with self‑directed study and hands‑on experience in <span className="font-semibold text-purple-600">AI + Full‑Stack Development</span>. I design and deliver intelligent, production‑ready web applications, leveraging Python (Django) on the backend and React.js on the frontend. My work blends strong software engineering practices with practical applications of machine learning.
                </p>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  I lead <span className="font-semibold text-blue-600">Surag Dev Studio</span>, building end‑to‑end solutions—from AI‑powered utilities to modern, responsive interfaces. I focus on translating real‑world problems into reliable, maintainable products that are fast, accessible, and user‑centric.
                </p>
                {/* Services + CTAs */}
                <div className="mb-12">
                  {/* Availability Note */}
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 border border-green-200">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-sm font-medium text-green-700">Open to new projects</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-blue-100">
                      <p className="text-sm font-medium text-gray-900">AI Solutions</p>
                      <p className="text-sm text-gray-600">ML models, data pipelines, intelligent features</p>
                    </div>
                    <div className="p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-purple-100">
                      <p className="text-sm font-medium text-gray-900">Full‑Stack Products</p>
                      <p className="text-sm text-gray-600">Django backends, React frontends, cloud deployment</p>
                    </div>
                    <div className="p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-pink-100">
                      <p className="text-sm font-medium text-gray-900">Consulting & Audits</p>
                      <p className="text-sm text-gray-600">Architecture, performance, code quality</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a href="/projects" className="inline-flex items-center px-5 py-3 rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:shadow-xl transition-all">
                      View Projects
                    </a>
                    <a href="/contact" className="inline-flex items-center px-5 py-3 rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 transition-all">
                      Start a Project
                    </a>
                    <a href="/contact" className="inline-flex items-center px-5 py-3 rounded-lg text-white bg-green-600 hover:bg-green-700 transition-all">
                      Book a Consultation
                    </a>
                  </div>
                </div>
                
                {/* Enhanced Stats */}
                <div className="grid grid-cols-3 gap-8 mb-8">
                  <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">10+</div>
                    <div className="text-gray-600 font-medium">Projects</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">5+</div>
                    <div className="text-gray-600 font-medium">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">30+</div>
                    <div className="text-gray-600 font-medium">Clients</div>
                  </div>
                </div>
              </div>
              
              <div className="relative animate-fade-in animation-delay-500">
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
                  
                  <img
                    src="/my.webp"
                    alt="Surag M S - Ai + Full Stack Developer"
                    className="relative z-10 rounded-3xl shadow-2xl w-full max-w-xl mx-auto border-4 border-white/50 hover:border-white transition-all duration-300 hover:scale-105"
                  />
                  
                  {/* Floating tech badges */}
                  <div className="absolute top-8 -left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-blue-200">
                    <span className="text-sm font-medium text-blue-600">React.js</span>
                  </div>
                  <div className="absolute bottom-8 -right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-purple-200">
                    <span className="text-sm font-medium text-purple-600">Django</span>
                  </div>
                  <div className="absolute top-1/2 -left-8 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-pink-200">
                    <span className="text-sm font-medium text-pink-600">AI/ML</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Skills & Technologies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Frontend Development */}
              <div className="bg-white p-8 rounded-xl shadow-lg ring-2 ring-blue-200 hover:ring-blue-400 hover:shadow-blue-400/40 transition duration-300 group relative overflow-hidden">
                <span className="absolute -inset-1 bg-blue-200 opacity-0 group-hover:opacity-30 blur-2xl pointer-events-none transition duration-300" />
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="text-2xl mr-2">💻</span> Frontend Development
                </h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>HTML5 & CSS3 – Semantic structure, Flexbox, Grid, animations</li>
                  <li>JavaScript (ES6+) – DOM manipulation, event handling, fetch API</li>
                  <li>React.js:
                    <ul className="ml-4 list-[circle]">
                      <li>Functional components & Hooks (useState, useEffect)</li>
                      <li>Routing (React Router)</li>
                      <li>State Management (Props, useContext)</li>
                      <li>Responsive UI with CSS Modules, custom styling, and design systems</li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* Backend Development */}
              <div className="bg-white p-8 rounded-xl shadow-lg ring-2 ring-purple-200 hover:ring-purple-400 hover:shadow-purple-400/40 transition duration-300 group relative overflow-hidden">
                <span className="absolute -inset-1 bg-purple-200 opacity-0 group-hover:opacity-30 blur-2xl pointer-events-none transition duration-300" />
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="text-2xl mr-2">🧠</span> Backend Development
                </h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>Python – Object-oriented programming, data structures, file handling</li>
                  <li>Django Framework:
                    <ul className="ml-4 list-[circle]">
                      <li>MVT architecture, URL routing, middleware</li>
                      <li>Forms, authentication, sessions</li>
                      <li>Django Admin, class-based views, REST APIs (using DRF)</li>
                    </ul>
                  </li>
                  <li>Flask (Basics) – Lightweight REST services</li>
                </ul>
              </div>
              {/* AI & Machine Learning */}
              <div className="bg-white p-8 rounded-xl shadow-lg ring-2 ring-pink-200 hover:ring-pink-400 hover:shadow-pink-400/40 transition duration-300 group relative overflow-hidden">
                <span className="absolute -inset-1 bg-pink-200 opacity-0 group-hover:opacity-30 blur-2xl pointer-events-none transition duration-300" />
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="text-2xl mr-2">🧪</span> AI & Machine Learning
                </h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>Libraries: scikit-learn, pandas, numpy, matplotlib, seaborn</li>
                  <li>Techniques:
                    <ul className="ml-4 list-[circle]">
                      <li>Supervised Learning (Random Forest, Decision Trees, SVM)</li>
                      <li>Data Preprocessing, Feature Scaling, Normalization</li>
                      <li>Model Evaluation: Accuracy, Precision, Recall, F1-score</li>
                    </ul>
                  </li>
                  <li>Application: Stress detection from physiological & behavioral data</li>
                </ul>
              </div>
              {/* Tools & Platforms */}
              <div className="bg-white p-8 rounded-xl shadow-lg ring-2 ring-yellow-200 hover:ring-yellow-400 hover:shadow-yellow-400/40 transition duration-300 group relative overflow-hidden">
                <span className="absolute -inset-1 bg-yellow-200 opacity-0 group-hover:opacity-30 blur-2xl pointer-events-none transition duration-300" />
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="text-2xl mr-2">🧰</span> Tools & Platforms
                </h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>Version Control: Git, GitHub</li>
                  <li>Deployment: Netlify (React), Render (Django & Rasa)</li>
                  <li>Design Tools: Canva, Figma (UI prototyping, presentations)</li>
                  <li>API Testing: Postman</li>
                  <li>IDEs: VS Code, PyCharm</li>
                </ul>
              </div>
              {/* Conversational AI */}
              <div className="bg-white p-8 rounded-xl shadow-lg ring-2 ring-green-200 hover:ring-green-400 hover:shadow-green-400/40 transition duration-300 group relative overflow-hidden">
                <span className="absolute -inset-1 bg-green-200 opacity-0 group-hover:opacity-30 blur-2xl pointer-events-none transition duration-300" />
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="text-2xl mr-2">🧠</span> Conversational AI
                </h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>Rasa Framework:
                    <ul className="ml-4 list-[circle]">
                      <li>Intent recognition, slot filling, custom actions</li>
                      <li>Integrated with Django apps for real-time AI chatbot interaction</li>
                    </ul>
                  </li>
                </ul>
              </div>
              {/* Databases */}
              <div className="bg-white p-8 rounded-xl shadow-lg ring-2 ring-indigo-200 hover:ring-indigo-400 hover:shadow-indigo-400/40 transition duration-300 group relative overflow-hidden">
                <span className="absolute -inset-1 bg-indigo-200 opacity-0 group-hover:opacity-30 blur-2xl pointer-events-none transition duration-300" />
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="text-2xl mr-2">🗃️</span> Databases
                </h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>SQLite3 – Lightweight DB used with Django</li>
                  <li>PostgreSQL – Production-ready relational database</li>
                  <li>ORM: Django ORM for efficient query handling</li>
                </ul>
              </div>
              {/* Web Essentials */}
              <div className="bg-white p-8 rounded-xl shadow-lg ring-2 ring-cyan-200 hover:ring-cyan-400 hover:shadow-cyan-400/40 transition duration-300 group relative overflow-hidden">
                <span className="absolute -inset-1 bg-cyan-200 opacity-0 group-hover:opacity-30 blur-2xl pointer-events-none transition duration-300" />
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <span className="text-2xl mr-2">🌐</span> Web Essentials
                </h3>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li>Responsive Web Design – Mobile-first approach using media queries</li>
                  <li>REST APIs – Building and consuming APIs using Django REST Framework</li>
                  <li>Charting Libraries – Chart.js, matplotlib for data visualization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Professional Journey
            </h2>
            <div className="space-y-8">
              {/* 2025 – Present */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-32 text-blue-600 font-semibold">
                    2025 – Present
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900">Independent Full Stack Developer</h3>
                    <p className="text-blue-600 font-medium mb-2">Surag Dev Studio</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Designing and developing full-stack applications using React.js and Django</li>
                      <li>Integrated AI/ML models into real-world apps like stress detection systems</li>
                      <li>Built and deployed production-ready projects using platforms like Netlify, Render, and GitHub</li>
                      <li>Worked on open datasets (e.g., WESAD, DEAP) to implement ML algorithms for stress classification</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* 2022 – Present */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-32 text-blue-600 font-semibold">
                    2023 – 2025
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900">Postgraduate Student – MCA 🎓</h3>
                    <p className="text-blue-600 font-medium mb-2">University of Calicut, CCSIT Thalikulam — First Class with Distinction (CGPA: 8.21)</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Advanced coursework in AI, ML, Web Technologies, Data Science, Cryptography, Compiler Design, and more</li>
                      <li>Specialization: Machine Learning & Data Science </li>
                      <li>Gained hands-on experience through academic mini-projects and major projects:</li>
                      <ul className="ml-6 list-[circle]">
                        <li>Stress Detection for IT Professionals</li>
                        <li>Enhanced Personal Finance Tracker</li>
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>
              {/* 2019 – 2022 */}
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-32 text-blue-600 font-semibold">
                    2019 – 2022
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900">Undergraduate Student – BCA 🎓</h3>
                    <p className="text-blue-600 font-medium mb-2">SNGC Nattika, Calicut University</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Graduated BCA with First Class (B+ Grade), 140 credits, GPA 8.0 (~76%) — First Class under Calicut University</li>
                      <li>Developed core understanding of programming fundamentals, data structures, and web development</li>
                      <li>Participated in college-level tech fests, coding challenges, and workshops</li>
                      <li>Built early mini-projects that laid the foundation for current technical expertise</li>
                    </ul>
                  </div>
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

export default About;
