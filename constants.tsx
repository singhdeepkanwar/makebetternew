
import React from 'react';

export const navLinks = [
  { id: 'services', title: 'Services' },
  { id: 'about', title: 'About Us' },
  { id: 'testimonials', title: 'Testimonials' },
  { id: 'contact', title: 'Contact' },
];

const iconClass = "w-10 h-10";

export const services = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    title: 'AI Automation',
    description: 'Automate complex business processes and workflows with intelligent bots and AI agents to increase efficiency and reduce operational costs.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    title: 'Machine Learning Models',
    description: 'Develop and deploy custom machine learning models that provide predictive insights, classification, and data-driven decision-making capabilities.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
    title: 'Natural Language Processing',
    description: 'Unlock insights from text data. We build solutions for sentiment analysis, chatbots, text summarization, and language understanding.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
    title: 'Data Strategy & Analytics',
    description: 'Transform your raw data into a strategic asset. We help you establish robust data pipelines, analytics platforms, and visualization dashboards.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
    title: 'Computer Vision',
    description: 'Implement AI-powered image and video analysis for object detection, facial recognition, and quality control in manufacturing and other industries.'
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>,
    title: 'AI Product Development',
    description: 'From ideation to launch, we guide you through the entire lifecycle of building and scaling AI-driven products and applications.'
  }
];

export const testimonials = [
  {
    quote: "makebetter technology completely transformed our data analytics capabilities. Their machine learning model has given us insights we never thought possible, leading to a 20% increase in sales.",
    name: 'Jane Doe',
    title: 'CEO, Innovate Corp',
    avatar: 'https://picsum.photos/seed/person1/100/100'
  },
  {
    quote: "The AI automation solution they built for us reduced our manual data entry by 95%. The team was professional, agile, and delivered beyond our expectations. A true partner in innovation.",
    name: 'John Smith',
    title: 'COO, Tech Solutions Ltd.',
    avatar: 'https://picsum.photos/seed/person2/100/100'
  },
  {
    quote: "Working with makebetter was a game-changer. Their expertise in NLP helped us launch an intelligent chatbot that has improved our customer satisfaction score by 30 points. Highly recommended!",
    name: 'Emily White',
    title: 'Head of Customer Experience, GlobalMart',
    avatar: 'https://picsum.photos/seed/person3/100/100'
  }
];
