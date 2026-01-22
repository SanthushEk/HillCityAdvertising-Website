import React from "react";
import { motion } from "framer-motion"; 
import leftImage from "../../../assets/Images/servicepic.jpg"; 

const Banner = () => {
  return (
    <div className="h-auto flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto p-5 lg:space-x-10">
      
      {/* Left Section: Image */}
      <motion.div
        className="w-full lg:w-1/2"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -60 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false }}
      >
        <img
          src={leftImage}
          alt="Event Marketing"
          className="w-full h-auto object-cover rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Right Section: Content */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col justify-center items-start p-6 lg:p-10"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 60 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: false }}
      >
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-secondary mb-4">
          Shaping Ideas Into Lasting Experiences
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed tracking-wide mb-6">
          HillCity Advertising is a full-service event marketing and outdoor
          advertising agency that transforms ideas into tangible, impactful
          experiences. We craft innovative campaigns and immersive activations
          that capture attention, shift mindsets, and drive meaningful
          engagement. Our solutions span urban branding, street activations,
          smart city initiatives, and large-scale events, ensuring every brand
          interaction resonates locally and globally.
        </p>

        {/* Subtitle */}
        <p className="text-secondary text-lg font-medium mb-6">
          Delivering creativity, sustainability, and results in every project.
        </p>

        {/* Button */}
        <button className="px-8 py-3 border-2 border-secondary rounded-lg font-bold text-black tracking-wide hover:bg-yellow transition duration-300 hover:bg-opacity-90">
          Learn More
        </button>
      </motion.div>
    </div>
  );
};

export default Banner;
