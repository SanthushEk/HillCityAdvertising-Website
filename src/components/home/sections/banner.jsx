import React from "react";
import {
  FaLeaf,
  FaClock,
  FaDesktop,
  FaLightbulb,
  FaRecycle,
  FaRoad,
  FaBus,
  FaBuilding,
  FaTrash,
  FaCity,
} from "react-icons/fa";
import { motion } from "framer-motion";
import bgImage from "../../../assets/Images/town.jpg";
import rightImage from "../../../assets/Images/bg_image2.jpg";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row h-auto bg-primary font-futura m-4 gap-6">
      {/* Left Section: Grid of Project Cards */}
      <motion.div
        className="w-full lg:w-1/2 h-auto p-6 lg:p-12 bg-cover relative rounded-lg"
        style={{ backgroundImage: `url(${bgImage})` }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-secondary/90 rounded-lg"></div>

        {/* Grid of Cards */}
        <div className="relative z-10 text-white p-6 lg:p-10 rounded-lg border border-gray-500 backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: <FaRoad />, title: "Roundabout & Traffic Island Branding" },
              { icon: <FaBus />, title: "Green Bus Shelters" },
              { icon: <FaBus />, title: "Smart Bus Shelters" },
              { icon: <FaCity />, title: "City Beautification Projects" },
              { icon: <FaBuilding />, title: "City Development & Cleaning Projects" },
              { icon: <FaRecycle />, title: "Zero Waste & Recycling Projects" },
              { icon: <FaBuilding />, title: "Public Area Branding with PPP" },
              { icon: <FaLeaf />, title: "Green City Projects" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-yellow text-3xl sm:text-4xl mb-4">{item.icon}</div>
                <h4 className="text-sm sm:text-lg lg:text-xl font-semibold">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right Section: Info Card */}
      <motion.div
        className="w-full lg:w-1/2 h-auto p-6 lg:pr-24 relative"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
        viewport={{ once: true }}
      >
        <div className="relative z-10 bg-primary p-8 rounded-xl shadow-lg">
          {/* Title */}
          <h2 className="text-xl lg:text-3xl font-extrabold mb-6">
            Sustainability Projects in Central Province
          </h2>

          {/* Image */}
          <img
            src={rightImage}
            alt="Sustainability Projects"
            className="w-full h-64 object-cover rounded-lg mb-6 shadow-lg"
          />

          {/* Call-to-Action */}
          <button className="text-xl font-bold mb-4 bg-yellow text-secondary px-10 py-2 rounded-md hover:bg-yellow-600 transition">
            Get In Touch
          </button>

          {/* Description */}
          <p className="text-base lg:text-xl font-medium mt-4">
            City beautification and tree plantation projects, smart city developments,
            public area cleaning and maintenance with PPP concept, effective campaigns
            against plastic and polythene, rural education and transportation developments,
            safety crossings and public area safety assurance projects, tourism engagements
            and destination promotions.
          </p>

          {/* Quote */}
          <div className="mt-10 text-center text-yellow tracking-wide text-xl md:text-3xl font-semibold">
            <p>
              TOWARDS A PLASTIC-FREE & SMART CITY CONCEPT
              <br />
              SUSTAINABLE OUTDOOR ADVERTISING
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
