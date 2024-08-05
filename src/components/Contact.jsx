import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { useState, useRef } from 'react';
import LottieAnimation from '../components/Animetion/Messege';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const form = useRef();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
        if (!formData.message) newErrors.message = "Message is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            sendEmail(e);
        }
    };
console.log(import.meta.env.REACT_APP_EMAILJS_USER_ID);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.init('2Tt4MwbtfWwE43Xk5');
        emailjs.sendForm('service_0pfu3lk', 'template_1r5cfjn', form.current, '2Tt4MwbtfWwE43Xk5')
            .then(() => {
                setSuccess(true);
                toast.success('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Clear the form
            }, (error) => {
                console.error('FAILED...', error.text);
                toast.error('Failed to send message. Please try again.');
            });
    };

    return (
        <section id="contact" className="py-16 bg-gradient-to-b from-white to-blue-50 text-gray-800">
            <Toaster /> {/* Add this line to include the toaster in the component */}
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
                <motion.div
                    className="flex-1 flex justify-center items-center mb-8 lg:mb-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <LottieAnimation />
                </motion.div>
                <div className="flex-1 max-w-lg">
                    <motion.h2
                        className="text-3xl font-bold text-center mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Get in Touch
                    </motion.h2>
                    <motion.form
                        className="bg-white rounded-lg shadow-lg p-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        onSubmit={handleSubmit}
                        style={{ width: '100%', minHeight: '100px' }}
                        ref={form}
                    >
                        <div className="mb-4">
                            <input
                                type="text"
                                name="name"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B] ${errors.name ? 'border-red-500' : ''}`}
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                name="email"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B] ${errors.email ? 'border-red-500' : ''}`}
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div className="mb-4">
                            <textarea
                                name="message"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F59E0B] ${errors.message ? 'border-red-500' : ''}`}
                                rows="6"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-[#F59E0B] text-white py-2 rounded-lg font-semibold hover:bg-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            type="submit"
                        >
                            Send Message
                        </motion.button>
                        {success && <p className="text-green-500 text-center mt-4">Message sent successfully!</p>}
                    </motion.form>
                    <div className="mt-6 flex justify-center space-x-4">
                        <SocialIcon href="https://github.com/mskcmd" icon={FaGithub} platform="github" />
                        <SocialIcon href="https://www.linkedin.com/in/muhammed-suhail-k-343748277/" icon={FaLinkedin} platform="linkedin" />
                        <SocialIcon href="https://x.com/msuhailcmd" icon={FaSquareXTwitter} platform="twitter" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const iconColors = {
    github: '#181717',
    linkedin: '#0077B5',
    twitter: '#181717',
};

// eslint-disable-next-line react/prop-types
const SocialIcon = ({ href, icon: Icon, platform }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        className="transition-colors duration-300"
        style={{ color: iconColors[platform] }}
    >
        <Icon size={26} />
    </motion.a>
);

export default ContactPage;
