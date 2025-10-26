import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-primary-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1593349480503-685d3a5a2f3a?q=80&w=1932&auto=format&fit=crop"
              alt="AI Innovation"
              className="rounded-lg shadow-xl object-cover"
            />
          </div>
          <div className="lg:w-1/2 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight-start to-highlight-end">makebetter</span>?</h2>
            <p className="mb-6 text-lg text-text-light">
              At makebetter technology, we're not just developers; we're your strategic partners in innovation. Our mission is to democratize artificial intelligence, making its power accessible to businesses of all sizes to solve real-world problems.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-highlight-start mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span className="text-text-light"><strong className="text-text-dark">Expert Team:</strong> Our consultants are industry leaders with deep expertise in machine learning, data science, and AI strategy.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-highlight-start mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span className="text-text-light"><strong className="text-text-dark">Tailored Solutions:</strong> We reject one-size-fits-all approaches. Every solution is custom-built to meet your unique business objectives.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-highlight-start mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span className="text-text-light"><strong className="text-text-dark">Measurable Impact:</strong> We focus on delivering tangible results, from increased revenue and cost savings to enhanced customer experiences.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;