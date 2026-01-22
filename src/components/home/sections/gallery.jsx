import React from "react";
import { motion } from "framer-motion";
import {
  FaImage,
  FaBus,
  FaBuilding,
  FaLeaf,
  FaMapMarkedAlt,
} from "react-icons/fa";

// Images
import G1 from "../../../assets/Images/G1.jpg";
import G2 from "../../../assets/Images/G2.jpg";
import G3 from "../../../assets/Images/G3.jpg";
import G4 from "../../../assets/Images/G4.jpg";
import G5 from "../../../assets/Images/G5.jpg";
import G6 from "../../../assets/Images/G6.jpg";

// Gallery Data
const images = [
  {
    id: 1,
    src: G1,
    title: "Large Format Hoardings",
    icon: <FaImage className="text-yellow-500 text-3xl" />,
  },
  {
    id: 2,
    src: G2,
    title: "Medium Scale Hoardings",
    icon: <FaBus className="text-yellow-500 text-3xl" />,
  },
  {
    id: 3,
    src: G3,
    title: "Large Scale Bus Shelters",
    icon: <FaBuilding className="text-yellow-500 text-3xl" />,
  },
  {
    id: 4,
    src: G4,
    title: "Smart Bus Shelters",
    icon: <FaLeaf className="text-yellow-500 text-3xl" />,
  },
  {
    id: 5,
    src: G5,
    title: "Large Building Branding",
    icon: <FaMapMarkedAlt className="text-yellow-500 text-3xl" />,
  },
  {
    id: 6,
    src: G6,
    title: "Outdoor Branding",
    icon: <FaImage className="text-yellow-500 text-3xl" />,
  },
];

const Gallery = () => {
  return (
    <section className="container mx-auto px-6 py-16 font-futura">
      {/* Headings */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold tracking-wide mb-3">
          Outdoor Advertising Hoardings & Bus Shelter Ads
        </h2>
        <p className="text-lg md:text-xl tracking-wide text-gray-600">
          Kandy City and Urban Area
        </p>
      </div>

      {/* Gallery Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className="relative group overflow-hidden rounded-xl shadow-xl border border-gray-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            {/* Image */}
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-[280px] object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Icon */}
            <div className="absolute top-4 left-4 bg-yellow text-gray-500  p-3 rounded-full">
              {image.icon}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />

            {/* Title */}
            <div className="absolute bottom-0 w-full bg-black/70 p-4 text-center">
              <h3 className="text-white text-lg font-semibold tracking-wider">
                {image.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Gallery;
