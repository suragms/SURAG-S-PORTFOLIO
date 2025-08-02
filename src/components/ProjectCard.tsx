import React, { useState } from 'react';
import { Link } from 'lucide-react';
import { Progress } from './ui/progress';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  technologies: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  icon,
  technologies,
  liveUrl,
  sourceUrl,
}) => {
  const [dmClicked, setDmClicked] = useState(false);
  const [showSource, setShowSource] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDmClick = () => {
    setDmClicked(true);
    setShowSource(false);
    setProgress(0);
    const totalDuration = 45 * 1000; // 45 seconds
    const interval = 1000; // update every second
    let elapsed = 0;
    const timer = setInterval(() => {
      elapsed += interval;
      setProgress(Math.min((elapsed / totalDuration) * 100, 100));
      if (elapsed >= totalDuration) {
        clearInterval(timer);
        setShowSource(true);
      }
    }, interval);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group">
      <div className="relative overflow-hidden flex items-center justify-center w-full h-48 bg-gray-100">
        {icon ? (
          <span className="text-7xl flex items-center justify-center w-full h-full">{icon}</span>
        ) : (
          image && (
            <img
              src={`https://images.unsplash.com/${image}`}
              alt={title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
          )
        )}
        {!icon && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {liveUrl && liveUrl !== 'coming-soon' && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Link size={16} />
              Live Now
            </a>
          )}
          {liveUrl === 'coming-soon' && (
            <span className="flex items-center gap-1 px-4 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed">
              <Link size={16} />
              Coming Soon
            </span>
          )}
          {sourceUrl && !dmClicked && (
            <button
              onClick={handleDmClick}
              className="flex items-center gap-1 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              GitHub
            </button>
          )}
          {sourceUrl && dmClicked && !showSource && (
            <div className="flex flex-col items-center w-full">
              <span className="mb-2 text-sm text-gray-500">Processing... Please wait</span>
              <Progress value={progress} className="w-40" />
            </div>
          )}
          {sourceUrl && showSource && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-4 py-2 border border-green-500 text-green-700 rounded-lg hover:border-green-600 transition-colors duration-200"
            >
              Source code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
