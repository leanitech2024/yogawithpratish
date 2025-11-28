import React from "react";
// 1. Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// 2. Import Swiper styles
import "swiper/css";

import {
  FaLeaf,
  FaHeartbeat,
  FaBabyCarriage,
  FaBalanceScale,
} from "react-icons/fa";
import { GiMeditation, GiLotus } from "react-icons/gi";

// Data Setup
const teachingsData = [
  {
    title: "Sacred Journey",
    tagline: "Motherhood support",
    description: "Gentle, nurturing practices for the beautiful journey of pregnancy and beyond.",
    icon: "FaBabyCarriage",
  },
  {
    title: "Mind & Soul",
    tagline: "Inner peace & clarity",
    description: "Release tension and cultivate deep tranquility through mindful movement and breath.",
    icon: "GiMeditation",
  },
  {
    title: "Body Balance",
    tagline: "Strength meets grace",
    description: "Build lean muscle and enhance flexibility while honoring your body's natural wisdom.",
    icon: "FaBalanceScale",
  },
  {
    title: "Women's Wellness",
    tagline: "Feminine vitality",
    description: "Nurture your feminine energy with practices designed for hormonal harmony.",
    icon: "GiLotus",
  },
  {
    title: "Vital Energy",
    tagline: "Natural healing",
    description: "Support your body's natural healing processes through therapeutic movement.",
    icon: "FaLeaf",
  },
  {
    title: "Heart & Flow",
    tagline: "Cardiovascular harmony",
    description: "Strengthen your heart through gentle, flowing sequences that enhance circulation.",
    icon: "FaHeartbeat",
  },
];

const IconMap = {
  FaLeaf: FaLeaf,
  FaHeartbeat: FaHeartbeat,
  FaBabyCarriage: FaBabyCarriage,
  GiMeditation: GiMeditation,
  FaBalanceScale: FaBalanceScale,
  GiLotus: GiLotus,
};

const colorThemes = [
  { bg: "bg-[#FFF9E5]", tagBg: "bg-[#FCEFC7]", tagText: "text-[#856404]", iconColor: "text-[#F59E0B]" },
  { bg: "bg-[#E6F2FF]", tagBg: "bg-[#CCE5FF]", tagText: "text-[#004085]", iconColor: "text-[#3B82F6]" },
  { bg: "bg-[#E8F8EE]", tagBg: "bg-[#C3E6CB]", tagText: "text-[#155724]", iconColor: "text-[#10B981]" },
  { bg: "bg-[#F5E6FF]", tagBg: "bg-[#E0CFFC]", tagText: "text-[#4A1D96]", iconColor: "text-[#D946EF]" },
  { bg: "bg-[#FFF0F0]", tagBg: "bg-[#FADBD8]", tagText: "text-[#721C24]", iconColor: "text-[#EF4444]" },
  { bg: "bg-[#FFF5EB]", tagBg: "bg-[#FTE0C6]", tagText: "text-[#856404]", iconColor: "text-[#F97316]" },
];

const TeachingsSection = () => {
  return (
    <section className="py-20 bg-white relative">
      {/* Style Injection for Linear Easing (Smooth Marquee) */}
      <style>{`
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>

      <div className="container mx-auto px-4 mb-12 text-center max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-serif text-[#2D3748] mb-4">
          Healing Through Movement
        </h2>
        <p className="text-gray-500 text-lg md:text-xl font-light">
          Ancient practices for modern wellness. Discover how yoga can transform
          your health and elevate your spirit.
        </p>
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-12">
        
        {/* Wrapper with Mask Image for Fading Edges.
           Changed to 5% / 95% to make the blur effect smaller/shorter.
        */}
        <div className="[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] py-4">
          <Swiper
            modules={[Autoplay]}
            loop={true}
            spaceBetween={30}
            // Speed = 4000ms (4 seconds) for a smooth, continuous flow
            speed={4000} 
            autoplay={{
              delay: 0, 
              disableOnInteraction: false, 
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3.5 },
            }}
            className="!px-4"
          >
            {teachingsData.map((item, index) => {
              const theme = colorThemes[index % colorThemes.length];
              const IconComponent = IconMap[item.icon] || FaLeaf;

              return (
                <SwiperSlide key={index} className="h-auto">
                  <div
                    className={`
                      h-full
                      ${theme.bg} 
                      rounded-3xl p-8 
                      flex flex-col items-center text-center 
                      transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg
                      select-none cursor-grab active:cursor-grabbing
                    `}
                  >
                    <div className="bg-white p-4 rounded-2xl shadow-sm mb-6">
                      <IconComponent className={`text-3xl ${theme.iconColor}`} />
                    </div>

                    <h3 className="text-2xl font-serif text-gray-800 mb-2">
                      {item.title}
                    </h3>

                    <span
                      className={`
                        inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-4
                        ${theme.tagBg} ${theme.tagText}
                      `}
                    >
                      {item.tagline}
                    </span>

                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeachingsSection;