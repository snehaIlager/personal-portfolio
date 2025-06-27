'use client';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ResumeButton() {
  return (
    <motion.a
      id="resume"
      href="https://drive.google.com/file/d/1GiRA2osqBH0E25JrCtZh54gszQrta70P/view?usp=sharing"
      download
      whileHover={{ scale: 1.08, rotateZ: 2 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2 px-6 py-3 bg-cream-light text-dark font-mono font-semibold rounded-lg border-2 border-accent shadow-lg hover:shadow-accent/50 transition-all text-lg outline outline-2 outline-outlinebox"
      style={{ boxShadow: '0 0 16px 0 #43ffaf66' }}
    >
      <FaDownload className="animate-bounce" /> Download Resume
    </motion.a>
  );
} 