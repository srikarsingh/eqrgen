'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { QrCode, Mail, Github, Twitter, Linkedin, Heart, Zap } from 'lucide-react';

type ActiveSection = 'home' | 'generator' | 'features' | 'examples' | 'pricing' | 'about' | 'contact';

interface FooterProps {
  onNavigate: (section: ActiveSection) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'QR Creator', section: 'generator' as ActiveSection },
      { name: 'Capabilities', section: 'features' as ActiveSection },
      { name: 'Showcase', section: 'examples' as ActiveSection },
      { name: 'Plans', section: 'pricing' as ActiveSection }
    ],
    company: [
      { name: 'Our Story', section: 'about' as ActiveSection },
      { name: 'Connect', section: 'contact' as ActiveSection },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' }
    ],
    resources: [
      { name: 'Help Center', href: '#help' },
      { name: 'QR Design Guide', href: '#guide' },
      { name: 'Best Practices', href: '#practices' },
      { name: 'Templates', href: '#templates' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR Compliance', href: '#gdpr' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="instagram-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Creative</h3>
              <p className="text-pink-100 text-lg">
                Get the latest QR design tips, creative trends, and product updates delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
              />
              <Button 
                className="bg-white text-pink-600 hover:bg-gray-100 font-semibold px-8"
                size="lg"
              >
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <div className="instagram-gradient p-2 rounded-xl">
                <QrCode className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold instagram-text-gradient">
                EQRGen
              </span>
            </button>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The most creative QR code generator for designers and businesses. 
              Create stunning, customizable QR codes in seconds with advanced features and artistic flair.
            </p>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => onNavigate(link.section)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {link.section ? (
                    <button 
                      onClick={() => onNavigate(link.section)}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-1">3M+</div>
              <div className="text-gray-400 text-sm">QR Codes Created</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">150K+</div>
              <div className="text-gray-400 text-sm">Creative Users</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime Promise</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by the EQRGen team
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center">
              <Zap className="w-4 h-4 mr-1 text-yellow-500" />
              Powered by Next.js
            </div>
            <div>© {currentYear} EQRGen. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}