import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'A modern, responsive portfolio built with Next.js and Tailwind CSS',
  keywords: [
    'Portfolio',
    'Next.js',
    'Tailwind CSS',
    'React',
    'Frontend Developer',
  ],
  authors: [{ name: 'Your Name' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-cream-dark text-cream-light`}>{children}</body>
    </html>
  );
}
