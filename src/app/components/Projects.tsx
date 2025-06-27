'use client';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const projects = [
  {
    title: 'Tuberculosis Prediction using CNN',
    description: 'A machine learning project that predicts tuberculosis using a VGG16 and ResnNet16 models.',
    tech: '(Python, TensorFlow, Keras, VGG16, ResnNet16, Flask)',
    image: '/project1.svg',
    link: 'https://github.com/snehaIlager/TB_PREDICTION-USING-DEEP-LEARNING',
  },
  {
    title: 'Diverse-Thread',
    description: 'A website for a fashion brand "diverse-thread" which is a startup that sells handmade clothes.',
    tech: '(HTML, CSS, JavaScript)',
    image: '/project2.svg',
    link: 'https://6841e9144a113e0f73b70a03--stately-daifuku-b2abea.netlify.app/',
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="my-12">
      <h2 className="text-2xl font-mono underline text-accent mb-4">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            className="bg-cream-light rounded-lg shadow-lg hover:shadow-2xl transition-shadow overflow-hidden group outline outline-2 outline-outlinebox"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            whileHover={{ rotateX: 8, rotateY: -8, scale: 1.04 }}
            style={{ perspective: 600 }}
          >
            <Image src={project.image} alt={project.title} width={400} height={160} className="w-full h-40 object-contain bg-cream-light p-4 group-hover:scale-105 transition-transform duration-300" />
            <div className="p-4">
              <h3 className="text-lg font-mono font-bold text-accent mb-1">{project.title}</h3>
              <p className="text-dark font-mono mb-2">{project.tech}</p>
              <p className="text-dark font-mono mb-2 italic">{project.description}</p>
              
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent hover:text-highlight font-mono transition-colors"
              >
                View Project <FaExternalLinkAlt className="ml-1 animate-pulse" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 