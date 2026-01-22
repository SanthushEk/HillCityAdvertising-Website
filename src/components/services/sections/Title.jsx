import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../../assets/Images/servicesBG.jpg";

const Title = () => {
  return (
    <div
      className="h-[30vh] sm:h-[40vh] flex items-center justify-center bg-cover bg-center relative font-futura"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Animated Hero Content */}
      <motion.div
        className="relative z-10 text-center px-5 sm:px-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold font-quoteFonts text-white tracking-wide">
          Our Services
        </h1>
        <p className="mt-4 text-white text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto">
          Discover the wide range of outdoor advertising and marketing solutions we offer. 
          From street activations to smart city projects, we help your brand stand out.
        </p>
      </motion.div>
    </div>
  );
};

export default Title;
