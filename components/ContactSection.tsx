'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import Image from 'next/image';
import logo from '../public/logo.png';

export default function ContactSection() {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}`, '_blank');
  };

  const makeCall = (phone: string) => {
    window.location.href = `tel:${phone.replace(/\s/g, '')}`;
  };

  const sendEmail = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="gradient-brand relative py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="absolute inset-0 bg-islamic-pattern opacity-10"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-accent-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-secondary-500/20 rounded-full blur-3xl"></div>
        
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
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-brand-accent-500/30 backdrop-blur-sm text-brand-accent-100 rounded-full text-sm font-semibold border border-brand-accent-400/30">
                Let&apos;s Connect
              </span>
            </motion.div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6">
              Book Your Umrah with <br className="hidden sm:block" />
              <span className="text-brand-accent-400">Peace of Mind</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Let us handle the details while you focus on your spiritual journey. 
              Our experienced team is here to assist you every step of the way.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="lg:col-span-2"
            >
              <div className="glass-effect bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl hover:shadow-brand-accent-500/20 transition-all duration-300 border border-white/20 h-full">
                <div className="flex justify-center mb-6">
                  <div className="p-4 gradient-accent rounded-xl shadow-xl">
                    <Phone className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-white font-bold text-xl mb-6 text-center">
                  Call Us Anytime
                </h3>
                <div className="space-y-3">
                  {COMPANY_INFO.phones.map((phone, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.05, x: 5 }}
                      onClick={() => makeCall(phone)}
                      className="w-full text-white bg-white/10 hover:bg-white/20 transition-all py-3 px-4 rounded-lg text-center font-semibold border border-white/20 hover:border-brand-accent-400"
                    >
                      {phone}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="lg:col-span-2"
            >
              <div className="glass-effect bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl hover:shadow-brand-accent-500/20 transition-all duration-300 border border-white/20 h-full">
                <div className="flex justify-center mb-6">
                  <div className="p-4 gradient-accent rounded-xl shadow-xl">
                    <Mail className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-white font-bold text-xl mb-6 text-center">
                  Email Us
                </h3>
                <div className="space-y-3">
                  {COMPANY_INFO.emails.map((email, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.05, x: 5 }}
                      onClick={() => sendEmail(email)}
                      className="w-full text-white bg-white/10 hover:bg-white/20 transition-all py-3 px-4 rounded-lg text-center font-medium border border-white/20 hover:border-brand-accent-400 break-all"
                    >
                      {email}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                <div className="flex items-center gap-3 sm:gap-4 text-center sm:text-left">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="text-white">
                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-1">Chat on WhatsApp</h4>
                    <p className="text-sm sm:text-base text-green-100">Get instant responses to your queries</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openWhatsApp}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-green-600 text-sm sm:text-base font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all whitespace-nowrap"
                >
                  Start Chatting
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="bg-white relative">
        <div className="h-1 bg-gradient-to-r from-brand-accent-500 via-brand-secondary-500 to-brand-accent-500"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-44 h-16 sm:w-32 sm:h-20 md:w-[250px] md:h-24">
                  <Image
                    src={logo}
                    alt="Al-Mehmood Hajj & Umrah Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                {/* <div>
                  <h3 className="text-xl font-bold text-brand-primary-900">Al-Mehmood</h3>
                  <p className="text-brand-secondary-600 text-sm">Hajj & Umrah</p>
                </div> */}
              </div>
              <p className="text-brand-primary-700 leading-relaxed mb-4">
                {COMPANY_INFO.tagline}
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-accent-500/20 rounded-lg">
                <span className="text-brand-accent-700 text-sm font-semibold">
                  License #{COMPANY_INFO.licenseNumber}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h4 className="text-brand-primary-900 font-bold text-lg mb-6">Quick Links</h4>
              <nav className="space-y-3">
                {['Home', 'About', 'Packages', 'Process', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-brand-primary-700 hover:text-brand-accent-600 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h4 className="text-brand-primary-900 font-bold text-lg mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-accent-600 flex-shrink-0 mt-1" />
                  <div className="text-brand-primary-700 text-sm space-y-1">
                    {COMPANY_INFO.phones.map((phone, idx) => (
                      <div key={idx}>{phone}</div>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-accent-600 flex-shrink-0 mt-1" />
                  <div className="text-brand-primary-700 text-sm space-y-1">
                    {COMPANY_INFO.emails.map((email, idx) => (
                      <div key={idx} className="break-all">{email}</div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="pt-8 border-t border-brand-primary-200"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-brand-primary-600 text-sm text-center md:text-left">
                © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
              </p>
              <p className="text-brand-accent-600 text-sm">
                Made with ♥ for the Ummah
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </section>
  );
}
