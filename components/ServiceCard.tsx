import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-primary-light p-8 rounded-lg shadow-md h-full transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl border border-border-color hover:border-highlight-start/50">
      <div className="mb-4 text-highlight-start">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-text-dark">{title}</h3>
      <p className="text-text-light">{description}</p>
    </div>
  );
};

export default ServiceCard;