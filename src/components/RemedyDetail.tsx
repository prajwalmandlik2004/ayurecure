// import React from 'react';
import { useParams } from 'react-router-dom';

const remedies = {
  'Soothe Sore Throat': {
    title: 'Soothe Sore Throat',
    image: 'https://example.com/sore-throat.jpg',
    ingredients: ['Turmeric', 'Honey', 'Ginger'],
    frequency: '3 times a day',
    description: 'A natural remedy combining the anti-inflammatory properties of turmeric and ginger with honey\'s soothing effects.',
    instructions: 'Mix 1 tsp turmeric and grated ginger in warm water, add honey. Gargle and sip slowly.'
  },
  'Fever': {
    title: 'Natural Fever Relief',
    image: 'https://example.com/fever.jpg',
    ingredients: ['Holy Basil', 'Ginger', 'Honey'],
    frequency: 'Every 4 hours',
    description: 'A traditional Ayurvedic remedy to help reduce fever and boost immunity.',
    instructions: 'Boil holy basil leaves and ginger in water, strain, add honey. Drink warm.'
  },
  'Cough': {
    title: 'Cough Relief',
    image: 'https://example.com/cough.jpg',
    ingredients: ['Honey', 'Lemon', 'Ginger'],
    frequency: 'As needed',
    description: 'A soothing remedy for cough and throat irritation.',
    instructions: 'Mix honey and lemon juice in warm water. Drink as needed.'
  },
  'Cold': {
    title: 'Cold Relief',
    image: 'https://example.com/cold.jpg',
    ingredients: ['Ginger', 'Honey', 'Lemon'],
    frequency: 'As needed',
    description: 'Helps alleviate cold symptoms and promotes recovery.',
    instructions: 'Prepare ginger tea with honey and lemon. Drink warm.'
  },
  'Acidity': {
    title: 'Acidity Relief',
    image: 'https://example.com/acidity.jpg',
    ingredients: ['Baking Soda', 'Water'],
    frequency: 'As needed',
    description: 'Neutralizes stomach acid and relieves discomfort.',
    instructions: 'Mix 1/2 tsp baking soda in a glass of water. Drink slowly.'
  },
  'Indigestion': {
    title: 'Indigestion Relief',
    image: 'https://example.com/indigestion.jpg',
    ingredients: ['Peppermint', 'Ginger'],
    frequency: 'As needed',
    description: 'Aids digestion and reduces bloating.',
    instructions: 'Drink peppermint tea or chew ginger slices.'
  },
  'Body Pain': {
    title: 'Body Pain Relief',
    image: 'https://example.com/body-pain.jpg',
    ingredients: ['Turmeric', 'Ginger'],
    frequency: 'Every 6-8 hours',
    description: 'Relieves pain and discomfort in the body.',
    instructions: 'Prepare a turmeric and ginger tea. Drink warm.'
  }
  // Add more remedies as needed
};

export default function RemedyDetail() {
  const { illness } = useParams();
  const remedy = remedies[illness as keyof typeof remedies];

  if (!remedy) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-600">Remedy not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-64 overflow-hidden">
            <img 
              src={remedy.image} 
              alt={remedy.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-4">{remedy.title}</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{remedy.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
              <ul className="list-disc list-inside text-gray-600">
                {remedy.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Instructions</h3>
              <p className="text-gray-600">{remedy.instructions}</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Frequency</h3>
              <p className="text-gray-600">Take {remedy.frequency}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
