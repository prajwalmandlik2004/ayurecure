// import React from 'react';
import { Leaf, Heart, BookOpen } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Ayurcure</h2>
          <p className="text-xl text-gray-600 mb-12">
            Ayurcure brings the ancient wisdom of Ayurveda to modern wellness seekers. 
            We believe in the power of natural healing and holistic well-being.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-green-50 rounded-lg">
              <div className="text-green-600 mb-4">
                <Leaf className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Natural Remedies</h3>
              <p className="text-gray-600">Traditional healing methods using nature's finest ingredients</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <div className="text-green-600 mb-4">
                <Heart className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Holistic Healing</h3>
              <p className="text-gray-600">Treating the root cause for complete wellness</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <div className="text-green-600 mb-4">
                <BookOpen className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ancient Wisdom</h3>
              <p className="text-gray-600">5000+ years of proven healing knowledge</p>
            </div>
          </div>

          <div className="aspect-video rounded-xl overflow-hidden mb-12">
            <img 
              src="https://media.istockphoto.com/id/855014754/photo/turmeric-powder-turmeric-in-mortar-grinder-drugs-and-ingredient-herbs-on-wooden-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=T0OQ-aerJxTKFaX2tCuk1A9COzwB_mDoniBIlmbqzcE="
              alt="Ayurvedic Ingredients"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg mx-auto">
            <p>
              Our mission is to make Ayurvedic healing accessible to everyone. We provide carefully 
              curated remedies and expert guidance to help you achieve optimal health naturally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}