import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary-light/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-text-dark tracking-wider">
            make<span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight-start to-highlight-end">better</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="text-text-dark hover:text-highlight-start transition-colors duration-300">{link.title}</a>
            ))}
             <a href="#contact" className="bg-gradient-to-r from-highlight-start to-highlight-end text-white font-semibold py-2 px-5 rounded-full hover:opacity-90 transition-all duration-300 shadow-md">
              Get a Quote
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-text-dark focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-primary-light animate-fade-in shadow-lg">
          <ul className="flex flex-col items-center py-4">
            {navLinks.map((link) => (
              <li key={link.id} className="w-full text-center">
                <a 
                  href={`#${link.id}`} 
                  onClick={() => setIsOpen(false)} 
                  className="block py-3 text-text-dark hover:bg-secondary-light hover:text-highlight-start transition-colors duration-300"
                >
                  {link.title}
                </a>
              </li>
            ))}
             <li className="mt-4">
               <a href="#contact" onClick={() => setIsOpen(false)} className="bg-gradient-to-r from-highlight-start to-highlight-end text-white font-semibold py-2 px-6 rounded-full hover:opacity-90 transition-all duration-300 shadow-md">
                Get a Quote
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;