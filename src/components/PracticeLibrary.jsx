import React, { useState } from "react";
import { ChevronDown, ChevronUp, Circle } from "lucide-react";

// Data Structure (Same source data, but we will flatten it for display)
const libraryData = {
  asanas: [
    {
      level: "Essential Asanas (20 Poses)",
      items: [
        "Mountain Pose (Tadasana)",
        "Tree Pose (Vrikshasana)",
        "Warrior I (Virabhadrasana I)",
        "Child's Pose (Balasana)",
        "Cat-Cow Pose",
        "Downward Dog (Adho Mukha Svanasana)",
        "Cobra Pose (Bhujangasana)",
        "Bridge Pose (Setu Bandhasana)",
        "Seated Forward Fold",
        "Easy Pose (Sukhasana)",
        "Triangle Pose (Trikonasana)",
        "Garland Pose (Malasana)",
        "Happy Baby Pose",
        "Camel Pose (Ustrasana)",
        "Warrior III (Virabhadrasana III)",
        "Crow Pose (Bakasana)",
        "Boat Pose (Navasana)",
      ],
    },
    {
      level: "Intermediate",
      items: [
        "Side Plank (Vasisthasana)",
        "Four-Limbed Staff (Chaturanga)",
        "Eagle Pose (Garudasana)",
        "Revolved Triangle",
        "Half Moon Pose",
        "Wheel Pose (Urdhva Dhanurasana)",
        "Corpse Pose (Shavasana)",
        "Standing Forward Fold",
        "Plank Pose",
        "Legs Up the Wall",
        "Butterfly Pose",
        "Fish Pose (Matsyasana)",
      ],
    },
    {
      level: "Advanced",
      items: [
        "Handstand (Adho Mukha Vrksasana)",
        "Scorpion Pose (Vrschikasana)",
        "One-Handed Tree",
        "Flying Pigeon",
        "Pincha Mayurasana",
        "Eight-Angle Pose",
        "Lotus Headstand",
        "Peacock Pose (Mayurasana)",
        "Flying Crow",
      ],
    },
  ],
  pranayamas: [
    {
      level: "Foundation",
      items: [
        "Natural Breath Observation",
        "Three-Part Breath (Dirga Pranayama)",
        "Ocean Breath (Ujjayi)",
        "Alternate Nostril (Nadi Shodhana)",
        "Bee Breath (Bhramari)",
        "Cooling Breath (Sheetali)",
        "Victorious Breath",
        "Complete Yogic Breath",
        "Counted Breath",
      ],
    },
    {
      level: "Intermediate",
      items: [
        "Skull Shining (Kapalabhati)",
        "Bellows Breath (Bhastrika)",
        "Fire Breath",
        "Solar Breath (Surya Bhedana)",
        "Lunar Breath (Chandra Bhedana)",
        "Humming Breath",
        "Sectioned Breathing",
        "Retention with Ratios",
        "Three-Stage Pranayama",
      ],
    },
    {
      level: "Advanced",
      items: [
        "Complete Breath Retention (Kumbhaka)",
        "Advanced Kapalabhati",
        "Murcha Pranayama",
        "Plavini Pranayama",
        "Kevala Kumbhaka",
        "Sahita Kumbhaka",
        "Advanced Bhastrika",
        "Ujjayi with Retention",
        "Viloma Pranayama",
      ],
    },
  ],
};

const Accordion = ({ title, dotColor, items, themeColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <Circle className={`w-4 h-4 fill-current ${dotColor}`} />
          <span className="text-lg font-medium text-gray-800">{title}</span>
        </div>
        
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>

      {/* Expanded Content - 2 Column Grid */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[1000px] opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-8 bg-white">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                {/* Small Bullet Dot */}
                <span className={`w-2 h-2 rounded-full mt-2 shrink-0 ${themeColor}`} />
                <span className="text-gray-500 font-light text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const PracticeLibrary = () => {
  // Helper to flatten the nested arrays into one long list for the grid
  const allAsanas = libraryData.asanas.flatMap(category => category.items);
  const allPranayamas = libraryData.pranayamas.flatMap(category => category.items);

  return (
    <section className="py-20 bg-[#FAFAFA] min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-[#2D3748] mb-4">
            Complete <span className="text-[#d4a373]">Practice Library</span>
          </h2>
          <div className="w-16 h-1 bg-[#3a5a40] mx-auto mb-6"></div>
          <p className="text-gray-500 text-lg font-light">
            Access our entire collection of 60+ Asanas and 50+ Pranayamas in one place.
          </p>
        </div>

        {/* Stacked Accordions */}
        <div className="flex flex-col gap-6">
          
          {/* Asanas */}
          <Accordion 
            title="60+ Asanas" 
            dotColor="text-[#d4a373]" // Beige Icon
            themeColor="bg-[#d4a373]" // Beige Bullets
            items={allAsanas} 
          />

          {/* Pranayamas */}
          <Accordion 
            title="50+ Pranayamas" 
            dotColor="text-[#3a5a40]" // Green Icon
            themeColor="bg-[#3a5a40]" // Green Bullets
            items={allPranayamas} 
          />

        </div>
      </div>
    </section>
  );
};

export default PracticeLibrary;