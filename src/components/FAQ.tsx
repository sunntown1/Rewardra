import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Is Rewardra free to join?",
    answer: "Yes! Rewardra is completely free to join and use, providing anyone with the opportunity to earn extra money."
  },
  {
    question: "How do I complete offers or tasks to earn rewards?",
    answer: "Simply find the reward you'd like to earn and click on the corresponding link. Complete the surveys and offers to accumulate points."
  },
  {
    question: "How long does it take to receive my reward?",
    answer: "Rewards are typically delivered within 1 to 3 days."
  },
  {
    question: "Can I track my progress?",
    answer: "Yes! You can track your progress through the Rewardra site. You also have the option to add your phone number for SMS alerts to keep you informed about your reward status."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#3b82f6] mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-md"
            >
              <button
                className="w-full px-8 py-6 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`h-5 w-5 text-[#3b82f6] transition-transform duration-300 ease-in-out ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-48 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}