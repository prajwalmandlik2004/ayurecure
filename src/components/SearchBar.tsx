import { useState, useRef, useEffect } from "react";
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
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  // Filter illnesses based on search query
  const filteredIllnesses = illnesses.filter((illness) =>
    illness.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-green-100">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Find Natural Remedies</h2>
        <p className="text-gray-600 mb-6">Search for common ailments and discover effective home remedies</p>
        
        <div className="relative">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <div className="relative bg-white rounded-lg overflow-hidden">
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowDropdown(true);
                }}
                placeholder="What symptoms are you experiencing?"
                className="w-full px-4 py-4 pl-12 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                onFocus={() => setShowDropdown(true)}
              />
              <Search className="absolute left-4 top-4 h-6 w-6 text-green-600" />
              {query.length > 0 && (
                <button
                  onClick={() => {
                    setQuery("");
                    setSelectedIllness(null);
                  }}
                  className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {showDropdown && filteredIllnesses.length > 0 && (
            <div
              ref={dropdownRef}
              className="absolute w-full mt-2 bg-white rounded-lg shadow-xl border border-green-100 z-50 overflow-hidden max-h-64 overflow-y-auto"
            >
              {filteredIllnesses.map((illness, index) => (
                <button
                  key={index}
                  className="w-full text-left px-6 py-3 hover:bg-green-50 transition-colors flex items-center space-x-3 border-b border-gray-50 last:border-0"
                  onClick={() => handleSearch(illness)}
                >
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  <span>{illness}</span>
                </button>
              ))}
            </div>
          )}

          {showDropdown && query.length > 0 && filteredIllnesses.length === 0 && (
            <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border border-green-100 z-50 p-4 text-center text-gray-500">
              No matching illnesses found. Try a different search term.
            </div>
          )}
        </div>
        
        <div className="mt-4 text-sm text-gray-500 flex justify-between">
          <p>Popular searches: Fever, Cough, Cold</p>
          <button className="text-green-600 hover:text-green-800 transition-colors">
            View all remedies
          </button>
        </div>
      </div>

      {/* Display remedy details when an illness is selected */}
      {selectedRemedy && (
        <div className="mt-6 bg-white rounded-lg shadow-lg overflow-hidden border border-green-100 transition-all duration-300">
          <div className="md:flex">
            <div className="md:w-1/3 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/50 z-10"></div>
              <img
                src={selectedRemedy.image}
                alt={selectedRemedy.remedyName}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-3 left-3 z-20 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-green-800">
                {selectedRemedy.frequency}
              </div>
            </div>
            <div className="p-6 md:w-2/3">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-green-600 mb-1">Natural Remedy</span>
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedRemedy.illness}
                </h2>
                <h3 className="text-xl text-green-700 mt-1 font-medium">
                  {selectedRemedy.remedyName}
                </h3>
              </div>

              <div className="mt-6 space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800">Why It Works:</h4>
                  <p className="text-gray-700 mt-1">
                    {selectedRemedy.importance}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-2">How to Use:</h4>
                  <p className="text-gray-700">
                    {selectedRemedy.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition-colors font-medium flex-1">
                  Save Remedy
                </button>
                <button className="border border-green-600 text-green-600 hover:bg-green-50 px-5 py-2 rounded-lg transition-colors font-medium">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}