'use client';

import { useState } from 'react';
import { Star, X } from 'lucide-react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div>
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 py-4 px-6 relative mb-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Star className="w-8 h-8 text-yellow-800" />
            <div>
              <h2 className="text-2xl font-bold">Exclusive Deals: Up to 50% OFF!</h2>
              <p className="text-yellow-900">Grab these amazing offers before they vanish!</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-gray-900 text-yellow-400 px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 hover:text-gray-900 transition-transform transform hover:scale-105">
              Shop Now
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-yellow-800 hover:text-gray-900 transition-transform transform hover:scale-105"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}
