import React from "react";
import { motion } from "framer-motion";
import leftImage from "../../../assets/Images/ground.jpg"; 
import bgImage from "../../../assets/Images/eventsbg.jpg"; 

const Events = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto bg-primary font-futura p-4 lg:p-10 gap-6">
      
      {/* Left Section: Sports Advertising */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center bg-secondary rounded-lg shadow-lg overflow-hidden"
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
        viewport={{ once: false }}
      >
        <div className="p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow mb-2">
            SPORTS ADVERTISING
          </h2>
          <h3 className="text-lg md:text-xl font-semibold mb-6 text-white">
            SPORTS & ENTERTAINMENT SPONSORSHIPS
          </h3>
          <img
            src={leftImage}
            alt="Sports Advertising"
            className="w-full h-80 object-cover rounded-lg shadow-md mb-6"
          />
          <button className="px-6 py-3 bg-yellow text-secondary font-semibold rounded-lg hover:bg-yellow-600 transition-colors">
            Engage with Event
          </button>
        </div>
      </motion.div>

      {/* Right Section: Corporate Events */}
      <motion.div
        className="w-full md:w-1/2 relative rounded-lg overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
        viewport={{ once: false }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-secondary opacity-80 rounded-lg"></div>

        {/* Content */}
        <div className="relative z-10 text-white p-6 md:p-14">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3">
            Corporate Events
          </h3>
          <h4 className="text-xl md:text-2xl font-bold mb-4 text-yellow">
            AWARD-WINNING AGENCY
          </h4>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed tracking-wide">
            HillCity Advertising has been recognized for excellence in event
            marketing, sponsorships, and corporate activations. Our achievements
            reflect the dedication of our creative team and our commitment to
            delivering memorable experiences. We are proud members of leading
            global BTL networks, and our accolades include recognition in
            categories such as Best Brand Event, Best Community Event, Best
            Public Event, and Charity Event of the Year. Beyond awards, our
            focus is on impactful, sustainable campaigns that leave a lasting
            impression on audiences and clients alike.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Events;
