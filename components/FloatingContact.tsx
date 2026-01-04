'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, X, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { COMPANY_INFO } from '@/lib/data';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  const openWhatsApp = () => {
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp.replace(/\+/g, '')}`, '_blank');
  };

  const makeCall = () => {
    window.location.href = `tel:${COMPANY_INFO.phones[1].replace(/\s/g, '')}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="flex flex-col gap-3 mb-2"
          >
            {/* Call Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={makeCall}
              className="flex items-center gap-3 bg-white text-brand-primary-900 px-4 py-3 rounded-full shadow-2xl border border-brand-primary-100 group"
            >
              <span className="text-sm font-bold">Call Us</span>
              <div className="bg-brand-primary-600 p-2 rounded-full text-white group-hover:bg-brand-primary-700 transition-colors">
                <Phone size={20} />
              </div>
            </motion.button>

            {/* WhatsApp Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={openWhatsApp}
              className="flex items-center gap-3 bg-white text-green-600 px-4 py-3 rounded-full shadow-2xl border border-green-100 group"
            >
              <span className="text-sm font-bold">WhatsApp</span>
              <div className="bg-green-500 p-2 rounded-full text-white group-hover:bg-green-600 transition-colors">
                <MessageCircle size={20} />
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button (subtle breathing shadow + tiny scale) */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.98 }}
        animate={!isOpen ? { scale: [1, 1.015, 1] } : {}}
        transition={!isOpen ? { duration: 4, repeat: Infinity, ease: 'easeInOut' } : {}}
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-2xl text-white transition-colors duration-300 relative subtle-breathe ${
          isOpen ? 'bg-brand-primary-900 rotate-90' : 'bg-green-500 hover:bg-green-600'
        }`}
        style={{
          boxShadow: isOpen
            ? undefined
            : '0 8px 20px rgba(16,185,129,0.12), 0 2px 6px rgba(0,0,0,0.08)'
        }}
      >
        {/* Very subtle outer glow (fades quickly) */}
        {!isOpen && (
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.18) 0%, rgba(34,197,94,0.02) 60%, transparent 70%)' }}
            animate={{ opacity: [0.85, 0.25, 0.85] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}

        <div className="relative z-10">
          {isOpen ? <X size={28} /> : <Phone size={28} />}
        </div>
      </motion.button>
    </div>
  );
}
