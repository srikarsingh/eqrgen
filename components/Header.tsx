'use client';

import { Button } from '@/components/ui/button';
import { QrCode, Menu, X } from 'lucide-react';
import { useState } from 'react';

type ActiveSection = 'home' | 'generator' | 'features' | 'examples' | 'pricing' | 'about' | 'contact';

interface HeaderProps {
  onNavigate: (section: ActiveSection) => void;
  activeSection: ActiveSection;
}

export function Header({ onNavigate, activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'features' as ActiveSection, label: 'Capabilities' },
    { id: 'examples' as ActiveSection, label: 'Showcase' },
    { id: 'pricing' as ActiveSection, label: 'Plans' },
    { id: 'about' as ActiveSection, label: 'Story' },
    { id: 'contact' as ActiveSection, label: 'Connect' }
  ];

  const handleNavigation = (section: ActiveSection) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-pink-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button 
            onClick={() => handleNavigation('home')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="instagram-gradient p-2 rounded-xl">
              <QrCode className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold instagram-text-gradient">
              EQRGen
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`transition-colors font-medium ${
                  activeSection === item.id
                    ? 'text-pink-600'
                    : 'text-gray-600 hover:text-pink-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button variant="outline" size="sm" className="border-pink-300 text-pink-600 hover:bg-pink-50">
              Login
            </Button>
            <Button 
              size="sm" 
              className="instagram-gradient hover:opacity-90 text-white border-0"
              onClick={() => handleNavigation('generator')}
            >
              Create Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-pink-50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-pink-200">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`text-left transition-colors font-medium ${
                    activeSection === item.id
                      ? 'text-pink-600'
                      : 'text-gray-600 hover:text-pink-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm" className="border-pink-300 text-pink-600 hover:bg-pink-50">
                  Login
                </Button>
                <Button 
                  size="sm" 
                  className="instagram-gradient hover:opacity-90 text-white border-0"
                  onClick={() => handleNavigation('generator')}
                >
                  Create Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}