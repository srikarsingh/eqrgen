'use client';

import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { QRGenerator } from '@/components/QRGenerator';
import { Features } from '@/components/Features';
import { Examples } from '@/components/Examples';
import { Pricing } from '@/components/Pricing';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

type ActiveSection = 'home' | 'generator' | 'features' | 'examples' | 'pricing' | 'about' | 'contact';

export default function Home() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'generator':
        return <QRGenerator onBack={() => setActiveSection('home')} />;
      case 'features':
        return (
          <>
            <Features />
            <Examples />
          </>
        );
      case 'examples':
        return <Examples />;
      case 'pricing':
        return <Pricing />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero onGetStarted={() => setActiveSection('generator')} />
            <Features />
            <Examples />
            <Pricing />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50">
      <Header onNavigate={setActiveSection} activeSection={activeSection} />
      {renderActiveSection()}
      <Footer onNavigate={setActiveSection} />
    </div>
  );
}