'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 opacity-60" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-orange-100 text-pink-800 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Next-Gen QR Code Studio
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Craft Stunning{' '}
            <span className="instagram-text-gradient">
              Visual QR Codes
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform ordinary QR codes into eye-catching visual masterpieces with vibrant colors, 
            custom branding, and artistic designs that captivate your audience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="instagram-gradient hover:opacity-90 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 border-0"
              onClick={onGetStarted}
            >
              Begin Creating
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 text-lg font-semibold border-2 border-pink-300 text-pink-600 hover:bg-pink-50"
            >
              Explore Gallery
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-pink-200">
              <Zap className="w-4 h-4 mr-2 text-pink-600" />
              Lightning Fast
            </div>
            <div className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200">
              <Shield className="w-4 h-4 mr-2 text-purple-600" />
              Premium Quality
            </div>
            <div className="flex items-center bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-200">
              <Sparkles className="w-4 h-4 mr-2 text-orange-600" />
              Artistic Design
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}