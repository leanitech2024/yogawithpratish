"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/* ---------------- Media Item ---------------- */
const MediaItem = ({ item }) => {
  return (
    <img
      src={item.url}
      alt={item.title}
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
  );
};

/* ---------------- Simple Modal ---------------- */
const GalleryModal = ({ selectedItem, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-4xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button - Positioned inside top-right with black background */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 bg-black hover:bg-neutral-800 text-white rounded-full transition-all shadow-lg border border-white/10"
            aria-label="Close gallery"
          >
            <X size={24} />
          </button>

          <div className="overflow-hidden rounded-2xl bg-black shadow-2xl">
            <img
              src={selectedItem.url}
              alt={selectedItem.title}
              className="w-full h-auto max-h-[75vh] object-contain mx-auto"
            />
            
            <div className="text-center p-6 bg-black/40 backdrop-blur-sm border-t border-white/5">
              <h3 className="text-white text-2xl font-serif">{selectedItem.title}</h3>
              <p className="text-amber-400 italic mt-1 font-light tracking-wide">
                {selectedItem.desc}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ---------------- Main Gallery ---------------- */
const InteractiveBentoGallery = ({ mediaItems, title, description }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-[#2D3748] mb-4">
          {title}
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      {/* Uniform Square Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {mediaItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer bg-neutral-100 shadow-sm border border-neutral-200"
            onClick={() => setSelectedItem(item)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <MediaItem item={item} />

            {/* Simple Hover Overlay */}
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
                <div className="relative z-30 px-5 py-2.5 bg-white/95 backdrop-blur-sm rounded-full shadow-xl">
                    <p className="text-[#2D3748] font-serif text-sm font-semibold tracking-wide">
                      {item.title}
                    </p>
                </div>
            </div>
          </motion.div>
        ))}
      </div>

      <GalleryModal
        selectedItem={selectedItem}
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
};

export default InteractiveBentoGallery;