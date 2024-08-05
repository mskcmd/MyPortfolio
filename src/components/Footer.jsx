import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-slate-200 text-black py-4 shadow-2xl">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Muhammed Suhail. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/mskcmd" className="hover:text-blue-500 transition-transform transform hover:scale-125">
              <FaGithub size={24} style={{ color: '#181717' }} />
            </a>
            <a href="https://www.linkedin.com/in/muhammed-suhail-k-343748277/" className="hover:text-blue-700 transition-transform transform hover:scale-125">
              <FaLinkedin size={24} style={{ color: '#0077B5' }} />
            </a>
            <a href="https://x.com/msuhailcmd" className="hover:text-blue-400 transition-transform transform hover:scale-125">
              <FaSquareXTwitter size={24} style={{ color: '#181717' }} />
            </a>
          </div>
        </div>
  
      </div>
    </footer>
  );
};

export default Footer;
