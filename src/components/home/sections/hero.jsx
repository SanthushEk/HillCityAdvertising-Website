import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import bgImage from "../../../assets/Images/contactbg.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat font-futura"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary opacity-50 z-0"></div>

      {/* Main Content */}
      <div className="relative mx-auto max-w-screen-2xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-xl text-center sm:text-left"
          >
            <h1 className="text-3xl font-extrabold sm:text-6xl text-white">
              Out-of-Home
              <strong className="block font-extrabold text-yellow tracking-wider">
                Advertising
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl tracking-wider text-white font-bold">
              Elevating Brand Presence Across Kandy.
            </p>
            <p className="max-w-lg sm:text-xl tracking-wider text-white font-bold">
              Strategic Outdoor & Transit Advertising Solutions
            </p>

            <div className="mt-8 flex justify-center md:justify-start w-full">
              <a
                href="#"
                className="block w-1/2 md:w-auto rounded-lg bg-yellow px-12 py-4 text-sm font-semibold text-secondary sm:text-lg"
              >
                Contact Us on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-10 text-white max-w-lg hidden md:block"
          >
            <p className="text-lg sm:text-xl">
              <span className="text-yellow">HillCity Advertising</span> is a
              Kandy-based outdoor advertising company delivering high-impact
              brand visibility across the city’s most strategic locations.
              Our services include{" "}
              <span className="text-yellow">railway station branding</span>,{" "}
              <span className="text-yellow">roadside hoardings</span>,{" "}
              <span className="text-yellow">roundabout takeovers</span>, and{" "}
              <span className="text-yellow">bus shelter advertising</span>.
              We also offer transit branding through{" "}
              <span className="text-yellow">SLTB buses</span>, private coaches,
              and tuk-tuk advertising networks.
            </p>

            <p className="text-lg sm:text-xl mt-2">
              We seamlessly integrate traditional outdoor media with modern
              digital activations using{" "}
              <span className="text-yellow">CGI-based campaigns</span>,{" "}
              <span className="text-yellow">AI-assisted creative production</span>,
              and platform-driven strategies powered by{" "}
              <span className="text-yellow">Meta</span> and{" "}
              <span className="text-yellow">ByteDance</span>.
              This unified approach enables brands to maximize reach,
              engagement, and recall across both{" "}
              <span className="text-yellow">physical</span> and{" "}
              <span className="text-yellow">digital</span> landscapes.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ul className="flex gap-4">
          <motion.li
            className="flex justify-center items-center p-2 text-yellow text-2xl md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <FaFacebook />
          </motion.li>

          <motion.li
            className="flex justify-center items-center p-2 text-yellow text-2xl md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <FaInstagram />
          </motion.li>

          <motion.li
            className="flex justify-center items-center p-2 text-yellow text-2xl md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <FaWhatsapp />
          </motion.li>

          <motion.li
            className="flex justify-center items-center p-2 text-yellow text-2xl md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <FaTwitter />
          </motion.li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
