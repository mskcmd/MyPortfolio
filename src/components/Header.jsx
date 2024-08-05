import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaSquareXTwitter } from 'react-icons/fa6';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md z-50 fixed w-full">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-accent">Muhammed Suhail</h1>
        </motion.div>

        {/* Navigation Links and Icons */}
        <div className="flex items-center">
          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-custom focus:outline-none">
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

          {/* Navigation Links */}
          <motion.ul
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:flex md:space-x-2 absolute md:static bg-white left-0 right-0 md:bg-transparent top-12 md:top-auto z-10 md:z-auto shadow-md md:shadow-none`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <li>
              <a href="#home" className="block text-gray-600 hover:text-accent py-2 px-3">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="block text-gray-600 hover:text-accent py-2 px-3">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="block text-gray-600 hover:text-accent py-2 px-3">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="block text-gray-600 hover:text-accent py-2 px-3">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className="block text-gray-600 hover:text-accent py-2 px-3">
                Contact
              </a>
            </li>

            {/* Social Icons for Mobile */}
            <div className="flex justify-center mt-4 md:hidden space-x-4">
              <a href="https://github.com/mskcmd"  className="text-custom hover:text-accent">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/muhammed-suhail-k-343748277/" className="text-custom hover:text-accent">
                <FaLinkedin size={20} />
              </a>
              <a href="https://x.com/msuhailcmd" className="text-custom hover:text-accent">
                <FaSquareXTwitter size={20} />
              </a>
            </div>
          </motion.ul>

          {/* Social Icons for Desktop */}
          <motion.div
            className="hidden md:flex space-x-2 ml-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#" className="text-custom hover:text-accent">
              <FaGithub size={20} />
            </a>
            <a href="#" className="text-custom hover:text-accent">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-custom hover:text-accent">
              <FaSquareXTwitter size={20} />
            </a>
          </motion.div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
