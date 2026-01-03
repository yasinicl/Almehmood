'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';

export default function HeroSection() {
  const scrollToPackages = () => {
    const packagesSection = document.getElementById('packages');
    packagesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden gradient-brand">
      <div className="absolute inset-0 bg-islamic-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-primary-900/60 via-transparent to-brand-primary-950/80"></div>
      
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-accent-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent-500/20 backdrop-blur-sm border border-brand-accent-400/30 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-brand-accent-400" />
              <span className="text-sm font-medium text-brand-accent-100">
                Licensed Tour Operator #{COMPANY_INFO.licenseNumber}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block">{COMPANY_INFO.name}</span>
              </h1>
              
              <div className="relative">
                <div className="absolute -left-3 sm:-left-4 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-brand-accent-500 to-transparent rounded-full"></div>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90 font-light leading-relaxed pl-3 sm:pl-4">
                  {COMPANY_INFO.tagline}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToPackages}
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 gradient-accent text-white text-sm sm:text-base font-semibold rounded-xl shadow-2xl hover:shadow-brand-accent-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Umrah Packages
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={openWhatsApp}
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-green-500 hover:bg-green-600 text-white text-sm sm:text-base font-semibold rounded-xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                WhatsApp Us
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap items-center gap-6 pt-6"
            >
              {['Licensed', 'Experienced', 'Trusted'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-brand-accent-500/20 flex items-center justify-center">
                    <span className="text-brand-accent-400 font-bold">✓</span>
                  </div>
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-96 h-96 bg-brand-accent-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
            
            <div className="relative z-10">
              <svg
                viewBox="0 0 500 500"
                className="w-full max-w-lg drop-shadow-2xl"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g className="animate-pulse" style={{ animationDuration: '4s' }}>
                  <circle cx="120" cy="100" r="3" fill="#f4a261" opacity="0.8" />
                  <circle cx="380" cy="120" r="2" fill="#f4a261" opacity="0.6" />
                  <circle cx="150" cy="150" r="2" fill="#f4a261" opacity="0.7" />
                  <circle cx="350" cy="90" r="3" fill="#f4a261" opacity="0.9" />
                  
                  <g transform="translate(250, 80)">
                    <circle cx="0" cy="0" r="30" fill="#f4a261" opacity="0.3" />
                    <circle cx="10" cy="-5" r="28" fill="#0f4c5c" />
                  </g>
                </g>

                <g fill="rgba(244, 162, 97, 0.15)" stroke="#f4a261" strokeWidth="3">
                  <ellipse cx="250" cy="220" rx="80" ry="50" />
                  <rect x="190" y="220" width="120" height="130" rx="5" />
                  
                  <ellipse cx="150" cy="240" rx="40" ry="25" />
                  <rect x="120" y="240" width="60" height="110" rx="3" />
                  
                  <ellipse cx="350" cy="240" rx="40" ry="25" />
                  <rect x="320" y="240" width="60" height="110" rx="3" />
                  
                  <rect x="100" y="260" width="25" height="120" rx="3" />
                  <rect x="375" y="260" width="25" height="120" rx="3" />
                  
                  <polygon points="112.5,260 112.5,240 100,250 125,250" />
                  <polygon points="387.5,260 387.5,240 375,250 400,250" />
                  
                  <path d="M 210 280 Q 210 260 220 260 Q 230 260 230 280" strokeWidth="2" fill="none" />
                  <path d="M 240 280 Q 240 260 250 260 Q 260 260 260 280" strokeWidth="2" fill="none" />
                  <path d="M 270 280 Q 270 260 280 260 Q 290 260 290 280" strokeWidth="2" fill="none" />
                </g>

                <g transform="translate(250, 380)">
                  <rect x="-40" y="-30" width="80" height="60" rx="3" fill="#1b6f6a" stroke="#f4a261" strokeWidth="2" />
                  <line x1="-40" y1="-10" x2="40" y2="-10" stroke="#f4a261" strokeWidth="1" opacity="0.5" />
                  <line x1="-40" y1="10" x2="40" y2="10" stroke="#f4a261" strokeWidth="1" opacity="0.5" />
                </g>

                <g opacity="0.3">
                  <circle cx="250" cy="250" r="180" fill="none" stroke="#f4a261" strokeWidth="1" strokeDasharray="5,5" />
                  <circle cx="250" cy="250" r="200" fill="none" stroke="#f4a261" strokeWidth="1" strokeDasharray="8,8" />
                </g>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
