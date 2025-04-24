'use client';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-gray-700 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="text-xl font-bold text-white">رزومه من</div>
        <nav className="hidden sm:flex gap-6 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-white transition">
            خانه
          </Link>
          <Link href="/about" className="hover:text-white transition">
            درباره من
          </Link>
          <Link href="/projects" className="hover:text-white transition">
            پروژه‌ها
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            تماس با من
          </Link>
        </nav>
        <div className="sm:hidden">
          <button
            type="button"
            className="text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(prev => !prev)}
          >
            <FaBars />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden px-4 pt-4 space-y-2 text-sm font-medium text-gray-300 overflow-hidden"
          >
            <Link href="/" className="block hover:text-white transition">خانه</Link>
            <Link href="/about" className="block hover:text-white transition">درباره من</Link>
            <Link href="/projects" className="block hover:text-white transition">پروژه‌ها</Link>
            <Link href="/contact" className="block hover:text-white transition">تماس با من</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;