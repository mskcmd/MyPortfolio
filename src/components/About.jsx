/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import image from "../assets/about-us.png";

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
                {/* Left side with image */}
                <motion.div
                    className="flex-1 mb-8 md:mb-0 md:mr-8 "
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        src={image}
                        alt="About Me"
                        className="rounded-lg shadow-lg w-full h-auto"
                    />
                </motion.div>

                {/* Right side with heading and text */}
                <motion.div
                    className="flex-1 text-center md:text-left"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <motion.h2
                        className="text-3xl font-bold mb-4"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Let's Introduce About Myself
                    </motion.h2>
                    <p className="text-gray-600 mb-4">
                        My name is Muhammed Suhail, and I am a self-taught MERN stack developer in Malappuram, Kerala, with a
                        passion for scalable distributed systems and problem-solving.
                        Committed to writing readable, maintainable code and adept in
                        JavaScript, Node.js, React, Redux, and MongoDB.
                    </p>
                    <p className="text-gray-600 mb-6">
                        When I'm not coding, you can find me exploring new technologies, contributing to
                        open-source projects, or enjoying outdoor activities.
                    </p>

                    <motion.a
                        href="https://drive.google.com/file/d/1RxPOTrf6rMXBQjXGCVMH7YdvehMvZCrL/view?usp=sharing"
                        className="bg-accent text-white font-bold py-2 px-4 rounded hover:bg-opacity-80"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        download
                    >
                        Download CV
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
