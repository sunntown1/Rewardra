import React from 'react';
import { DollarSign, Users, Star } from 'lucide-react';

export function TrustStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
      <div className="flex flex-col items-center p-6 bg-white/50 rounded-lg">
        <DollarSign className="h-8 w-8 text-[#3b82f6] mb-2" />
        <h3 className="text-2xl font-bold text-[#3b82f6]">$500,000+</h3>
        <p className="text-gray-600">Rewards Paid</p>
      </div>
      
      <div className="flex flex-col items-center p-6 bg-white/50 rounded-lg">
        <Users className="h-8 w-8 text-[#3b82f6] mb-2" />
        <h3 className="text-2xl font-bold text-[#3b82f6]">75,000+</h3>
        <p className="text-gray-600">Giftcards Delivered</p>
      </div>
      
      <div className="flex flex-col items-center p-6 bg-white/50 rounded-lg">
        <Star className="h-8 w-8 text-[#3b82f6] mb-2" />
        <h3 className="text-2xl font-bold text-[#3b82f6]">4.8/5</h3>
        <p className="text-gray-600">User Rating</p>
      </div>
    </div>
  );
}