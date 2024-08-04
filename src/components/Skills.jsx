import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3, FaJs, FaNode, FaBootstrap, FaAws, FaGitAlt, FaGithub, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiMysql, SiExpress, SiRedux, SiJsonwebtokens, SiAxios, SiFirebase, SiPostman, SiLinux, SiVercel, SiNginx } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const skills = [
  { id: 1, name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { id: 2, name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
  { id: 3, name: 'CSS3', icon: <FaCss3 />, color: '#1572B6' },
  { id: 4, name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
  { id: 5, name: 'Node.js', icon: <FaNode />, color: '#339933' },
  { id: 6, name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { id: 7, name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
  { id: 8, name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
  { id: 9, name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { id: 10, name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
  { id: 11, name: 'Express', icon: <SiExpress />, color: '#000000' },
  { id: 12, name: 'Redux', icon: <SiRedux />, color: '#764ABC' },
  { id: 13, name: 'AWS', icon: <FaAws />, color: '#FF9900' },
  { id: 14, name: 'JWT', icon: <SiJsonwebtokens />, color: '#000000' },
  { id: 15, name: 'Axios', icon: <SiAxios />, color: '#5A29E4' },
  { id: 16, name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
  { id: 17, name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
  { id: 18, name: 'GitHub', icon: <FaGithub />, color: '#181717' },
  { id: 19, name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
  { id: 20, name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
  { id: 21, name: 'Linux', icon: <SiLinux />, color: '#FCC624' },
  { id: 22, name: 'Vercel', icon: <SiVercel />, color: '#000000' },
  { id: 23, name: 'Nginx', icon: <SiNginx />, color: '#009639' },
  { id: 24, name: 'Next.js', icon: <TbBrandNextjs />, color: '#000000' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              <div 
                className="text-2xl mb-2 p-3 rounded-full shadow-lg"
                style={{ color: skill.color, backgroundColor: `${skill.color}10` }}
              >
                {skill.icon}
              </div>
              <span className="text-gray-700 text-center font-medium text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
