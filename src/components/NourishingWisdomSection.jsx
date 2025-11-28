import React from "react";
import { FaSeedling, FaBalanceScale, FaTint } from "react-icons/fa";

const NourishingWisdomSection = () => {
  const wisdomItems = [
    {
      title: "Sattvic Foods",
      description:
        "Fresh fruits, vegetables, whole grains, nuts, seeds, and dairy products that promote clarity and peace",
      icon: FaSeedling,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Balanced Portions",
      description:
        "Eat in moderation, chew mindfully, and maintain regular meal times for optimal digestion",
      icon: FaBalanceScale,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-500",
    },
    {
      title: "Proper Hydration",
      description:
        "Drink warm water, herbal teas, and fresh juices while avoiding cold beverages during meals",
      icon: FaTint,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-500",
    },
  ];

  return (
    <section className="py-12 bg-gray-50 flex justify-center px-4">
      {/* Main Card Container */}
      <div className="max-w-[1320x] w-full bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium">
            <span className="text-green-700">Nourishing</span>{" "}
            <span className="text-[#0f172a]">Wisdom</span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {wisdomItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon Circle */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${item.bgColor} ${item.iconColor}`}
              >
                <item.icon className="text-2xl" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NourishingWisdomSection;