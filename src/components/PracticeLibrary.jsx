import React, { useState } from "react";
import { ChevronDown, ChevronUp, Circle } from "lucide-react";

// Data Structure (LEVELS REMOVED – CONTENT SAME)
const libraryData = {
  asanas: [
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

  pranayamas: [
    "Anulom Vilom",
    "Ujjayi",
    "Bhramari",
    "Surya Bhedana",
    "Chandra Bhedana",
    "Sheetali",
    "Vashishtha Pranayama",
    "Anulom Vilom + Ujjayi",
    "Ujjayi (1:2 Ratio)",
    "Chandra Bhedana (1:2 Ratio)",
    "Surya Bhedana (1:2 Ratio)",
    "Vashishtha with Bhramari",
    "Anulom Vilom with Bhramari",
    "Ujjayi (1:4:2 Ratio)",
    "Vashishtha with Ujjayi",
    "Ujjayi with Bhramari",
    "Chandra Bhedana with Bhramari",
    "Chandra Bhedana with Ujjayi",
    "Anulom Vilom (1:2 Ratio)",
    "Bhramari (1:2 Ratio)",
    "Anulom Vilom (1:4:2 Ratio)",
    "Bhramari (1:4:2 Ratio)",
    "Chandra Bhedana (1:4:2 Ratio)",
    "Vashishtha (1:4:2 Ratio)",
    "Anulom Vilom with Ujjayi (1:4:2 Ratio)",
    "Anulom Vilom with Bhramari (1:4:2 Ratio)",
    "Vashishtha with Ujjayi (1:4:2 Ratio)",
    "Ujjayi with Bhramari (1:4:2 Ratio)",
    "Chandra Bhedana with Bhramari (1:4:2 Ratio)",
    "Sheetali with Bhramari",
    "Sheetali (1:2 Ratio)",
    "Sheetali (1:4:2 Ratio)",
    "Vashishtha + Anulom Vilom + Bhramari (1:4:2 Ratio)",
    "Vashishtha + Anulom Vilom + Ujjayi + Bhramari (1:4:2 Ratio)",
    "Agnisar Kumbhak",
    "Golden Nugget Breathing",
    "Swaiso Pranayama",
    "Parshuram Pranayama",
    "Karna Mukt Pranayama",
    "Chest Rhythm Breathing",
    "Abdomen Rhythm Breathing",
    "Purak – Antar Kumbhak – Rechak",
    "Rhythmic Purak",
    "Parshuram with Bhramari",
    "Agni Kumbhak (Exhale Bhramari + Moolbandh + Uddiyan)",
    "Valmiki Pranayama",
    "Sheetali + Ujjayi (1:2 Ratio)",
    "Ujjayi + Antar Kumbhak (1:4:2 Ratio)",
  ],
};

const Accordion = ({ title, dotColor, items, themeColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300">
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

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[1000px] opacity-100 border-t border-gray-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-8 bg-white">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className={`w-2 h-2 rounded-full mt-2 ${themeColor}`} />
                <span className="text-gray-500 font-light text-base">
                  {item}
                </span>
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
    <section className="py-20 bg-[#FAFAFA] min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* HEADER — UNCHANGED */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-[#2D3748] mb-4">
            Complete <span className="text-[#d4a373]">Practice Library</span>
          </h2>
          <div className="w-16 h-1 bg-[#3a5a40] mx-auto mb-6"></div>
          <p className="text-gray-500 text-lg font-light">
            Access our entire collection of 60+ Asanas and 50+ Pranayamas in one place.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <Accordion
            title="60+ Asanas"
            dotColor="text-[#d4a373]"
            themeColor="bg-[#d4a373]"
            items={libraryData.asanas}
          />

          <Accordion
            title="50+ Pranayamas"
            dotColor="text-[#3a5a40]"
            themeColor="bg-[#3a5a40]"
            items={libraryData.pranayamas}
          />
        </div>
      </div>
    </section>
  );
};

export default PracticeLibrary;
