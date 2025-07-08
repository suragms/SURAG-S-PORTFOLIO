import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  About Me
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Hello! I'm Surag M S, a passionate software developer and postgraduate student currently pursuing my Master of Computer Applications (MCA) at CCSIT Thalikulam, under Calicut University. I also hold a Bachelor's degree in Computer Applications (BCA) from SNGC Nattika.<br/><br/>
                  With a strong foundation in programming, I specialize in full-stack web development using Python (Django) and JavaScript (React.js), along with a growing interest in Artificial Intelligence and Machine Learning. I'm the creator of Surag Dev Studio, where I showcase my learning journey through real-world projects and experiments in tech.<br/><br/>
                  I'm the creator of Surag Dev Studio, where I showcase my personal projects, including AI-powered tools, full-stack web apps, and experimental UI/UX designs. I enjoy solving real-world problems through code and love building applications that combine functionality with modern aesthetics.<br/><br/>
                  I aim to grow as a Full Stack Developer and AI/ML Engineer, with a focus on building intelligent web applications that make a real difference. I'm especially excited by the potential of combining React.js frontend interfaces with AI-driven backend systems to create highly interactive, real-time user experiences.
                </p>
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">10+</div>
                    <div className="text-gray-600">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">3+</div>
                    <div className="text-gray-600">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">30+</div>
                    <div className="text-gray-600">Clients</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/my.webp"
                  alt="Profile"
                  className="rounded-2xl shadow-2xl w-full max-w-xl mx-auto border-4 border-white"
                />
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
                    2022 – Present
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900">Postgraduate Student – MCA</h3>
                    <p className="text-blue-600 font-medium mb-2">CCSIT Thalikulam, Calicut University</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Advanced coursework in AI, ML, Web Technologies, Data Science, Cryptography, Compiler Design, and more</li>
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
                    <h3 className="text-xl font-semibold text-gray-900">Undergraduate Student – BCA</h3>
                    <p className="text-blue-600 font-medium mb-2">SNGC Nattika, Calicut University</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
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
