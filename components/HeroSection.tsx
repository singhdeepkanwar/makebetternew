import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-text-dark bg-primary-light pt-20">
      <div className="container mx-auto px-6 text-center z-20">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
            Transforming Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight-start to-highlight-end">Intelligent Solutions</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 text-text-light">
            We are makebetter technology. We leverage cutting-edge AI to drive growth, efficiency, and innovation for your business.
          </p>
          <a href="#services" className="bg-gradient-to-r from-highlight-start to-highlight-end text-white font-bold py-3 px-8 rounded-full text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;