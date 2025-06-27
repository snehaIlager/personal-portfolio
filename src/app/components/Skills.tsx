'use client';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaTools, FaCloud, FaHtml5, FaCss3Alt, FaJs, FaPython, FaJava } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiFirebase, SiMongodb, SiMysql, SiC, SiTensorflow } from 'react-icons/si';

const skills = {
  'Programming Languages': ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++'],
  'Web Technologies': ['React', 'Next.js', 'Node.js', 'HTML', 'CSS', 'Tailwind CSS'],
  'Databases': ['MongoDB', 'Firebase', 'MySQL', 'PostgreSQL'],
  'Tools & Platforms': ['Git', 'Docker', 'AWS', 'VS Code', 'Figma'],
  'Machine Learning': ['TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy'],
  'Other': ['REST APIs', 'GraphQL', 'Agile', 'JIRA', 'Postman']
};

const techStack = [
  { name: 'Next.js', icon: <SiNextdotjs className="text-4xl text-black" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-sky-400" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-4xl text-yellow-400" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-4xl text-green-600" /> },
  { name: 'SQL', icon: <SiMysql className="text-4xl text-blue-600" /> },
  { name: 'HTML', icon: <FaHtml5 className="text-4xl text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-4xl text-yellow-400" /> },
  { name: 'Machine Learning', icon: <SiTensorflow className="text-4xl text-orange-400" /> },
  { name: 'CNN', icon: <span className="text-4xl">🧠</span> },
  { name: 'C', icon: <SiC className="text-4xl text-blue-800" /> },
  { name: 'Python', icon: <FaPython className="text-4xl text-blue-400" /> },
  { name: 'Java', icon: <FaJava className="text-4xl text-red-700" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="my-12">
      <h2 className="text-2xl font-mono underline text-accent mb-6">Skills</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, skillList], categoryIdx) => (
          <motion.div
            key={category}
            className="bg-cream-light rounded-lg p-4 shadow-lg hover:shadow-2xl outline outline-2 outline-outlinebox"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIdx * 0.1 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            style={{ perspective: 600 }}
          >
            <div className="flex items-center gap-2 mb-3">
              {category === 'Programming Languages' && <FaCode className="text-highlight text-xl" />}
              {category === 'Web Technologies' && <FaCode className="text-highlight text-xl" />}
              {category === 'Databases' && <FaDatabase className="text-highlight text-xl" />}
              {category === 'Tools & Platforms' && <FaTools className="text-highlight text-xl" />}
              {category === 'Machine Learning' && <FaCloud className="text-highlight text-xl" />}
              {category === 'Other' && <FaTools className="text-highlight text-xl" />}
              <h3 className="font-mono text-lg font-bold text-accent">{category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill, skillIdx) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 bg-accent/20 text-accent font-mono text-sm rounded-full border border-accent/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: categoryIdx * 0.1 + skillIdx * 0.05 }}
                  whileHover={{ scale: 1.1, backgroundColor: '#43ffaf40' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      {/* Tech Stack Section */}
      <div className="mt-12">
        <h3 className="text-xl font-mono font-bold text-accent mb-4 underline">Tech Stack</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {techStack.map(({ name, icon }) => (
            <div key={name} className="flex flex-col items-center w-24">
              {icon}
              <span className="mt-2 text-sm font-mono text-dark text-center">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 