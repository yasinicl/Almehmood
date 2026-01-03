'use client';

import { motion } from 'framer-motion';
import { JOURNEY_STEPS } from '@/lib/data';

export default function JourneySection() {
  return (
    <section id="process" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-brand-primary-50/30 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-secondary-100 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-brand-accent-100 text-brand-accent-700 rounded-full text-sm font-semibold">
              Simple Process
            </span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary-900 mb-4 sm:mb-6">
            Your Journey in 4 Easy Steps
          </h2>
          <p className="text-base sm:text-lg text-brand-primary-700 max-w-3xl mx-auto leading-relaxed">
            From initial consultation to your blessed journey, we guide you every step of the way
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="hidden md:block">
            <div className="relative pb-12">
              <div className="absolute top-20 left-[12%] right-[12%] h-2 bg-gradient-to-r from-brand-primary-400 via-brand-accent-400 to-brand-secondary-400 rounded-full shadow-lg"></div>
              
              <div className="grid grid-cols-4 gap-6 relative">
                {JOURNEY_STEPS.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.7 }}
                    className="relative"
                  >
                    <div className="flex justify-center mb-8 relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 360 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="relative"
                      >
                        <div className="absolute inset-0 bg-brand-accent-400 rounded-full blur-xl opacity-40 animate-pulse"></div>
                        
                        <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-brand-accent-500 to-brand-accent-600 shadow-2xl flex items-center justify-center border-4 border-white">
                          <div className="text-center">
                            <span className="text-white text-5xl font-bold block">
                              {step.number}
                            </span>
                            <div className="w-12 h-1 bg-white/50 mx-auto mt-2 rounded-full"></div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-brand-primary-100"
                    >
                      <h3 className="text-lg font-bold text-brand-primary-900 mb-3 text-center">
                        {step.title}
                      </h3>
                      <p className="text-brand-primary-600 leading-relaxed text-center text-sm">
                        {step.description}
                      </p>
                    </motion.div>

                    {index < JOURNEY_STEPS.length - 1 && (
                      <div className="absolute top-20 -right-3 z-20 hidden lg:block">
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.4 }}
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-brand-accent-500">
                            <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </motion.div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:hidden space-y-6">
            {JOURNEY_STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative flex-shrink-0"
                  >
                    <div className="absolute inset-0 bg-brand-accent-400 rounded-full blur-lg opacity-30"></div>
                    <div className="relative w-20 h-20 gradient-accent rounded-full shadow-xl flex items-center justify-center border-4 border-white">
                      <span className="text-white text-3xl font-bold">
                        {step.number}
                      </span>
                    </div>
                  </motion.div>
                  
                  {index < JOURNEY_STEPS.length - 1 && (
                    <div className="w-1 flex-1 bg-gradient-to-b from-brand-accent-400 to-brand-secondary-400 mt-4 rounded-full min-h-[80px]"></div>
                  )}
                </div>

                <div className="flex-1 pb-8">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-brand-primary-100 hover:shadow-xl transition-all h-full">
                    <h3 className="text-xl font-bold text-brand-primary-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-brand-primary-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-center mt-20"
        >
          <div className="inline-block gradient-brand px-8 py-12 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-islamic-pattern opacity-10"></div>
            <div className="relative z-10">
              <p className="text-white text-lg sm:text-xl md:text-2xl font-light mb-4 sm:mb-6 max-w-2xl">
                Ready to embark on your sacred journey?
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 gradient-accent text-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-brand-accent-500/50 transition-all"
              >
                Get Started Today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
