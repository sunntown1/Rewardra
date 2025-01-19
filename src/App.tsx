import React, { useState } from "react";
import { Header } from "./components/Header";
import { TrustStats } from "./components/TrustStats";
import { HowItWorks } from "./components/HowItWorks";
import { EmailSignup } from "./components/EmailSignup"; // Updated import path
import { FAQ } from "./components/FAQ";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const App: React.FC = () => {
  const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(true);

  const handleAcceptCookies = () => {
    setIsCookieBannerVisible(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8faff] via-white to-[#fff8f1]">
      <Header />
      <main>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gray-80 rounded-3xl transform -rotate-1"></div>
            <div className="relative">
              <h1 className="text-4xl md:text-6xl font-bold text-[#3b82f6] mb-6">
                Turn Simple Tasks into Gift Card Rewards
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                100% Free to Join • No Credit Card Required • Instant Rewards
              </p>
              <Link
                to="/gift-cards"
                className="inline-block bg-[#fb923c] text-white text-lg px-8 py-4 rounded-full hover:bg-[#f97316] transition-all duration-300 shadow-lg transform hover:-translate-y-0.5"
              >
                Start Earning Now
              </Link>
            </div>
          </div>
          <TrustStats />
        </section>
        <HowItWorks />
        <EmailSignup />
        <FAQ />
      </main>
      {isCookieBannerVisible && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 sm:mb-0">
              We use cookies to improve your experience. By continuing to use our site, you agree to our cookie policy.
            </p>
            <button
              onClick={handleAcceptCookies}
              className="bg-[#3b82f6] text-white px-6 py-2 rounded-full hover:bg-[#2563eb] transition-all duration-300"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
