import React from "react";
import { FaStar, FaQuoteLeft, FaQuoteRight, FaCheckCircle } from "react-icons/fa";

// Import profile images
import image1 from "../assets/images/Feedback/user8.png";
import image2 from "../assets/images/Feedback/user7.png";
import image3 from "../assets/images/Feedback/user9.png";

// Data for testimonials
const testimonialData = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Working Professional",
    location: "Mumbai, India",
    image: image1,
    rating: 5,
    quote:
      "The yoga sessions have transformed my daily routine completely. I feel more energetic, focused, and peaceful. Pratish's guidance is exceptional and the meditation techniques have helped me manage stress effectively.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Teacher",
    location: "California, USA",
    image: image2,
    rating: 5,
    quote:
      "Amazing experience! The breathing techniques and asanas taught here are authentic and deeply rooted in traditional yoga. I've noticed significant improvement in my flexibility and mental clarity within just a few weeks.",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    role: "IT Professional",
    location: "Bangalore, India",
    image: image3,
    rating: 5,
    quote:
      "Perfect blend of traditional yoga wisdom and modern teaching methods. The online sessions are well-structured and the personal attention given makes all the difference. Highly recommended for anyone serious about yoga.",
  },
];

const Feedback = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background Blobs (matching image style) */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-yellow-50 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-[30rem] h-[30rem] bg-yellow-50 rounded-full blur-3xl opacity-70 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#EAD26F] mb-6 font-serif">
            What Our Students Say
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Discover the transformative power of yoga through the experiences of
            our community. Real stories from real people who have found peace,
            strength, and wellness.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 align-items-stretch">
          {testimonialData.map((item) => (
            <div
              key={item.id}
              // Using a custom soft shadow to match the image style
              className="bg-white rounded-[2rem] p-8 shadow-[0_10px_50px_-12px_rgba(0,0,0,0.1)] flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Profile Image Container */}
              <div className="relative mb-6 inline-block">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-sm">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Checkmark Badge */}
                <div className="absolute bottom-1 right-1 bg-white rounded-full p-1 shadow-sm z-10">
                  <FaCheckCircle className="text-[#EAD26F] text-xl" />
                </div>
              </div>

              {/* Name & Role */}
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {item.name}
              </h3>
              <p className="text-[#EAD26F] font-semibold mb-1">{item.role}</p>
              <p className="text-gray-400 text-sm mb-5">{item.location}</p>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} className="text-[#EAD26F] text-lg" />
                ))}
              </div>

              {/* Quote Section */}
              <div className="relative mt-auto">
                <FaQuoteLeft className="text-[#EAD26F]/30 text-4xl absolute -top-6 -left-4" />
                <p className="text-gray-600 italic leading-relaxed px-4 relative z-10">
                  {item.quote}
                </p>
                <FaQuoteRight className="text-[#EAD26F]/30 text-4xl absolute -bottom-6 -right-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;