import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export function EmailSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your email submission logic here
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Mail className="h-8 w-8 text-[#3b82f6]" />
          </div>
          <h2 className="text-3xl font-bold text-[#3b82f6] mb-4">
            Get Exclusive Rewards
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter and receive special offers, early access to new rewards, and exclusive deals!
          </p>
          
          {isSubmitted ? (
            <div className="bg-green-100 text-green-700 p-4 rounded-lg">
              Thank you for subscribing! Check your email for exclusive offers.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] flex-1 max-w-md"
              />
              <button
                type="submit"
                className="bg-[#fb923c] text-white px-8 py-3 rounded-full hover:bg-[#f97316] transition-all duration-300 shadow-lg transform hover:-translate-y-0.5"
              >
                Subscribe Now
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}