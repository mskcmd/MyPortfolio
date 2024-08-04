/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import image from "../assets/suhail.png";

const Home = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-white to-white text-black py-[19vh] ">
      <div className="container mx-auto px-6 mt-11">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 text-left mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-accent">Muhammed Suhail</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">
              Full Stack Developer
            </h2>
            <p className="text-xl mb-8">
              I'm passionate about creating amazing digital experiences
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#contact"  // Update with the actual id or path of your contact section/page
                className="bg-accent text-white font-bold py-2 px-4 rounded hover:bg-opacity-80"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire me
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1RxPOTrf6rMXBQjXGCVMH7YdvehMvZCrL/view?usp=sharing"
                className="bg-white text-accent font-bold py-2 px-4 rounded border-2 border-accent hover:bg-accent hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download
              >
                Get CV
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 1, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="w-80 h-80 bg-accent rounded-3xl overflow-hidden shadow-lg relative"
              whileHover={{ rotate: 360, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={image}
                alt="Your Name"
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300"
                whileHover={{ opacity: 1 }}
              >
                <p className="text-white text-xl font-bold mb-2">Full Stack Developer</p>
                <p className="text-white">React | Node.js | MongoDB</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
