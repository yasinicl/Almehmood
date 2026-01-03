'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';
import logo from '../public/logo.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Packages', href: '#packages' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection('#home')}
            >
              <div className="relative w-40 h-16 sm:w-32 sm:h-20 md:w-[200px] md:h-24">
                <Image
                  src={logo}
                  alt="Al-Mehmood Hajj & Umrah Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* <div>
                <h1
                  className={`text-lg sm:text-xl md:text-2xl font-bold transition-colors ${
                    isScrolled ? 'text-brand-primary-900' : 'text-white'
                  }`}
                >
                  Al-Mehmood
                </h1>
                <p
                  className={`text-[10px] sm:text-xs transition-colors ${
                    isScrolled ? 'text-brand-secondary-600' : 'text-white/90'
                  }`}
                >
                  Hajj & Umrah
                </p>
              </div> */}
            </motion.div>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-sm font-medium transition-colors relative group ${
                    isScrolled
                      ? 'text-brand-primary-700 hover:text-brand-accent-500'
                      : 'text-brand hover:text-brand-accent-400'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                      isScrolled ? 'bg-brand-accent-500' : 'bg-brand-accent-400'
                    }`}
                  ></span>
                </button>
              ))}
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="px-6 py-2.5 gradient-accent text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Book Now
              </motion.button>
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-brand-primary-700 hover:bg-brand-primary-50'
                  : 'text-brand hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed inset-y-0 right-0 z-40 w-full sm:w-80 gradient-brand shadow-2xl lg:hidden"
            >
              <div className="flex flex-col h-full pt-24 px-6 pb-6">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => scrollToSection(link.href)}
                      className="text-left px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors text-lg font-medium"
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </nav>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => scrollToSection('#contact')}
                  className="mt-8 px-6 py-3 gradient-accent text-white font-semibold rounded-lg shadow-lg flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Book Now
                </motion.button>

                <div className="mt-auto pt-6 border-t border-white/20">
                  <p className="text-white/70 text-sm text-center">
                    Licensed Tour Operator
                  </p>
                  <p className="text-brand-accent-400 font-bold text-center mt-1">
                    #3395
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
