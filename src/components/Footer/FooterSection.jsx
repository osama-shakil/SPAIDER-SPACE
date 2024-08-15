import React from 'react';
import { FaEnvelope, FaPhone, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Logo from "@/assets/Logo_svg_neongreen.svg";
import Image from 'next/image';


const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:underline hover:text-blue-500">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:underline hover:text-blue-500">Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:underline hover:text-blue-500">Contact</a>
              </li>
              <li>
                <a href="#careers" className="hover:underline hover:text-blue-500">Careers</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-500" />
                <span>info@spaider.com</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-blue-500" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center space-x-4">
                <a href="https://twitter.com" className="hover:text-blue-500">
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com" className="hover:text-blue-500">
                  <FaLinkedin />
                </a>
                <a href="https://facebook.com" className="hover:text-blue-500">
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="hover:underline hover:text-blue-500">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms" className="hover:underline hover:text-blue-500">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        {/* SPAIDER Logo */}
        <div className="flex justify-center items-center mt-12">
          <Image
            src={Logo}
            alt="SPAIDER Logo"
            className="w-24 h-auto hover:opacity-80 transition-opacity duration-300"
          />
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400">
          &copy; 2024 SPAIDER. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
