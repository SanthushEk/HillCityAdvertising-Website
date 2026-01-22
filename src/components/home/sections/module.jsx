import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import rightImage from "../../../assets/Images/slide04.jpg";
import bgImage from "../../../assets/Images/outdorImg.jpg";

const Modules = () => {
  const outdoorItems = [
    "Backdrops & Stage Branding",
    "Exhibition Stalls",
    "Street Name Boards",
    "Gantries",
    "Hoardings & Billboards",
    "Corporate & Public Events",
    "Press Conferences",
    "CSR Campaigns",
    "Bus Shelter Advertising",
    "Roundabout Branding",
    "Light Boxes",
    "Outdoor Advertising Displays",
    "Pylon Signages",
    "Dealer & Retail Boards",
    "Street Marketing Campaigns",
  ];

  return (
    <div className="flex flex-col p-4 md:flex-row h-auto bg-primary font-futura">
      
      {/* Left Section */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center lg:pl-14 m-5 lg:mb-0"
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
        viewport={{ once: true }}
      >
        <div className="bg-primary p-8 rounded-xl pl-0 md:pl-32">
          <h2 className="text-xl md:text-2xl font-extrabold mb-6">
            Discover the Power of Kandy’s Premier Outdoor Advertising Agency
          </h2>

          <img
            src={rightImage}
            alt="Outdoor Advertising Campaigns"
            className="w-full h-96 object-cover mb-6 p-5 bg-white shadow-lg rounded-lg"
          />

          <h3 className="text-xl font-bold mb-4">
            Out-of-Home Advertising by HillCity Advertising
          </h3>

          <p className="text-base font-medium mt-4">
            Engage audiences beyond digital screens with HillCity Advertising’s
            comprehensive range of static and interactive outdoor advertising
            solutions. From daily commuters to lifestyle audiences, our
            strategically placed media ensures high-impact exposure at the
            moments that matter most. By leveraging prime outdoor locations
            across Kandy, we help brands build awareness, credibility, and
            lasting recall in the physical world.
          </p>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full md:w-1/2 h-auto p-6 md:p-10 relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-secondary opacity-90 rounded-lg"></div>

        <div className="relative z-10 text-white font-futura border-2 border-gray-500 p-5 md:p-14 rounded-sm mb-6">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Outdoor Advertising Modules
          </h3>

          <p className="mb-6 text-sm md:text-base">
            With an extensive portfolio of strategically located advertising
            assets across road networks, railway stations, and public spaces,
            HillCity Advertising delivers coverage that reaches a significant
            portion of the Kandy district’s population. Our inventory is
            designed to ensure continuous brand exposure, enabling your message
            to engage audiences consistently throughout their daily journeys.
          </p>

          <button className="px-6 py-3 bg-yellow text-secondary font-semibold rounded-lg hover:bg-yellow-600 transition-colors mb-6">
            Request a Media Plan
          </button>

          <ul className="grid grid-cols-2 gap-4 text-sm md:text-base mb-4 md:mb-10">
            {outdoorItems.map((item, index) => (
              <li key={index} className="flex items-center">
                <FaCheck className="mr-2 text-yellow" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Modules;
