import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Your Name. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-accent"><FaGithub size={24} /></a>
            <a href="#" className="hover:text-accent"><FaLinkedin size={24} /></a>
            <a href="#" className="hover:text-accent"><FaTwitter size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;