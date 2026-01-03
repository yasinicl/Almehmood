'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/data';
import Image from 'next/image';
import logo from '../public/logo.png';
import ContactForm from './ContactForm';

interface ContactSectionProps {
  selectedPackage?: string;
}

export default function ContactSection({ selectedPackage }: ContactSectionProps) {
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

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            <div className="lg:col-span-3">
              <ContactForm selectedPackage={selectedPackage} />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="glass-effect bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 gradient-accent rounded-xl shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xl">Call Us</h3>
                </div>
                <div className="space-y-3">
                  {COMPANY_INFO.phones.map((phone, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.02, x: 5 }}
                      onClick={() => makeCall(phone)}
                      className="w-full text-white bg-white/5 hover:bg-white/10 transition-all py-3 px-4 rounded-lg text-left font-semibold border border-white/10 flex items-center justify-between group"
                    >
                      <span>{phone}</span>
                      <Phone className="w-4 h-4 text-brand-accent-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="glass-effect bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 gradient-accent rounded-xl shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-xl">Email Us</h3>
                </div>
                <div className="space-y-3">
                  {COMPANY_INFO.emails.map((email, idx) => (
                    <motion.button
                      key={idx}
                      whileHover={{ scale: 1.02, x: 5 }}
                      onClick={() => sendEmail(email)}
                      className="w-full text-white bg-white/5 hover:bg-white/10 transition-all py-3 px-4 rounded-lg text-left font-medium border border-white/10 flex items-center justify-between group break-all"
                    >
                      <span className="text-sm sm:text-base">{email}</span>
                      <Mail className="w-4 h-4 text-brand-accent-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-2xl shadow-xl hover:shadow-green-500/30 transition-all group cursor-pointer"
                onClick={openWhatsApp}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white">
                    <h4 className="font-bold text-lg">WhatsApp Chat</h4>
                    <p className="text-sm text-green-100">Instant response</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
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
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-accent-600 flex-shrink-0 mt-1" />
                  <div className="text-brand-primary-700 text-sm">
                    {COMPANY_INFO.address}
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
