'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm relative">
      <div className="flex justify-between items-center px-8 py-4 md:px-16 lg:px-24">
        <div className="text-2xl font-bellota text-blue-500 md:text-2xl text-center w-full md:w-auto">
          <Link href="/">
            <span className="hover:text-blue-700 text-xl md:text-3xl">Lighthouse Apartment</span>
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-500 focus:outline-none w-12 h-12 flex items-center justify-center"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? -90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? '✕' : '☰'}
            </motion.div>
          </button>
        </div>
        <div className="hidden md:flex space-x-8 text-xl font-bellota">
          <Link href="/">
            <span className="hover:text-blue-700">Home</span>
          </Link>
          <Link href="/about">
            <span className="hover:text-blue-700">About</span>
          </Link>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute inset-x-0 top-full flex flex-col items-center justify-start bg-white space-y-4 text-xl font-bellota z-50"
            style={{ height: 'calc(100vh - 64px)', paddingTop: '1rem' }} // Added padding-top for extra space
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Link href="/" onClick={handleLinkClick}>
              <span className="hover:text-blue-700">Home</span>
            </Link>
            <Link href="/about" onClick={handleLinkClick}>
              <span className="hover:text-blue-700">About</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
