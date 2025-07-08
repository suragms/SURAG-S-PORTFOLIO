import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating?: number; // default to 5
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  content,
  avatar,
  rating = 5,
}) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
      <img
        src={`https://images.unsplash.com/${avatar}?auto=format&fit=facearea&w=96&h=96&facepad=2`}
        alt={name || 'Client avatar'}
        className="w-20 h-20 rounded-full object-cover mb-4"
      />
      <blockquote className="text-gray-700 italic leading-relaxed mb-4">“{content}”</blockquote>
      <div className="flex items-center justify-center mb-2">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
          </svg>
        ))}
      </div>
      <div className="font-semibold text-gray-900">{name}</div>
      <div className="text-sm text-gray-500">{role}, {company}</div>
    </div>
  );
};

export default TestimonialCard;
