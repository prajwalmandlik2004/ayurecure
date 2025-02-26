import { useState } from "react";
import { Search } from "lucide-react";

// Define the structure for our remedy data
interface Remedy {
  illness: string;
  image: string;
  remedyName: string;
  importance: string;
  frequency: string;
  description: string;
}

// Define the illnesses array with proper typing
const illnesses: string[] = [
  "Sore Throat",
  "Fever",
  "Cough",
  "Cold",
  "Acidity",
  "Indigestion",
  "Body Pain",
];

// Sample data for remedies
const remedyData: Remedy[] = [
  {
    illness: "Sore Throat",
    image:
      "https://media.istockphoto.com/id/1289744134/photo/the-girl-has-a-coronavirus-in-her-throat.jpg?s=612x612&w=0&k=20&c=TuQaDpn7scc2z_VdIWjQffAp1v52_-rbO5_6PcPfp24=",
    remedyName: "Honey and Ginger Tea",
    importance: "Soothes inflammation and provides antibacterial properties",
    frequency: "3-4 times daily",
    description:
      "Mix 1 tablespoon of honey with freshly grated ginger in warm water. Sip slowly to coat the throat.",
  },
  {
    illness: "Fever",
    image:
      "https://media.istockphoto.com/id/107429779/photo/sick-woman-laying-in-bed.jpg?s=612x612&w=0&k=20&c=S8tiK3ci1ILD0m_d5Do765Rl0bXhEp7LcF56CSwmLd0=",
    remedyName: "Cold Compress",
    importance: "Helps reduce body temperature naturally",
    frequency: "Every 2-3 hours as needed",
    description:
      "Apply a cool, damp cloth to the forehead, wrists, and neck to help lower body temperature.",
  },
  {
    illness: "Cough",
    image:
      "https://media.istockphoto.com/id/1360229262/photo/sad-child-suffering-from-the-flu.jpg?s=612x612&w=0&k=20&c=PnM0JFKhj5o-3seyevcMvJWjMFL4ncnmz4GMAoKytOk=",
    remedyName: "Honey and Lemon Mix",
    importance: "Reduces cough frequency and soothes irritation",
    frequency: "3-4 times daily",
    description:
      "Mix 2 tablespoons of honey with fresh lemon juice in warm water to soothe cough and clear congestion.",
  },
  {
    illness: "Cold",
    image:
      "https://media.istockphoto.com/id/1078066970/photo/sick-woman-blowing-her-nose.jpg?s=612x612&w=0&k=20&c=ZQEnIELk6I3Kncy2DXvq6oDAeWEKO3knbciFgiINJGg=",
    remedyName: "Steam Inhalation",
    importance: "Clears nasal passages and reduces congestion",
    frequency: "2-3 times daily",
    description:
      "Add a few drops of eucalyptus oil to hot water and inhale the steam for 5-10 minutes with a towel over your head.",
  },
  {
    illness: "Acidity",
    image:
      "https://media.istockphoto.com/id/1371265649/photo/man-with-upset-stomach-pain-due-to-acidity.jpg?s=612x612&w=0&k=20&c=3ttYhrVGUWVgjBQXWi3QmGZxe8EjpjiPOPNwhRLf7tA=",
    remedyName: "Baking Soda Solution",
    importance: "Neutralizes stomach acid quickly",
    frequency: "When needed, but not more than 3 times daily",
    description:
      "Mix 1/2 teaspoon of baking soda in half a glass of water and drink for quick relief from acidity.",
  },
  {
    illness: "Indigestion",
    image:
      "https://media.istockphoto.com/id/1143521331/photo/cartoon-stomach-in-the-woman-belly-filled-with-gas-the-cause-of-flatulence-and-stomach-ache.jpg?s=612x612&w=0&k=20&c=313d2bsWPbd5NzU0jH8GfZE6ckDRSfihvWHhzmFVzwY=",
    remedyName: "Ginger and Mint Tea",
    importance: "Promotes digestion and reduces bloating",
    frequency: "After meals or when experiencing discomfort",
    description:
      "Steep fresh mint leaves and ginger slices in hot water for 5 minutes, strain and sip slowly.",
  },
  {
    illness: "Body Pain",
    image:
      "https://media.istockphoto.com/id/603261996/photo/dont-overdo-it-when-exercising-or-your-body-will-suffer.jpg?s=612x612&w=0&k=20&c=4v7oO67gfEYwiJrkKmZz_hIV3rxeC6d_My_xSMEWi0I=",
    remedyName: "Epsom Salt Bath",
    importance: "Relieves muscle tension and reduces inflammation",
    frequency: "1-2 times per week",
    description:
      "Add 2 cups of Epsom salt to warm bathwater and soak for 15-20 minutes to relieve muscle pain and soreness.",
  },
];

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIllness, setSelectedIllness] = useState<string | null>(null);

  const handleSearch = (selectedQuery: string) => {
    setQuery(selectedQuery);
    setSelectedIllness(selectedQuery);
    setShowDropdown(false);
    onSearch(selectedQuery);
  };

  // Find the remedy for the selected illness
  const selectedRemedy = remedyData.find(
    (remedy) => remedy.illness === selectedIllness
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowDropdown(true);
          }}
          placeholder="Search your illness here..."
          className="w-full px-4 py-3 pl-12 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          onFocus={() => setShowDropdown(true)}
        />
        <Search className="absolute left-4 top-3.5 h-5 w-5 text-green-600" />
      </div>

      {showDropdown && (
        <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border border-green-100 z-50 max-w-2xl">
          {illnesses
            .filter((illness) =>
              illness.toLowerCase().includes(query.toLowerCase())
            )
            .map((illness, index) => (
              <button
                key={index}
                className="w-full text-left px-4 py-2 hover:bg-green-50 transition-colors"
                onClick={() => handleSearch(illness)}
              >
                {illness}
              </button>
            ))}
        </div>
      )}

      {/* Display remedy details when an illness is selected */}
      {selectedRemedy && (
        <div className="mt-6 bg-white rounded-lg shadow-md overflow-hidden border border-green-100">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={selectedRemedy.image}
                alt={selectedRemedy.remedyName}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6 md:w-2/3">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-green-700">
                    {selectedRemedy.illness}
                  </h2>
                  <h3 className="text-xl text-green-600 mt-1">
                    {selectedRemedy.remedyName}
                  </h3>
                </div>
                <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  {selectedRemedy.frequency}
                </span>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold text-gray-700">Importance:</h4>
                <p className="text-gray-600 mt-1">
                  {selectedRemedy.importance}
                </p>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold text-gray-700">How to Use:</h4>
                <p className="text-gray-600 mt-1">
                  {selectedRemedy.description}
                </p>
              </div>

              <div className="mt-6">
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                  Save Remedy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
