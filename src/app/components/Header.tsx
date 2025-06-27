'use client';
import { FaEnvelope, FaPhone, FaLinkedin ,FaGithub} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-codebg/90 border-b-2 border-accent shadow-lg backdrop-blur"
      style={{ boxShadow: '0 2px 16px 0 #43ffaf33' }}
    >
      <div className="w-full flex flex-col px-8 py-4">
        {/* Top row: Name and contact info */}
        <div className="flex justify-between items-center mb-2">
          <div className="text-left">
            <span className="font-mono text-3xl font-bold underline decoration-highlight decoration-4 text-accent drop-shadow-glow">
              Sneha Ilager👾
            </span>
            <p className="text-sm text-highlight font-mono mt-1">
              Full Stack Dev | ML Enthusiast | Quick Learner 🚀
            </p>
          </div>

          {/* Contact information in one line */}
          <div className="flex items-center gap-4 text-base">
            <a href="tel:+1234567890" className="flex items-center gap-1 hover:text-accent transition-colors font-mono text-light">
              <FaPhone className="animate-bounce" /> 9901504426
            </a>
            <a href="mailto:snehailager76@gmail.com" className="flex items-center gap-1 hover:text-accent transition-colors font-mono text-light">
              <FaEnvelope className="animate-pulse" /> snehailager76@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/sneha-ilager-4833002ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="flex items-center gap-1 hover:text-accent transition-colors font-mono text-light">
              <FaLinkedin className="animate-pulse" /> LinkedIn
            </a>
            <a href="https://github.com/snehaIlager" className="flex items-center gap-1 hover:text-accent transition-colors font-mono text-light">
              <FaGithub className="animate-pulse" /> GitHub
            </a>
          </div>
        </div>

        {/* Bottom row: Navigation aligned to the right */}
        <div className="flex justify-end">
          <nav className="flex space-x-4 font-mono text-sm">
            <a href="#about" className="hover:text-accent underline decoration-accent decoration-1">About </a>
            <a href="#projects" className="hover:text-accent underline decoration-accent decoration-1">Projects </a>
            <a href="#skills" className="hover:text-accent underline decoration-accent decoration-1">Skills </a>
            <a href="#experience" className="hover:text-accent underline decoration-accent decoration-1">Experience </a>
            <a href="#resume" className="hover:text-accent underline decoration-accent decoration-1">Resume</a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
} 