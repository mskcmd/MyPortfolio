import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: 'Keyzen - Furniture Shop',
        description: 'A comprehensive e-commerce platform for buying and exploring a wide range of furniture.',
        longDescription: `
        Developed Keyzen Furniture Shop, a robust e-commerce application tailored for a diverse selection of furniture.
        Leveraging MongoDB, Express.js, EJS, and Node.js, the application offers a seamless online experience with the following features:
        - User-Friendly Product Listing: Implemented an intuitive product listing page with advanced filtering options.
        - E-commerce Features: Includes cart functionality, coupons, offers, sales reports, image zoom, wishlist, and order management.
        - Admin Dashboard: Dynamic graphs for monitoring sales and inventory.
        - User Wallet System: Integrated wallet system for refunds on canceled or returned orders.
        - Media Storage: Utilized Multer for secure media file storage.
        - Mail Services: Enabled email notifications with Nodemailer.
        - Payment Processing: Integrated Razorpay for secure payment processing with multiple payment options.
        - Hosting: Deployed on AWS EC2 with Route 53 and Nginx as the web server.
      `,
        image: 'https://scontent-bom2-1.xx.fbcdn.net/v/t39.30808-6/453970178_122104283300449942_172269100955854476_n.jpg?stp=dst-jpg_p180x540&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=w90aei3m_foQ7kNvgECfLze&_nc_ht=scontent-bom2-1.xx&oh=00_AYDxJwYq-VvDNYdBzQfSAZm4Oe9z0IN8Bb3b3Vn42IKZTg&oe=66B60C61',
        githubLink: 'https://github.com/mskcmd/keyzen-shop',
        liveLink: 'https://keyzen.shop',
        technologies: ['MongoDB', 'Express.js', 'EJS', 'Node.js', 'AWS EC2', 'Nginx', 'Razorpay', 'Multer', 'Nodemailer']
    },
    {
        id: 2,
        title: 'User Management System (CRUD) with JWT Authentication and Redux Toolkit',
        description: 'A user management system with CRUD operations and secure JWT authentication.',
        longDescription: `
        Developed a User Management System (UMS) with complete CRUD operations and secure user authentication using JWT.
        Features include:
        - CRUD Operations: Create, Read, Update, and Delete functionalities for managing user data.
        - JWT Authentication: Secure user login and authorization using JSON Web Token (JWT).
        - User Registration: Profile image upload and validation using React Bootstrap.
        - Admin Features: User management capabilities for deletion, editing, search, and addition with appropriate protection mechanisms.
      `,
        image: 'https://github.com/mskcmd/MERN_Stack_Auth/blob/main/mern-auth/frontend/public/download.png?raw=true',
        githubLink: 'https://github.com/mskcmd/MERN_Stack_Auth',
        liveLink: 'https://usermanagementsystem.com',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Redux Toolkit', 'React Bootstrap']
    },
    {
        id: 3,
        title: 'User Management System (CRUD) with Session and Authentication',
        description: 'A user management system featuring CRUD operations with session management and authentication.',
        longDescription: `
        Implemented a User Management System with CRUD operations, session management, and secure authentication. 
        Features include:
        - CRUD Operations: Create, Read, Update, and Delete functionalities for managing user data.
        - Session Management: Maintains user sessions securely.
        - User Registration: Profile image upload and validation.
        - Authentication: Secure user login using authentication tokens.
        - Admin Features: Admin capabilities for blocking, unblocking, deleting, editing, searching, and adding new users.
      `,
        image: 'https://www.webstackacademy.com/wp-content/uploads/2023/01/Backend-Hero-1.png',
        githubLink: 'https://github.com/yourusername/user-management-system-session',
        liveLink: 'https://usermanagementsession.com',
        technologies: ['Node.js', 'Express', 'MongoDB']
    },
    {
        id: 4,
        title: 'OLX Clone - Firebase',
        description: 'An OLX-like web application built using React and Firebase.',
        longDescription: `
        Developed an OLX-like application using React and Firebase for real-time updates and a modern user interface.
        - Modern UI: Utilized the latest React features for a responsive design.
        - Real-time Updates: Leveraged Firebase for real-time data handling and seamless user experience.
      `,
        image: 'https://www.yarddiant.com/images/how-to-post-an-ad-in-olx.jpg',
        githubLink: 'https://github.com/mskcmd/olx_clone',
        liveLink: 'https://olxclone.com',
        technologies: ['React', 'Firebase']
    },
    {
        id: 5,
        title: 'Netflix Clone',
        description: 'A Netflix-like web application with a modern UI and YouTube integration.',
        longDescription: `
        Created a Netflix-like application using React, with features including:
        - Data Fetching: Efficiently fetch data using Axios.
        - Modern UI: Built with the latest React versions for a responsive user interface.
        - YouTube Integration: Integrated react-youtube for viewing trailers and related videos.
      `,
        image: 'https://wallpapercat.com/w/middle-retina/2/5/1/45994-3000x2003-desktop-hd-netflix-wallpaper-photo.jpg',
        githubLink: 'https://github.com/mskcmd/netflix_clone',
        liveLink: 'https://netflixclone.com',
        technologies: ['React', 'Axios', 'react-youtube']
    },
    {
        id: 6,
        title: 'To-Do App',
        description: 'A visually appealing To-Do application with CRUD functionalities.',
        longDescription: `
        Developed a To-Do app using React with features to manage tasks efficiently:
        - CRUD Operations: Create, Read, Update, and Delete tasks.
        - User Interface: Designed a clean and user-friendly interface for managing tasks.
      `,
        image: 'https://i.ytimg.com/vi/PLhTcxCQJ6Y/maxresdefault.jpg',
        githubLink: 'https://github.com/yourusername/todo-app',
        liveLink: 'https://todoapp.com',
        technologies: ['React']
    },
    {
        id: 7,
        title: "Portfolio Website",
        description: "A beautifully responsive portfolio showcasing my skills with animations and live email functionality.",
        longDescription: `
        Developed a portfolio website using React and Vite to showcase my skills and projects:
        - Design: Implemented a modern and responsive design using Tailwind CSS.
        - Animations: Integrated smooth animations to enhance the user experience.
        - Live Email: Utilized EmailJS for live email functionality, allowing users to contact me directly from the website.
        - Icons: Used React Icons to visually represent different sections and skills.
        `,
        image: "https://github.com/mskcmd/MyPortfolio/blob/main/src/assets/image.png?raw=true",
        githubLink: "https://github.com/mskcmd/MyPortfolio?tab=readme-ov-file",
        liveLink: "my-portfoliosuhail-mskcmds-projects.vercel.app",
        technologies: ["React", "Vite", "Tailwind CSS", "EmailJS", "React Icons"]
      }
      
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleViewDetails = (project) => {
        setSelectedProject(project);
    };

    const nextProjects = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 3) % projects.length);
    };

    const prevProjects = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 3 + projects.length) % projects.length);
    };

    return (
        <section id="projects" className="py-16 bg-gradient-to-b from-gray-100 to-white">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-center mb-1 text-gray-800"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    My Projects
                </motion.h2>
                <motion.p
                    className="text-center text-gray-600 mb-8 text-sm"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Showcasing {projects.length} innovative projects
                </motion.p>
                <div className="relative">
                    <div className="flex justify-between items-center mb-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={prevProjects}
                            className="bg-accent text-white p-2 rounded-full shadow-md"
                        >
                            <FaChevronLeft size={14} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={nextProjects}
                            className="bg-accent text-white p-2 rounded-full shadow-md"
                        >
                            <FaChevronRight size={14} />
                        </motion.button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {projects.slice(currentIndex, currentIndex + 3).map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="bg-white rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                <div className="relative">
                                    <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
                                    <div className="absolute top-0 left-0 bg-accent text-white text-sm font-bold p-1 rounded-br-lg">
                                        #{currentIndex + index + 1}
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold mb-2 text-gray-800 truncate">{project.title}</h3>
                                    <p className="text-xs text-gray-600 mb-3 h-10 overflow-hidden">{project.description}</p>
                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <span key={tech} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-accent text-white px-3 py-1 rounded-lg text-xs font-medium w-full transition duration-300 ease-in-out transform hover:bg-accent-dark"
                                        onClick={() => handleViewDetails(project)}
                                    >
                                        View Details
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-lg shadow-2xl max-w-2xl w-full overflow-hidden"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h3>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="text-gray-500 hover:text-gray-700"
                                        onClick={() => setSelectedProject(null)}
                                    >
                                        <FaTimes size={20} />
                                    </motion.button>
                                </div>
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{selectedProject.longDescription}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {selectedProject.technologies.map((tech) => (
                                        <span key={tech} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex space-x-3">
                                    <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" 
                                       className="flex items-center bg-gray-800 text-white px-3 py-1 rounded-lg transition duration-300 hover:bg-gray-700 text-sm">
                                        <FaGithub className="mr-1" /> GitHub
                                    </a>
                                    <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" 
                                       className="flex items-center bg-accent text-white px-3 py-1 rounded-lg transition duration-300 hover:bg-accent-dark text-sm">
                                        <FaExternalLinkAlt className="mr-1" /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;