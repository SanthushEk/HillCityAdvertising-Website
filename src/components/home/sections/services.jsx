import React from "react";
import {
  FaBullhorn,
  FaMapSigns,
  FaBus,
  FaFireAlt,
  FaFutbol,
  FaCircle,
  FaStore,
} from "react-icons/fa";

const Service = () => {
  const services = [
    {
      icon: <FaBullhorn />,
      title: "Hoardings & Billboards",
      description:
        "High-impact large-format hoardings and billboards strategically placed across Kandy to ensure maximum brand visibility and recall.",
    },
    {
      icon: <FaMapSigns />,
      title: "Directional & Signage Branding",
      description:
        "Custom-designed signage solutions positioned in high-traffic zones to guide audiences while reinforcing brand presence.",
    },
    {
      icon: <FaBus />,
      title: "Bus & Transit Advertising",
      description:
        "Comprehensive transit branding including SLTB buses, private coaches, and tuk-tuks to deliver city-wide exposure.",
    },
    {
      icon: <FaFireAlt />,
      title: "Brand Activations & Promotions",
      description:
        "Experiential marketing campaigns designed to create direct engagement, emotional connection, and measurable impact.",
    },
    {
      icon: <FaFutbol />,
      title: "Sports & Entertainment Branding",
      description:
        "Strategic brand placements and sponsorships across sports events, concerts, and entertainment platforms.",
    },
    {
      icon: <FaCircle />,
      title: "Roundabout & Landmark Branding",
      description:
        "Premium branding at key roundabouts and city landmarks to capture attention at high-visibility urban touchpoints.",
    },
    {
      icon: <FaStore />,
      title: "Mall Activations & Event Marketing",
      description:
        "Interactive mall activations and promotional events designed to drive footfall, engagement, and conversions.",
    },
  ];

  return (
    <div className="py-10 px-5 sm:px-10 bg-gray-50">
      <h2 className="text-4xl font-semibold text-center mb-8 font-futura">
        Our Services
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative text-center bg-white shadow-lg h-[22rem] w-[20rem] p-6"
          >
            {/* Decorative Border */}
            <div className="absolute inset-0 border-2 border-gray-300 rounded-lg clip-corners group-hover:border-yellow"></div>

            <div className="relative z-10">
              {/* Icon */}
              <div className="flex items-center justify-center text-5xl text-yellow mb-4 mx-auto group-hover:text-yellow-600 h-20">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold font-futura mb-2 group-hover:text-yellow-600">
                {service.title}
              </h3>

              <hr className="w-16 border-t-2 border-yellow mx-auto mb-4 transition-all duration-500 group-hover:w-32" />

              <p className="text-lg text-gray-700 group-hover:text-yellow-600 font-futura">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
