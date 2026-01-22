import React from "react";
import { FaLeaf, FaClock, FaDesktop, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import rightImage from "../../../assets/Images/nightTown.jpg";
import bgImage from "../../../assets/Images/town.jpg";

const WorkWithUs = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <div className="flex flex-col lg:flex-row h-auto bg-primary font-futura m-2">
      
      {/* Left Section */}
      <motion.div
        className="w-full lg:w-1/2 h-auto p-6 lg:p-12 bg-cover relative"
        style={{ backgroundImage: `url(${bgImage})` }}
        initial={{ opacity: 0, x: isMobile ? -50 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-secondary opacity-90 rounded-lg"></div>

        {/* Content */}
        <div className="relative z-10 text-white font-futura border-2 border-gray-500 p-4 lg:pt-24 rounded-sm mb-6 h-full">
          <div className="relative z-10 text-white pl-0 md:pl-48">
            <h1 className="text-xl md:text-4xl font-semibold mb-2 tracking-wider">
              We Follow Industry-Leading Practices
            </h1>

            <h2 className="text-sm md:text-xl font-light mb-6 tracking-wide">
              Strategic brand positioning through Public–Private Partnership
              advertising programmes
            </h2>

            <ul className="space-y-5">
              <li className="flex items-center space-x-5">
                <FaLeaf className="text-xl md:text-4xl text-yellow" />
                <div>
                  <h3 className="text-xl md:text-2xl tracking-wide font-semibold">
                    Sustainable Advertising
                  </h3>
                  <p className="text-sm md:text-lg hidden sm:block">
                    We adopt environmentally responsible practices across
                    materials, installations, and campaign execution.
                  </p>
                </div>
              </li>

              <li className="flex items-center space-x-5">
                <FaClock className="text-xl md:text-4xl text-yellow" />
                <div>
                  <h3 className="text-xl md:text-2xl tracking-wide font-semibold">
                    On-Time Delivery
                  </h3>
                  <p className="text-sm md:text-lg hidden sm:block">
                    Campaigns are delivered on schedule with strict adherence
                    to quality and safety standards.
                  </p>
                </div>
              </li>

              <li className="flex items-center space-x-5">
                <FaDesktop className="text-xl md:text-4xl text-yellow" />
                <div>
                  <h3 className="text-xl md:text-2xl tracking-wide font-semibold">
                    Modern Technology
                  </h3>
                  <p className="text-sm md:text-lg hidden sm:block">
                    We leverage advanced production tools, analytics, and
                    digital integrations to enhance campaign performance.
                  </p>
                </div>
              </li>

              <li className="flex items-center space-x-5">
                <FaLightbulb className="text-xl md:text-4xl text-yellow" />
                <div>
                  <h3 className="text-xl md:text-2xl tracking-wide font-semibold">
                    Creative Excellence
                  </h3>
                  <p className="text-sm md:text-lg hidden sm:block">
                    Our team delivers innovative concepts that transform outdoor
                    spaces into powerful brand experiences.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full lg:w-1/2 h-full p-10 lg:pr-36 relative"
        initial={{ opacity: 0, x: isMobile ? 50 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="relative z-10 mb-6">
          <h1 className="text-2xl md:text-4xl tracking-wider font-bold text-secondary mb-4">
            Kandy, Sri Lanka
          </h1>

          <p className="text-sm md:text-lg tracking-wide text-secondary mb-6">
            HillCity Advertising operates one of Kandy’s most comprehensive
            outdoor advertising networks, covering roadside billboards, bus
            shelter advertising, roundabout and landmark branding, street-level
            activations, and railway station media. Our strategically selected
            locations engage both local residents and international visitors,
            ensuring consistent brand exposure across high-traffic commercial,
            cultural, and tourism zones throughout the city.
          </p>

          {/* Image Card */}
          <div className="relative z-10 mt-8 bg-white shadow-lg rounded-lg p-4 mb-5">
            <img
              src={rightImage}
              alt="Outdoor Advertising in Kandy"
              className="w-full h-80 object-cover rounded-lg mb-4"
            />
          </div>

          <h2 className="text-xl md:text-2xl tracking-wide text-secondary font-semibold mb-4">
            Over a Decade of Proven Advertising Success
          </h2>

          <button className="bg-yellow text-secondary px-8 py-2 rounded-lg font-bold tracking-wide transition duration-300">
            Work With Us
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default WorkWithUs;
