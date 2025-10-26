import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a backend service
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-primary-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">Let's Build The Future Together</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-text-light">Have a project in mind or just want to learn more? We'd love to hear from you.</p>
        </div>
        <div className="max-w-2xl mx-auto bg-secondary-light p-8 rounded-lg shadow-md animate-fade-in-up">
            {isSubmitted ? (
                <div className="text-center text-green-800 p-4 bg-green-100 rounded-lg">
                    <h3 className="text-xl font-semibold">Thank You!</h3>
                    <p>Your message has been sent successfully. We will get back to you shortly.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-primary-light border border-border-color rounded-md py-2 px-4 text-text-dark focus:ring-2 focus:ring-highlight-start focus:outline-none transition-all duration-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-primary-light border border-border-color rounded-md py-2 px-4 text-text-dark focus:ring-2 focus:ring-highlight-start focus:outline-none transition-all duration-300"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full bg-primary-light border border-border-color rounded-md py-2 px-4 text-text-dark focus:ring-2 focus:ring-highlight-start focus:outline-none transition-all duration-300"
                        ></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-gradient-to-r from-highlight-start to-highlight-end text-white font-bold py-3 px-6 rounded-full text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Send Message
                        </button>
                    </div>
                </form>
            )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;