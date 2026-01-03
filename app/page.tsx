'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import PackagesSection from '@/components/PackagesSection';
import JourneySection from '@/components/JourneySection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState<string>('');

  const handleSelectPackage = (packageName: string) => {
    setSelectedPackage(packageName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <TrustSection />
        <PackagesSection onSelectPackage={handleSelectPackage} />
        <JourneySection />
        <ContactSection selectedPackage={selectedPackage} />
      </main>
    </>
  );
}
