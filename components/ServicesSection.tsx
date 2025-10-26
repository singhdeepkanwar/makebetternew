
import React from 'react';
import { services } from '../constants';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-secondary-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">Our AI-Powered Services</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-text-light">We provide a comprehensive suite of AI services designed to tackle your most complex challenges.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
             <div key={service.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms`, opacity: 0 }}>
                <ServiceCard icon={service.icon} title={service.title} description={service.description} />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;