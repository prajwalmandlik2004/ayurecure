// import React from 'react';
import {
  ArrowRight,
  Leaf,
  Heart,
  BookOpen,
  Star,
  Shield,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

const popularRemedies = [
  {
    name: "Sore Throat Relief",
    ingredients: "Turmeric, Honey, Ginger",
    image:
      "https://media.istockphoto.com/id/1255965862/photo/turmeric-powder-and-fresh-turmeric-root-on-grey-concrete-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=OWr99u5eIsNwknOvWpzaLt3E9QWbeUyPP8LwMXFOKO8=",
  },
  {
    name: "Immunity Booster",
    ingredients: "Holy Basil, Ginger, Honey",
    image:
      "https://media.istockphoto.com/id/1297400135/photo/mint-thyme-ginger-root-lemon-honey-and-brown-sugar-on-wooden-plate-ingredients-for-making.webp?a=1&b=1&s=612x612&w=0&k=20&c=dESAFLJGD72k74bQQ_wwiYOoJL_9k-M-VAhYcqA407k=",
  },
  {
    name: "Digestive Aid",
    ingredients: "Mint, Ginger, Lemon",
    image:
      "https://media.istockphoto.com/id/1300100432/photo/ingredients-for-ginger-tea-with-lemon-honey-and-mint-lemon-ginger-honey-and-lemon-balm-on-the.jpg?s=612x612&w=0&k=20&c=Oui5zShydXIrUbIfk3jg4lbBxsKmuEb-WGAeClXsoy0=",
  },
];

export default function WelcomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              WELCOME TO AYURCURE
            </h1>
            <p className="text-2xl md:text-3xl mb-8">
              Discover the Power of Ayurveda
            </p>
            <Link
              to="/dashboard"
              className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <span>Start Your Wellness Journey</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Ayurcure?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-green-600 mb-4">
                <Leaf className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Natural Remedies</h3>
              <p className="text-gray-600">
                Experience the healing power of nature with our traditional
                Ayurvedic remedies.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-green-600 mb-4">
                <Shield className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Safe & Effective</h3>
              <p className="text-gray-600">
                Time-tested remedies that are safe and proven to be effective.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-green-600 mb-4">
                <Clock className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quick Relief</h3>
              <p className="text-gray-600">
                Find instant solutions for common health concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Remedies Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Popular Remedies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularRemedies.map((remedy, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={remedy.image}
                    alt={remedy.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{remedy.name}</h3>
                  <p className="text-gray-600 mb-4">
                    Ingredients: {remedy.ingredients}
                  </p>
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Benefits of Ayurveda</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 bg-green-50 rounded-lg">
                <div className="text-green-600 mb-4">
                  <Heart className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Holistic Healing</h3>
                <p className="text-gray-600">
                  Treats the root cause, not just symptoms
                </p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg">
                <div className="text-green-600 mb-4">
                  <BookOpen className="h-8 w-8 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ancient Wisdom</h3>
                <p className="text-gray-600">
                  5000+ years of proven healing knowledge
                </p>
              </div>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 text-green-600 font-semibold hover:text-green-700"
            >
              <span>Learn More About Ayurveda</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


