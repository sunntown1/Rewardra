import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close the mobile menu after clicking
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img
              src="https://i.ibb.co/vqvSLCC/Gemini-Generated-Image-ygpw7oygpw7oygpw-removebg-preview.png"
              alt="Rewardra Logo"
              className="h-16 w-16"
            />
            <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3b82f6] to-[#3b82f6]">
              Rewardra
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#1e3a8a]">
              Home
            </Link>
            <Link to="/gift-cards" className="text-gray-700 hover:text-[#1e3a8a]">
              Gift Cards
            </Link>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-[#1e3a8a]"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-[#1e3a8a]"
            >
              FAQ
            </button>
          </nav>
          <div className="hidden md:flex">
            <Link
              to="/gift-cards"
              className="bg-gradient-to-r from-[#fb923c] to-[#f97316] text-white px-6 py-2 rounded-full hover:from-[#f97316] hover:to-[#ea580c] transition-all duration-300"
            >
              Start Earning Now
            </Link>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700">
              Home
            </Link>
            <Link to="/gift-cards" className="block px-3 py-2 text-gray-700">
              Gift Cards
            </Link>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-3 py-2 text-gray-700"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left px-3 py-2 text-gray-700"
            >
              FAQ
            </button>
            <Link
              to="/gift-cards"
              className="block w-full bg-gradient-to-r from-[#fb923c] to-[#f97316] text-white px-6 py-2 rounded-full hover:from-[#f97316] hover:to-[#ea580c] transition-all duration-300 text-center"
            >
              Start Earning Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
