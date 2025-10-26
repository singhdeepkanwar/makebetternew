import React from 'react';
import { navLinks } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-light border-t border-border-color">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
             <a href="#home" className="text-2xl font-bold text-text-dark tracking-wider">
                make<span className="text-transparent bg-clip-text bg-gradient-to-r from-highlight-start to-highlight-end">better</span>
            </a>
            <p className="text-sm mt-2 text-text-light">Pioneering AI for a better tomorrow.</p>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
             {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="text-text-dark hover:text-highlight-start transition-colors duration-300">{link.title}</a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border-color text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} makebetter technology. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;