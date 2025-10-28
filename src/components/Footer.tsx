
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-green-500/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-500">
              Shawon
            </h2>
            <p className="text-gray-300 max-w-md">
              Full-stack web developer crafting modern, scalable applications. Turning ideas into exceptional digital experiences.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://github.com/shawonorib" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/shawonorib" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4 pb-2 border-b border-green-500/10">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="/" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/skills" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Skills
                </NavLink>
              </li>
              <li>
                {/* <NavLink 
                  to="/blog" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Blog
                </NavLink> */}
              </li>
              <li>
                <NavLink 
                  to="/projects" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/resume" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium mb-4 pb-2 border-b border-green-500/10">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} className="text-green-500" />
                <span>shawonorib@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Github size={16} className="text-green-500" />
                <a 
                  href="https://github.com/shawonorib" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  github.com/shawonorib
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-500/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Shawon. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <NavLink to="/privacy-policy" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms-of-service" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
              Terms of Service
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
