import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, avatar }) => {
  return (
    <div className="bg-primary-light p-8 rounded-lg shadow-md h-full flex flex-col justify-between relative overflow-hidden border border-border-color">
        <svg className="absolute top-0 left-0 w-24 h-24 text-gray-100 transform -translate-x-4 -translate-y-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/>
        </svg>
      <p className="text-text-light italic mb-6 z-10">"{quote}"</p>
      <div className="flex items-center z-10">
        <img className="w-12 h-12 rounded-full mr-4 object-cover" src={avatar} alt={name} />
        <div>
          <p className="font-bold text-text-dark">{name}</p>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;