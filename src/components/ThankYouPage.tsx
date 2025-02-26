// import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 text-green-600">
            <Heart className="h-16 w-16 mx-auto" />
          </div>
          
          <h2 className="text-4xl font-bold mb-4">
            Thank You for Choosing Natural Healing
          </h2>
          
          <p className="text-xl text-gray-600 mb-8">
            Your journey to well-being has begun. We're here to support you every step of the way.
          </p>

          <div className="aspect-video rounded-xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80" 
              alt="Wellness Journey"
              className="w-full h-full object-cover"
            />
          </div>

          <Link
            to="/dashboard"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Explore More Remedies
          </Link>
        </div>
      </div>
    </div>
  );
}