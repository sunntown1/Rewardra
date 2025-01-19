import React from 'react';
import { UserPlus, Target, Gift } from 'lucide-react';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-[#3b82f6] mb-16">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#3b82f6]/10 rounded-full flex items-center justify-center mb-6">
              <UserPlus className="h-8 w-8 text-[#3b82f6]" />
            </div>
            <h3 className="text-xl font-bold mb-4">Find a Giftcard</h3>
            <p className="text-gray-600">Chose from one of our offers to get your desired Giftcard</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#3b82f6]/10 rounded-full flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-[#3b82f6]" />
            </div>
            <h3 className="text-xl font-bold mb-4">2. Complete Tasks</h3>
            <p className="text-gray-600">Participate in surveys, watch videos, and shop online</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-[#3b82f6]/10 rounded-full flex items-center justify-center mb-6">
              <Gift className="h-8 w-8 text-[#3b82f6]" />
            </div>
            <h3 className="text-xl font-bold mb-4">3. Get Rewarded</h3>
            <p className="text-gray-600">Choose your favorite gift cards and redeem instantly</p>
          </div>
        </div>
      </div>
    </section>
  );
}