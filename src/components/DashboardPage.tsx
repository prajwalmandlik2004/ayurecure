// import React from 'react';
import { Link } from "react-router-dom";

const ingredients = [
  {
    name: "Turmeric",
    image:
      "https://media.istockphoto.com/id/1255965862/photo/turmeric-powder-and-fresh-turmeric-root-on-grey-concrete-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=OWr99u5eIsNwknOvWpzaLt3E9QWbeUyPP8LwMXFOKO8=",
    benefits: ["Anti-inflammatory", "Immunity booster", "Natural antiseptic"],
  },
  {
    name: "Holy Basil (Tulsi)",
    image: "https://i.ibb.co/jvGVgtm5/tulsi.jpg",
    benefits: ["Stress relief", "Respiratory health", "Immunity support"],
  },
  {
    name: "Ginger",
    image:
      "https://media.istockphoto.com/id/537209849/photo/pieces-of-root-ginger-with-some-grated-in-a-dish.webp?a=1&b=1&s=612x612&w=0&k=20&c=lYB_kle3EuIniPK9FLD0cGruB_CUtywqvR3znCuj0T4=",
    benefits: ["Digestive aid", "Anti-inflammatory", "Cold and flu relief"],
  },
  {
    name: "Mint",
    image:
      "https://media.istockphoto.com/id/499696575/photo/as.webp?a=1&b=1&s=612x612&w=0&k=20&c=3SMMmx8-o1Q8IrPsnJhkby6c04GiQ0sGXud1jCbjamE=",
    benefits: ["Digestive health", "Fresh breath", "Cooling properties"],
  },
  {
    name: "Lemon",
    image:
      "https://images.unsplash.com/photo-1582087463261-ddea03f80e5d?auto=format&fit=crop&q=80",
    benefits: ["Vitamin C rich", "Detoxification", "Immunity boost"],
  },
  {
    name: "Spices Mix",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80",
    benefits: [
      "Flavor enhancement",
      "Medicinal properties",
      "Digestive health",
    ],
  },
];

export default function DashboardPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Available Ingredients
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Explore our collection of powerful Ayurvedic ingredients
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={ingredient.image}
                    alt={ingredient.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {ingredient.name}
                  </h3>
                  <ul className="space-y-2">
                    {ingredient.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/remedies/${ingredient.name.toLowerCase()}`}
                    className="mt-4 inline-block text-green-600 font-semibold hover:text-green-800"
                  >
                    View Remedies →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
