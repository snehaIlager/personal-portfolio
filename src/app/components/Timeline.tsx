'use client';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const timeline = [
  {
    icon: <FaGraduationCap className="text-highlight text-xl" />,
    title: 'Dayananda Sagar University,Bangalore',
    date: '2022-2026',
    description: 'B.Tech in Computer Science and Engineering.',
    cgpa: 'CGPA: 7.7',
  },
  {
    icon: <FaBriefcase className="text-highlight text-xl" />,
    title: 'Common Wealth Bank of Australia',
    date: 'July 2025-Present',
    description: 'Currently working as an Software Developer Intern',
  },
  
];

export default function Timeline() {
  return (
    <section id="experience" className="my-12">
      <h2 className="text-2xl font-mono underline text-accent mb-4">Career Path</h2>
      <div className="relative border-l-4 border-accent pl-6">
        {timeline.map((item, idx) => (
          <motion.div
            key={item.title}
            className="mb-8 flex items-start gap-4 bg-cream-light rounded-lg p-4 shadow-lg hover:shadow-2xl outline outline-2 outline-outlinebox"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            whileHover={{ rotateY: 8, scale: 1.03 }}
            style={{ perspective: 600 }}
          >
            <div className="absolute -left-4 mt-1">
              {item.icon}
            </div>
            <div>
              <div className="font-mono text-lg text-accent">{item.title}</div>
              <div className="text-sm text-dark font-mono mb-1">{item.date}</div>
              <div className="text-dark font-mono">{item.description}</div>
              <div className="text-sm text-dark font-mono mb-1">{item.cgpa}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 