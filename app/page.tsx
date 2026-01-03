import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import PackagesSection from '@/components/PackagesSection';
import JourneySection from '@/components/JourneySection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <TrustSection />
        <PackagesSection />
        <JourneySection />
        <ContactSection />
      </main>
    </>
  );
}
