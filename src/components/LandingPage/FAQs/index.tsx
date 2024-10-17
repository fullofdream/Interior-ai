"use client";

import { useState } from 'react';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'Do you have an affiliate program?',
      answer: 'Yes we do! When you join Interior AI\'s affiliate program you receive a 30% commission on payments for all customers you refer!',
    },
    {
      question: 'How does Interior AI\'s AI Interior Designer work?',
      answer: 'Interior AI lets you upload photos of your current interior, select a style and redesign it. It takes half a minute to generate and then you get photorealistic renders of your new interior.',
    },
    {
      question: 'What AI model do you use?',
      answer: 'We use cutting-edge AI models tailored for photorealistic interior design.',
    },
    {
      question: 'How much does Interior AI cost?',
      answer: 'Pricing depends on the package you choose. We offer different plans to suit your needs.',
    },
    {
      question: 'Do you have an iOS app?',
      answer: 'Yes! You can download our iOS app from the App Store and redesign your interiors on the go.',
    },
    {
      question: 'What do the different modes do?',
      answer: 'We offer different design modes tailored to various room types and design preferences.',
    },
    {
      question: 'Can real estate agents use Interior AI?',
      answer: 'Absolutely! Real estate agents can use our tool to provide clients with virtual redesigns.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen py-10" id="faq">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Frequently asked questions</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src="/images/FAQs.jpg" // Replace with your actual image path
              alt="Interior Design Image"
              className="rounded-lg"
            />
          </div>
          <div>
            {faqData.map((item, index) => (
              <div key={index} className="mb-4">
                <div
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center cursor-pointer p-4 bg-gray-800 rounded-lg"
                >
                  <h3 className="text-lg font-semibold">{item.question}</h3>
                  <span>{activeIndex === index ? '✖' : '+'}</span>
                </div>
                {activeIndex === index && (
                  <div className="p-4 bg-gray-700 rounded-lg mt-2">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;