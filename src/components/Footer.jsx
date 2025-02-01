import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; // New icons


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-400" />
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target='_blank' rel='noopener noreferrer' className="text-blue-400">mulugetaabeje16@gmail.com</a></p>
            <p>
                <FontAwesomeIcon icon={faPhone} className="mr-2 text-blue-400" />
                <a href="tel:+251939268336" className="text-blue-400">+251939268336</a></p>
          </div>

          {/* Social Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/mulugetaabeje16/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition duration-300 p-1">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://github.com/Muller1616" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-100 transition  rounded-full p-1 duration-300">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a href="https://www.instagram.com/m_u_l_l_e_r_16/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white p-1 rounded-full transition duration-100">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#about" className="text-blue-400 hover:text-blue-500">About Me</a></li>
              <li><a href="#work" className="text-blue-400 hover:text-blue-500">Work</a></li>
              <li><a href="#contact" className="text-blue-400 hover:text-blue-500">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2025 Mulugeta | Designed & Developed by Mulugeta.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
