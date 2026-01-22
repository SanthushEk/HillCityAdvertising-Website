import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import bgImage from "../../assets/Images/contactusbg.jpg";

const ContactUs = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="h-[25vh] flex items-center justify-center bg-cover bg-center relative font-futura"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <motion.div
          className="relative text-center z-10 px-5 sm:px-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-semibold text-white">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-yellow mt-2">
            HillCity Advertising – Creativity meets Impact
          </p>
        </motion.div>
      </div>

      {/* Contact Section */}
      <section className="bg-white py-10">
        <motion.div
          className="text-center font-futura"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-xl sm:text-4xl font-semibold tracking-wider text-secondary">
            Get in Touch with <span className="text-yellow">HillCity</span> – The
            Leading Outdoor <span className="text-yellow">Advertising Agency</span>
          </h1>
        </motion.div>

        <div className="container mx-auto px-6 mt-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 text-center">
            {/* Address Card */}
            <motion.div
              className="flex flex-col items-center border-2 border-yellow p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <span className="inline-block p-3 rounded-full bg-gray-800">
                <FaMapMarkerAlt className="w-10 h-10 text-yellow" />
              </span>
              <h2 className="mt-4 text-2xl font-bold text-secondary">Address</h2>
              <p className="mt-2 text-lg text-gray-700">
                123, Horizon Street, Uptown District, Colombo 11000
              </p>
            </motion.div>

            {/* Email Card */}
            <motion.div
              className="flex flex-col items-center border-2 border-yellow p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <span className="inline-block p-3 rounded-full bg-gray-800">
                <FaEnvelope className="w-10 h-10 text-yellow" />
              </span>
              <h2 className="mt-4 text-2xl font-bold text-secondary">Email</h2>
              <p className="mt-2 text-lg text-blue-600">contact@hillcityads.com</p>
              <p className="text-gray-700 mt-1">Our team is here to help!</p>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              className="flex flex-col items-center border-2 border-yellow p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="inline-block p-3 rounded-full bg-gray-800">
                <FaPhoneAlt className="w-10 h-10 text-yellow" />
              </span>
              <h2 className="mt-4 text-2xl font-bold text-secondary">Telephone</h2>
              <p className="mt-2 text-lg text-blue-600">+94 (11) 2345 678</p>
            </motion.div>

            {/* Opening Hours Card */}
            <motion.div
              className="flex flex-col items-center border-2 border-yellow p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <span className="inline-block p-3 rounded-full bg-gray-800">
                <FaClock className="w-10 h-10 text-yellow" />
              </span>
              <h2 className="mt-4 text-2xl font-bold text-secondary">Opening Hours</h2>
              <p className="mt-2 text-lg text-secondary">Mon – Fri: 09:00 - 18:00</p>
              <p className="text-lg text-secondary">Sat – Sun: 10:00 - 14:00</p>
            </motion.div>
          </div>

          {/* Note Section */}
          <motion.div
            className="mt-8 text-center text-secondary font-bold tracking-wide font-futura"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p>
              <span className="text-red-500">Note:</span> Our studio and workshop
              are closed on weekends.
            </p>
          </motion.div>

          {/* Map Section */}
          <motion.div
            className="mt-10 overflow-hidden rounded-lg h-96 bg-secondary shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="HillCity Location"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=123%20Horizon%20Street,%20Colombo%2011000&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
