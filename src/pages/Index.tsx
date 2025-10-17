import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';

const Index = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGetInTouchClick = () => {
    // Scroll to top first, then navigate
    window.scrollTo(0, 0);
  };
  const featuredProjects = [
    {
      title: 'HeyAuto',
      description: 'A modern auto rickshaw booking application built for Vadanappally, Kerala. Features real-time tracking, driver management, user authentication, and an admin dashboard with live system metrics.',
      icon: '🛺',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Leaflet', 'shadcn/ui'],
      liveUrl: 'https://heyauto.netlify.app/',
      sourceUrl: 'https://www.instagram.com/surag_sunil?message=Hi! I\'m interested in your HeyAuto project for Vadanappally, Kerala. Can you tell me more about it?'
    },
    {
      title: 'Sura Ai',
      description: 'A React-based AI assistant integrating Google Gemini API for text generation and insights. Features prompt editing, response streaming, and a clean, responsive UI.',
      logoUrl: 'https://sura-ai.netlify.app/assets/sura-ai-logo-CG8cTirE.png',
      icon: '🤖',
      technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Gemini API'],
      liveUrl: 'https://sura-ai.netlify.app/',
      sourceUrl: 'https://www.instagram.com/surag_sunil?message=Hi! I\'m interested in your Sura Ai project integrated with Gemini API. Can you tell me more about it?'
    },
    {
      title: 'Stress Detection for IT Professionals',
      description: 'A stress detection system for IT professionals using physiological and behavioral data.',
      icon: '🧠',
      // image: '/Stress.png',
      technologies: ['Django', 'scikit-learn', 'SQLite3', 'Rasa'],
      liveUrl: 'https://stress-detection-for-it-professionals.onrender.com',
      sourceUrl: 'https://www.instagram.com/surag_sunil?message=Hi! I\'m interested in your Stress Detection for IT Professionals project. Can you tell me more about it?'
    },
    {
      title: 'Bounce Game',
      description: 'A fun web-based bouncing ball game created as a learning project. Uses canvas animation, game logic, and responsive design techniques.',
      image: 'photo-1504608524841-42fe6f032b4b',
      technologies: ['React', 'Html5', 'JavaScript', 'CSS3'],
      liveUrl: 'https://bouncegame2025.netlify.app',
      sourceUrl: 'https://www.instagram.com/surag_sunil?message=Hi! I\'m interested in your Bounce Game – React Edition project. Can you tell me more about it?',
      icon: '🏀'
    }
  ];

  // Load user feedbacks saved via Feedback page
  const [feedbacks, setFeedbacks] = useState<Array<{ name: string; email: string; message: string; createdAt: string }>>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('feedbacks');
      const parsed = stored ? JSON.parse(stored) : [];
      if (Array.isArray(parsed)) {
        setFeedbacks(parsed);
      }
    } catch (err) {
      console.error('Failed to load feedbacks', err);
    }
  }, []);

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
          
          <div className="relative" style={{ perspective: '1200px' }}>
            <Carousel
              opts={{ align: 'start', loop: true }}
              className="w-full"
              setApi={(api) => {
                // store api on window for debugging or future hooks if needed
                (window as any).__featuredCarouselApi = api;

                if (!api) return;

                const updateTransforms = () => {
                  const selected = api.selectedScrollSnap();
                  const slideNodes = document.querySelectorAll('[data-3d-slide]') as NodeListOf<HTMLDivElement>;
                  slideNodes.forEach((node) => {
                    const idxAttr = node.getAttribute('data-3d-index');
                    const idx = idxAttr ? parseInt(idxAttr, 10) : 0;
                    const diff = idx - selected;
                    const clamped = Math.max(-2, Math.min(2, diff));
                    const rotateY = clamped * -25;
                    const translateZ = -Math.abs(clamped) * 80;
                    const translateX = clamped * 20;
                    const scale = 1 - Math.abs(clamped) * 0.06;
                    node.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
                    node.style.opacity = `${1 - Math.abs(clamped) * 0.15}`;
                  });
                };

                api.on('select', updateTransforms);
                api.on('reInit', updateTransforms);
                // initial
                setTimeout(updateTransforms, 0);

                // autoplay
                let autoplayId: number | null = null;
                const startAutoplay = () => {
                  stopAutoplay();
                  autoplayId = window.setInterval(() => {
                    api.scrollNext();
                  }, 3500);
                };
                const stopAutoplay = () => {
                  if (autoplayId) {
                    clearInterval(autoplayId);
                    autoplayId = null;
                  }
                };
                startAutoplay();
                const container = document.querySelector('[aria-roledescription="carousel"]');
                if (container) {
                  container.addEventListener('mouseenter', stopAutoplay);
                  container.addEventListener('mouseleave', startAutoplay);
                }
              }}
            >
              <CarouselContent>
                {featuredProjects.map((project, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div
                      className="transition-transform duration-500 ease-out"
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                      data-3d-slide
                      data-3d-index={index}
                    >
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        technologies={project.technologies}
                        liveUrl={project.liveUrl}
                        sourceUrl={project.sourceUrl}
                        icon={project.icon}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 md:-left-6" />
              <CarouselNext className="-right-4 md:-right-6" />
            </Carousel>
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

      {/* Testimonials / Feedback CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              I'd love to hear about your experience. Share your feedback to be featured here.
            </p>
          </div>

          {/* Render saved feedbacks if any */}
          {feedbacks.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {feedbacks.map((fb, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <blockquote className="text-gray-700 italic leading-relaxed mb-4">“{fb.message}”</blockquote>
                  <div className="font-semibold text-gray-900">{fb.name}</div>
                  <div className="text-sm text-gray-500">{new Date(fb.createdAt).toLocaleDateString()}</div>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center justify-center mt-8">
            <Link
              to="/feedback"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Share Your Feedback
            </Link>
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
              onClick={handleGetInTouchClick}
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
