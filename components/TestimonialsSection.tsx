
import React from 'react';
import { testimonials } from '../constants';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">What Our Clients Say</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-text-light">We're proud to have partnered with incredible companies to drive their success.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
             <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 150}ms`, opacity: 0 }}>
                <TestimonialCard 
                    quote={testimonial.quote} 
                    name={testimonial.name} 
                    title={testimonial.title}
                    avatar={testimonial.avatar}
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;