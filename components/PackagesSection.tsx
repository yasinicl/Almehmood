'use client';

import { motion } from 'framer-motion';
import { Check, Star, Sparkles } from 'lucide-react';
import { PACKAGES, PACKAGE_DETAILS } from '@/lib/data';

interface PackagesSectionProps {
  onSelectPackage?: (packageName: string) => void;
}

export default function PackagesSection({ onSelectPackage }: PackagesSectionProps) {
  return (
    <section id="packages" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-brand-secondary-50/20 to-white relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-brand-accent-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-brand-primary-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute inset-0 bg-islamic-pattern opacity-5"></div>
      
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
              Our Packages
            </span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary-900 mb-4 sm:mb-6">
            Choose Your Umrah Package
          </h2>
          <p className="text-base sm:text-lg text-brand-primary-700 max-w-3xl mx-auto leading-relaxed">
            Premium packages designed to provide comfort, convenience, and spiritual fulfillment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20 max-w-6xl mx-auto">
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.7 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative"
            >
              {pkg.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <div className="gradient-accent px-6 py-2.5 rounded-full shadow-xl flex items-center gap-2 border-2 border-white">
                    <Star className="w-4 h-4 text-white fill-white" />
                    <span className="text-white font-bold text-sm">Most Popular</span>
                  </div>
                </motion.div>
              )}

              <div className={`absolute -inset-1 bg-gradient-to-br rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 ${
                pkg.popular 
                  ? 'from-brand-accent-400 to-brand-secondary-500' 
                  : 'from-brand-primary-400 to-brand-secondary-400'
              }`}></div>

              <div className={`relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 h-full border-2 ${
                pkg.popular 
                  ? 'border-brand-accent-400 bg-gradient-to-br from-white to-brand-accent-50/30' 
                  : 'border-brand-primary-200 hover:border-brand-accent-300'
              }`}>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-primary-500 to-brand-secondary-600 mb-4 shadow-lg">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-primary-900">
                    {pkg.type}
                  </h3>
                </div>

                <div className="text-center mb-8 relative">
                  <div className="mb-3">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-bold gradient-accent bg-clip-text text-transparent">
                        {pkg.price}
                      </span>
                      <span className="text-xl text-brand-primary-700 font-semibold">
                        {pkg.currency}
                      </span>
                    </div>
                  </div>
                  <p className="text-brand-primary-600 font-medium">{pkg.per}</p>
                  
                  <div className="w-24 h-1 gradient-accent mx-auto mt-6 rounded-full shadow-lg"></div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-brand-accent-500/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-brand-accent-600" strokeWidth={3} />
                        </div>
                      </div>
                      <span className="text-brand-primary-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectPackage?.(pkg.type)}
                  className={`w-full py-4 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                    pkg.popular
                      ? 'gradient-accent'
                      : 'bg-gradient-to-r from-brand-primary-600 to-brand-secondary-600 hover:from-brand-accent-500 hover:to-brand-accent-600'
                  }`}
                >
                  Select Package
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="gradient-brand rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-islamic-pattern opacity-10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                What&apos;s Included
              </h3>
              <p className="text-white/80 text-lg">
                Everything you need for a comfortable and blessed journey
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="glass-effect bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-brand-accent-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-brand-accent-300 font-bold text-sm uppercase tracking-wider">
                    Duration
                  </h4>
                </div>
                <p className="text-white text-2xl font-bold">
                  {PACKAGE_DETAILS.duration}
                </p>
              </div>

              <div className="glass-effect bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-brand-accent-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </div>
                  <h4 className="text-brand-accent-300 font-bold text-sm uppercase tracking-wider">
                    Makkah
                  </h4>
                </div>
                <p className="text-white text-2xl font-bold mb-1">
                  {PACKAGE_DETAILS.makkah.nights}
                </p>
                <p className="text-white/70 text-sm">{PACKAGE_DETAILS.makkah.hotel}</p>
                <p className="text-brand-accent-300 text-xs mt-1 font-medium">
                  {PACKAGE_DETAILS.makkah.distance}
                </p>
              </div>

              <div className="glass-effect bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-brand-accent-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </div>
                  <h4 className="text-brand-accent-300 font-bold text-sm uppercase tracking-wider">
                    Madinah
                  </h4>
                </div>
                <p className="text-white text-2xl font-bold mb-1">
                  {PACKAGE_DETAILS.madinah.nights}
                </p>
                <p className="text-white/70 text-sm">{PACKAGE_DETAILS.madinah.hotel}</p>
                <p className="text-brand-accent-300 text-xs mt-1 font-medium">
                  {PACKAGE_DETAILS.madinah.distance}
                </p>
              </div>
            </div>

            <div className="glass-effect bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
              <h4 className="text-white font-bold text-xl mb-6 text-center flex items-center justify-center gap-2">
                <Check className="w-6 h-6 text-brand-accent-400" />
                All-Inclusive Services
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {PACKAGE_DETAILS.included.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-all"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-7 h-7 rounded-full bg-brand-accent-500 flex items-center justify-center shadow-lg">
                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <span className="text-white font-semibold">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
