import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-footer text-white py-10 px-5 font-futura">
      {/* Grid Layout with 4 Sections */}
      <div className="container mx-auto mb-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About HillCity Advertising */}
        <div>
          <h2 className="text-2xl font-bold">
            HillCity <span className="text-yellow">Advertising</span>
          </h2>
          <p className="mt-4 text-sm font-medium tracking-wider">
            HillCity Advertising is a premier Out-of-Home agency, delivering impactful campaigns, street activations, and innovative brand experiences. We combine creativity, technology, and strategic placement to ensure your brand reaches the right audience at the right time.
          </p>
          <p className="mt-5">
            <strong className="text-yellow">Mon - Sat:</strong> 9:00 AM - 6:00 PM
          </p>
          <p>
            <strong className="text-yellow">Sunday:</strong> Closed
          </p>
        </div>

        {/* Quick Links */}
        <div className="ml-0 md:ml-20">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/service" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/contactus" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:underline">
                Gallery
              </a>
            </li>
          </ul>
        </div>

        {/* Office Address */}
        <div>
          <h3 className="text-xl font-bold mb-4">City Office</h3>
          <p>
            1234 Hillview Avenue, Central Business District,
            <br />
            Colombo, 10000, Sri Lanka
          </p>
          <p className="mt-2">
            <strong className="text-yellow">Phone:</strong> +94 11 765 4321
          </p>
          <p>
            <strong className="text-yellow">Email:</strong> contact@hillcityadv.com
          </p>
        </div>

        {/* Locations & Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Locations</h3>
          <ul>
            <li>HillCity Studio, Colombo</li>
            <li>Activation Hub, Kandy</li>
            <li>Workshop 12, Kandy Road, Peradeniya</li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="https://facebook.com" className="hover:text-yellow">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" className="hover:text-yellow">
              <FaSquareXTwitter size={24} />
            </a>
            <a href="https://instagram.com" className="hover:text-yellow">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" className="hover:text-yellow">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-gray-600 mb-2" />

      {/* Bottom Section */}
      <div className="container mx-auto flex justify-center items-center text-center">
        <p className="text-sm md:text-sm">
          &copy; 2025 All Rights Reserved | Designed & Developed by{" "}
          <span className="font-semibold text-yellow">
            SanthushEk
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
