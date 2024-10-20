import React from 'react';
import { FaLink, FaFacebookSquare, FaLinkedin, FaFileAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FaLink className="mr-2" /> Quick Links
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">Home</a></li>
              <li><a href="#" className="hover:text-blue-300">About Us</a></li>
              <li><a href="#" className="hover:text-blue-300">Services</a></li>
              <li><a href="#" className="hover:text-blue-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FaFacebookSquare className="mr-2" /> Social Media
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300"><FaFacebookSquare size={24} /></a>
              <a href="#" className="hover:text-blue-300"><FaLinkedin size={24} /></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FaFileAlt className="mr-2" /> Legal
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-300">Terms of Service</a></li>
              <li><a href="/disclaimer" className="hover:text-blue-300">Disclaimer</a></li>
              <li><a href="/faqs" className="hover:text-blue-300">FAQs</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 SCF Strategies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;