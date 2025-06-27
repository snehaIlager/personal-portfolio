'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase'; // Adjust this path if your file is elsewhere

export default function AboutMe() {
  const [bio, setBio] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBio = async () => {
      const ref = doc(db, 'aboutMe', 'sneha'); // your Firestore doc
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setBio(snap.data().bio);
      }
      setLoading(false);
    };
    fetchBio();
  }, []);

  return (
    <motion.section
      id="about"
      className="my-12 p-6 rounded-lg bg-cream-dark shadow outline outline-2 outline-outlinebox"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-2xl font-mono underline text-accent mb-2">About Me</h2>
      <p className="text-lg text-dark font-mono whitespace-pre-line">
        {loading ? 'Loading your bio...' : bio}
      </p>
    </motion.section>
  );
}
