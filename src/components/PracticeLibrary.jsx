import React, { useState } from "react";
import { ChevronDown, ChevronUp, Circle } from "lucide-react";

// Data Structure
const libraryData = {
  asanas: [
    {
      level: "Essential Asanas (20 Poses)",
      color: "green",
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
      ],
    },
    {
      level: "Intermediate (20 Asanas)",
      color: "yellow",
      items: [
        "Warrior III (Virabhadrasana III)",
        "Side Plank (Vasisthasana)",
        "Crow Pose (Bakasana)",
        "Four-Limbed Staff (Chaturanga)",
        "Boat Pose (Navasana)",
        "Eagle Pose (Garudasana)",
        "Revolved Triangle",
        "Half Moon Pose",
        "Wheel Pose (Urdhva Dhanurasana)",
      ],
    },
    {
      level: "Advanced (20 Asanas)",
      color: "red",
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
      level: "Foundation Techniques (16 Methods)",
      color: "green",
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
      level: "Intermediate (17 Techniques)",
      color: "yellow",
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
      level: "Advanced (17 Techniques)",
      color: "red",
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

// Color Theme Helper
const getColorTheme = (color) => {
  switch (color) {
    case "green":
      return {
        dot: "text-emerald-500 fill-emerald-500",
        border: "group-hover:border-emerald-200",
        bgOpen: "bg-emerald-50/50",
        text: "text-emerald-900",
      };
    case "yellow":
      return {
        dot: "text-amber-400 fill-amber-400",
        border: "group-hover:border-amber-200",
        bgOpen: "bg-amber-50/50",
        text: "text-amber-900",
      };
    case "red":
      return {
        dot: "text-rose-500 fill-rose-500",
        border: "group-hover:border-rose-200",
        bgOpen: "bg-rose-50/50",
        text: "text-rose-900",
      };
    default:
      return {
        dot: "text-gray-500",
        border: "border-gray-200",
        bgOpen: "bg-gray-50",
        text: "text-gray-900",
      };
  }
};

const AccordionItem = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = getColorTheme(data.color);

  return (
    <div className={`mb-4 border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-sm' : ''}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors group ${theme.text}`}
      >
        <div className="flex items-center gap-3">
          <Circle className={`w-3 h-3 ${theme.dot}`} />
          <span className="font-medium text-left text-gray-800">{data.level}</span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>

      {/* Expanded Content */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className={`p-4 pt-0 space-y-2 ${theme.bgOpen}`}>
            <hr className="border-gray-100 mb-3" />
            {data.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 pl-6">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const PracticeLibrary = () => {
  return (
    <section className="py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2D3748] mb-4">
            Complete <span className="text-orange-500">Practice Library</span>
          </h2>
          {/* Underline */}
          <div className="w-16 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-gray-500 text-lg font-light">
            Access our comprehensive collection of 60+ Asanas and 50+ Pranayamas
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Column 1: Asanas */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 h-fit">
            <h3 className="text-2xl font-serif text-center mb-8 text-[#2D3748]">
              60+ <span className="text-orange-400">Asanas</span>
            </h3>
            <div className="space-y-2">
              {libraryData.asanas.map((category, index) => (
                <AccordionItem key={index} data={category} />
              ))}
            </div>
          </div>

          {/* Column 2: Pranayamas */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 h-fit">
            <h3 className="text-2xl font-serif text-center mb-8 text-[#2D3748]">
              50+ <span className="text-green-700">Pranayamas</span>
            </h3>
            <div className="space-y-2">
              {libraryData.pranayamas.map((category, index) => (
                <AccordionItem key={index} data={category} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PracticeLibrary;