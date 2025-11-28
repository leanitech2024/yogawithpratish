import React from 'react';
import {
  FiSunrise,
  FiSun,
  FiSunset,
  FiMoon,
  FiClock,
  FiDroplet,
  FiSmile,
  FiWind,
  FiCoffee,
  FiDisc,
  FiShoppingBag,
  FiEye,
  FiXCircle,
  FiSmartphone,
  FiHeart,
  FiBook,
  FiEdit3,
} from 'react-icons/fi';
import { BiBath, BiWalk, BiBed, BiBowlRice } from 'react-icons/bi';
import { MdSelfImprovement } from 'react-icons/md';
import { GiGrain } from 'react-icons/gi';

const rhythmData = [
  {
    title: 'Dawn',
    icon: FiSunrise,
    bgColor: 'bg-yellow-50',
    iconColor: 'text-yellow-500',
    items: [
      { icon: FiClock, text: 'Rise with the sun (5:30-6:00 AM)' },
      { icon: FiDroplet, text: 'Warm water with intention' },
      { icon: FiSmile, text: 'Gentle cleansing ritual' },
      { icon: MdSelfImprovement, text: 'Sacred movement practice' },
      { icon: FiWind, text: 'Breathwork & stillness' },
      { icon: FiCoffee, text: 'Nourishing herbal tea' },
    ],
  },
  {
    title: 'Radiance',
    icon: FiSun,
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-500',
    items: [
      { icon: BiBowlRice, text: 'Mindful, wholesome meals' },
      { icon: FiShoppingBag, text: 'Fresh, seasonal abundance' },
      { icon: FiDroplet, text: 'Conscious hydration' },
      { icon: FiEye, text: 'Eye care & vision practice' },
      { icon: BiWalk, text: 'Walking meditation' },
      { icon: FiWind, text: 'Breath awareness moments' },
    ],
  },
  {
    title: 'Sunset',
    icon: FiSunset,
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-500',
    items: [
      { icon: FiClock, text: 'Early nourishment (before 7 PM)' },
      { icon: GiGrain, text: 'Grounding grains & vegetables' },
      { icon: FiXCircle, text: 'Release heavy energies' },
      { icon: FiSmartphone, text: 'Digital sunset practice' },
      { icon: MdSelfImprovement, text: 'Gentle evening flow' },
      { icon: FiHeart, text: 'Gratitude & reflection' },
    ],
  },
  {
    title: 'Moonlight',
    icon: FiMoon,
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-500',
    items: [
      { icon: BiBath, text: 'Sacred bathing ritual' },
      { icon: FiBook, text: 'Wisdom reading' },
      { icon: FiWind, text: 'Balancing breath practice' },
      { icon: MdSelfImprovement, text: 'Deep rest meditation' },
      { icon: FiEdit3, text: 'Day\'s wisdom integration' },
      { icon: BiBed, text: 'Peaceful slumber by 10 PM' },
    ],
  },
];

const RhythmCard = ({ title, icon: Icon, bgColor, iconColor, items }) => (
  <div className={`p-6 rounded-2xl ${bgColor} transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}>
    <div className="flex flex-col items-center mb-6">
      <Icon className={`text-5xl mb-3 ${iconColor}`} />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <item.icon className={`text-lg me-3 mt-1 flex-shrink-0 ${iconColor}`} />
          <span className="text-gray-700">{item.text}</span>
        </li>
      ))}
    </ul>
  </div>
);

const LivingInHarmony = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-yellow-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
            Sacred Living
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Living in <span className="text-orange-500 border-b-4 border-green-400">Harmony</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ancient wisdom for modern living – cultivate balance through mindful daily rhythms
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rhythmData.map((rhythm, index) => (
            <RhythmCard key={index} {...rhythm} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LivingInHarmony;