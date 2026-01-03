'use client';

import { motion } from 'framer-motion';
import { TRUST_FEATURES, COMPANY_INFO } from '@/lib/data';

export default function TrustSection() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white via-brand-primary-50/30 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary-100 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-brand-accent-100 text-brand-accent-700 rounded-full text-sm font-semibold">
              Why Choose Us
            </span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary-900 mb-4 sm:mb-6">
            Your Trusted Partner for Sacred Journey
          </h2>
          <p className="text-base sm:text-lg text-brand-primary-700 max-w-3xl mx-auto leading-relaxed">
            We combine years of experience with unwavering commitment to provide you with a blessed and comfortable Umrah experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {TRUST_FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-accent-500 to-brand-secondary-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
                
                <div className="relative bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-brand-primary-100 h-full">
                  <div className="mb-6">
                    <div className="inline-flex p-4 gradient-accent rounded-xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-brand-primary-900 mb-3 group-hover:text-brand-secondary-700 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-brand-primary-600 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-accent-500 to-brand-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="relative"
        >
          <div className="gradient-brand p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-islamic-pattern opacity-10"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-brand-accent-500/20 flex items-center justify-center border-2 border-brand-accent-400">
                    <svg className="w-8 h-8 text-brand-accent-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <div className="text-left">
                    <p className="text-white/90 text-sm font-medium mb-1">
                      Official Tourism License
                    </p>
                    <p className="text-brand-accent-400 font-bold text-3xl md:text-4xl">
                      #{COMPANY_INFO.licenseNumber}
                    </p>
                  </div>
                </div>
                
                <div className="hidden md:block w-px h-16 bg-white/20"></div>
                
                <div className="text-white">
                  <p className="text-lg md:text-xl font-light mb-2">
                    Authorized & Verified
                  </p>
                  <p className="text-sm text-white/70">
                    Ministry Approved Tour Operator
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
