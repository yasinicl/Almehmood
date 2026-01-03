'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MessageSquare, Package, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  selectedPackage?: string;
}

export default function ContactForm({ selectedPackage }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
    message: '',
  });

  useEffect(() => {
    if (selectedPackage) {
      setFormData((prev) => ({ ...prev, package: selectedPackage }));
    }
  }, [selectedPackage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

      if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS credentials are missing');
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone_number: formData.phone,
        selected_package: formData.package,
        message: formData.message,
        to_name: 'Al-Mehmood Hajj & Umrah',
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        package: '',
        message: '',
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border border-brand-primary-100"
    >
      <h3 className="text-2xl font-bold text-brand-primary-900 mb-6 flex items-center gap-2">
        <Send className="w-6 h-6 text-brand-accent-600" />
        Send us a Message
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-brand-primary-700 flex items-center gap-2">
              <User className="w-4 h-4" /> Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-xl border border-brand-primary-200 focus:border-brand-accent-500 focus:ring-2 focus:ring-brand-accent-200 outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-semibold text-brand-primary-700 flex items-center gap-2">
              <Phone className="w-4 h-4" /> Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 rounded-xl border border-brand-primary-200 focus:border-brand-accent-500 focus:ring-2 focus:ring-brand-accent-200 outline-none transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-brand-primary-700 flex items-center gap-2">
            <Mail className="w-4 h-4" /> Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 rounded-xl border border-brand-primary-200 focus:border-brand-accent-500 focus:ring-2 focus:ring-brand-accent-200 outline-none transition-all"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="package" className="text-sm font-semibold text-brand-primary-700 flex items-center gap-2">
            <Package className="w-4 h-4" /> Selected Package
          </label>
          <select
            id="package"
            name="package"
            value={formData.package}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-brand-primary-200 focus:border-brand-accent-500 focus:ring-2 focus:ring-brand-accent-200 outline-none transition-all bg-white"
          >
            <option value="">Select a package (Optional)</option>
            <option value="Quad Room">Quad Room Package</option>
            <option value="Triple Room">Triple Room Package</option>
            <option value="Double Room">Double Room Package</option>
            <option value="Custom">Custom Package</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-semibold text-brand-primary-700 flex items-center gap-2">
            <MessageSquare className="w-4 h-4" /> Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            className="w-full px-4 py-3 rounded-xl border border-brand-primary-200 focus:border-brand-accent-500 focus:ring-2 focus:ring-brand-accent-200 outline-none transition-all resize-none"
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 ${
            isSubmitting ? 'bg-brand-primary-400 cursor-not-allowed' : 'gradient-accent'
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Inquiry
            </>
          )}
        </motion.button>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-xl border border-green-100"
          >
            <CheckCircle2 className="w-5 h-5" />
            <p className="text-sm font-medium">Thank you! Your message has been sent successfully.</p>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-xl border border-red-100"
          >
            <AlertCircle className="w-5 h-5" />
            <p className="text-sm font-medium">Oops! Something went wrong. Please try again or contact us via WhatsApp.</p>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}
