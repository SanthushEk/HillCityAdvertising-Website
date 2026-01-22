import React, { useState, useEffect, useCallback } from "react";
import {
  FaBullhorn,
  FaRegHandPointRight,
  FaExclamationTriangle,
  FaChartLine,
  FaUsers,
  FaTrophy,
  FaGraduationCap,
  FaCogs,
  FaClipboardList,
  FaAppleAlt,
  FaBuilding,
  FaTree,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

import bgImage from "../../../assets/Images/OutdorBG.jpg";

// Data
const items = [
  { title: "Flyer Promotions", description: "Engage audiences with flyers.", icon: <FaBullhorn /> },
  { title: "Street Activation", description: "Create interactive street events.", icon: <FaRegHandPointRight /> },
  { title: "Mall Events", description: "Host promotions in malls.", icon: <FaBuilding /> },
  { title: "Consumer Experience Promos", description: "Hands-on brand experiences.", icon: <FaAppleAlt /> },
  { title: "Exhibitions", description: "Showcase at major events.", icon: <FaExclamationTriangle /> },
  { title: "Guerrilla Marketing", description: "Creative, unconventional tactics.", icon: <FaTrophy /> },
  { title: "Sports Marketing", description: "Engage audiences through sports.", icon: <FaUsers /> },
  { title: "Customer Engagement Activities", description: "Build long-term relationships.", icon: <FaClipboardList /> },
  { title: "Research & Data Collection", description: "Understand markets better.", icon: <FaChartLine /> },
  { title: "Gym & Salon Promotions", description: "Target niche audiences.", icon: <FaCogs /> },
  { title: "Campus & Factory Activations", description: "Location-based promotions.", icon: <FaGraduationCap /> },
  { title: "Seasonal Promotions", description: "Campaigns for special seasons.", icon: <FaTree /> },
];

const CARDS_TO_SHOW = 4;

const Brands = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = useCallback(() => {
    setStartIndex((prev) =>
      prev + CARDS_TO_SHOW < items.length ? prev + CARDS_TO_SHOW : 0
    );
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev - CARDS_TO_SHOW >= 0
        ? prev - CARDS_TO_SHOW
        : Math.max(items.length - CARDS_TO_SHOW, 0)
    );
  };

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  const visibleItems = items.slice(startIndex, startIndex + CARDS_TO_SHOW);

  return (
    <section
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary/90"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 text-center text-white font-futura">
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Brand Activations & Street Promotions
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {visibleItems.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              className="p-6 rounded-xl border border-white/60 backdrop-blur-sm bg-white/5 shadow-xl flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="text-4xl text-yellow mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-white/80">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-6">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full border border-yellow text-yellow hover:bg-yellow hover:text-black transition"
            aria-label="Previous"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={handleNext}
            className="p-3 rounded-full border border-yellow text-yellow hover:bg-yellow hover:text-black transition"
            aria-label="Next"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <button className="px-10 py-3 bg-yellow text-black rounded-lg font-semibold text-lg hover:bg-yellow-600 transition">
            Get Started Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
