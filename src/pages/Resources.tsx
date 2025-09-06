import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Book, File, Image } from 'lucide-react';

const Resources = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const resources = [
    {
      category: 'Articles & Tutorials',
      icon: <Book className="text-blue-600" size={24} />,
      items: [
        { title: 'Deploying Django on Render with SQLite', type: 'Guide', description: 'Step-by-step deployment for beginners', url: '#' },
        { title: 'Building Intelligent Chatbots with Rasa', type: 'Tutorial', description: 'From intent classification to custom actions', url: '#' },
        { title: 'Stress Detection with Random Forest in scikit-learn', type: 'Article', description: 'ML model building, preprocessing, and evaluation', url: '#' },
        { title: 'Integrating Chart.js with Django', type: 'Guide', description: 'Display real-time data in web apps', url: '#' },
      ]
    },
    {
      category: 'Code Snippets',
      icon: <File className="text-green-600" size={24} />,
      items: [
        { title: 'Django Custom User Model Template', type: 'Code', description: 'Easy-to-extend base user model', url: '#' },
        { title: 'Form Validation in Vanilla JS', type: 'Code', description: 'Reusable script for client-side validation', url: '#' },
        { title: 'Min-Max Normalization Function (Python)', type: 'Code', description: 'Standard preprocessing function for ML', url: '#' },
        { title: 'Reusable Loading Spinner (CSS)', type: 'Code', description: 'Simple and responsive loader for web apps', url: '#' },
      ]
    },
    {
      category: 'Design Resources',
      icon: <Image className="text-purple-600" size={24} />,
      items: [
        { title: 'Responsive UI Layout Templates (HTML/CSS)', type: 'Resource', description: 'Grid & flex-based layout samples', url: '#' },
        { title: 'Color Palette Generator', type: 'Tool', description: 'Choose harmonious UI color schemes', url: '#' },
        { title: 'Free Icon Sets (Feather, Lucide, Heroicons)', type: 'Resource', description: 'SVG-based icon packs for web and mobile', url: '#' },
        { title: 'Typography Guidelines for Web', type: 'Guide', description: 'Best practices for readable UI', url: '#' },
      ]
    }
  ];

  const tools = [
    { name: 'VS Code Extensions', description: 'My essential VS Code extensions for web development', category: 'Development' },
    { name: 'Design Tools', description: 'Figma plugins and resources I use regularly', category: 'Design' },
    { name: 'Productivity Apps', description: 'Tools that help me stay organized and productive', category: 'Productivity' },
    { name: 'Learning Platforms', description: 'Best platforms for continuous learning', category: 'Education' },
  ];

  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Resources & Tools
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A curated collection of tools, learning resources, and code snippets that have helped me grow as a developer. These cover full-stack development, AI/ML, design, and productivity. Feel free to explore and use them!
            </p>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {resources.map((section, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    {section.icon}
                    <h2 className="text-2xl font-bold text-gray-900 ml-3">
                      {section.category}
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-b border-gray-100 pb-4 last:border-b-0">
                        <a
                          href={item.url}
                          className="block hover:text-blue-600 transition-colors duration-200"
                        >
                          <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {item.type}
                          </span>
                          {item.description && (
                            <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                          )}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Recommended Tools & Platforms
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Development & IDEs */}
              <div className="bg-gray-50 rounded-xl shadow-lg p-8 mb-8 relative">
                <span className="absolute top-6 right-8 bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1 rounded-full">Development</span>
                <h3 className="text-2xl font-semibold mb-4">Development & IDEs</h3>
                <ul className="space-y-2">
                  <li><b>VS Code</b> – Lightweight and extensible code editor for frontend/backend work</li>
                  <li><b>PyCharm</b> – Professional IDE for Django and Python development</li>
                  <li><b>Cursor AI</b> – AI-powered code editor with ChatGPT integration</li>
                  <li><b>Wrap</b> – Dev workspace with AI-powered documentation and debugging</li>
                </ul>
              </div>
              {/* Hosting & Deployment */}
              <div className="bg-gray-50 rounded-xl shadow-lg p-8 mb-8 relative">
                <span className="absolute top-6 right-8 bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1 rounded-full">Deployment</span>
                <h3 className="text-2xl font-semibold mb-4">Hosting & Deployment</h3>
                <ul className="space-y-2">
                  <li><b>Render</b> – Ideal for deploying Django apps and REST APIs</li>
                  <li><b>Netlify</b> – Great for deploying static and frontend sites</li>
                  <li><b>Vercel</b> – Seamless CI/CD for frontend frameworks like React</li>
                </ul>
              </div>
              {/* AI Assistants & Coding Tools */}
              <div className="bg-gray-50 rounded-xl shadow-lg p-8 mb-8 relative">
                <span className="absolute top-6 right-8 bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1 rounded-full">AI</span>
                <h3 className="text-2xl font-semibold mb-4">AI Assistants & Coding Tools</h3>
                <ul className="space-y-2">
                  <li><b>ChatGPT</b> – Daily AI companion for coding, content, and debugging</li>
                  <li><b>Microsoft Copilot</b> – GitHub & VS Code AI development assistant</li>
                  <li><b>Kim AI</b> – Lightweight productivity-focused AI assistant</li>
                  <li><b>Meta AI</b> – Open-source LLaMA model for generative tasks</li>
                  <li><b>Loveable AI</b> – AI for design support and creative content</li>
                  <li><b>Bolts AI</b> – Developer agent for code snippets, API testing, and automation</li>
                  <li><b>DeepSeek AI</b> – Advanced model for deep reasoning and development</li>
                  <li><b>Grok AI</b> – AI assistant designed for technical problem-solving</li>
                  <li><b>Gemini</b> – Google's AI for research, writing, and development</li>
                  <li><b>Cloud AI</b> – Google Cloud APIs for ML, NLP, and real-time AI integration</li>
                </ul>
              </div>
              {/* Design & UI Tools */}
              <div className="bg-gray-50 rounded-xl shadow-lg p-8 mb-8 relative">
                <span className="absolute top-6 right-8 bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1 rounded-full">Design</span>
                <h3 className="text-2xl font-semibold mb-4">Design & UI Tools</h3>
                <ul className="space-y-2">
                  <li><b>Figma</b> – Interface design, prototyping, and collaborative UI work</li>
                  <li><b>Color Palette Generator</b> – Build aesthetic, cohesive color schemes</li>
                  <li><b>Lucide / Feather Icons</b> – Free and clean SVG icon libraries</li>
                </ul>
              </div>
              {/* API & Testing Tools */}
              <div className="bg-gray-50 rounded-xl shadow-lg p-8 mb-8 relative">
                <span className="absolute top-6 right-8 bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1 rounded-full">API</span>
                <h3 className="text-2xl font-semibold mb-4">API & Testing Tools</h3>
                <ul className="space-y-2">
                  <li><b>Postman</b> – API testing, mock servers, and collection management</li>
                  <li><b>Django REST Framework UI</b> – Built-in interface for testing and browsing APIs</li>
                </ul>
              </div>
              {/* Productivity & Organization */}
              <div className="bg-gray-50 rounded-xl shadow-lg p-8 mb-8 relative">
                <span className="absolute top-6 right-8 bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1 rounded-full">Productivity</span>
                <h3 className="text-2xl font-semibold mb-4">Productivity & Organization</h3>
                <ul className="space-y-2">
                  <li><b>Notion</b> – All-in-one tool for task management, docs, and planning</li>
                  <li><b>Trello</b> – Visual project management using kanban boards</li>
                  <li><b>Linktree</b> – One link to organize and share all my profiles and projects</li>
                </ul>
              </div>
              {/* Learning & Education */}
              <div className="bg-gray-50 rounded-xl shadow-lg p-8 mb-8 relative">
                <span className="absolute top-6 right-8 bg-blue-100 text-blue-600 text-sm font-medium px-4 py-1 rounded-full">Education</span>
                <h3 className="text-2xl font-semibold mb-2">Learning & Education</h3>
                <div className="mb-2 font-semibold">YouTube Channels</div>
                <ul className="space-y-2 mb-4">
                  <li><b>Traversy Media</b> – Full-stack development tutorials and real projects</li>
                  <li><b>Krish Naik</b> – Machine learning, AI, and data science content</li>
                  <li><b>CodeWithHarry</b> – Web development in Hindi for beginners and intermediates</li>
                  <li><b>Brototype</b> – Project-based developer training and industry preparation</li>
                  <li><b>Apna College</b> – DSA, web dev, and system design for students</li>
                </ul>
                <div className="mb-2 font-semibold">Courses & Programs</div>
                <ul className="space-y-2">
                  <li><b>Coursera</b> – Machine Learning by Andrew Ng</li>
                  <li><b>Udemy</b> – Django, Python, React, and full-stack development</li>
                  <li><b>DWMS KLDC</b> – Data Analysis Program<br />Training in data preprocessing, visualization, Excel, and pandas</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Want updates on my latest projects, tutorials, and developer resources?
            Subscribe to receive occasional insights directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                onClick={() => {
                  const gmailUrl = `https://mail.google.com/mail/?view=cm&to=officialsurag@gmail.com&su=Newsletter%20Subscription&body=Please%20subscribe%20me%20to%20the%20newsletter.%20My%20email%20is%20${encodeURIComponent(email)}`;
                  window.open(gmailUrl, '_blank');
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
