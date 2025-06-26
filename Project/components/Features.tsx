'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Palette, 
  Download, 
  Smartphone, 
  Shield, 
  Globe,
  Wifi,
  Mail,
  Phone,
  User,
  Link,
  Settings,
  Crown,
  Sparkles
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "Rapid Creation",
      description: "Generate stunning QR codes instantly with real-time preview and immediate downloads.",
      highlight: "Ultra Fast"
    },
    {
      icon: Palette,
      title: "Visual Customization",
      description: "Personalize your codes with vibrant colors, unique patterns, and artistic elements.",
      highlight: "Creative Freedom"
    },
    {
      icon: Globe,
      title: "Versatile Types",
      description: "Support for websites, messages, contacts, WiFi networks, and business cards.",
      highlight: "Multi-Purpose"
    },
    {
      icon: Download,
      title: "Premium Export",
      description: "Download crisp, high-resolution images perfect for both digital and print media.",
      highlight: "Studio Quality"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "All codes generated locally in your browser. Zero data collection or server storage.",
      highlight: "Secure"
    },
    {
      icon: Smartphone,
      title: "Mobile Perfect",
      description: "Fully responsive interface that works flawlessly across all devices and screen sizes.",
      highlight: "Universal"
    }
  ];

  const qrTypes = [
    {
      icon: Link,
      title: "Web Links",
      description: "Direct visitors to your website or landing pages"
    },
    {
      icon: Mail,
      title: "Email Messages",
      description: "Pre-composed emails with custom subject and content"
    },
    {
      icon: Phone,
      title: "Phone Calls",
      description: "One-touch dialing for customer service or contacts"
    },
    {
      icon: Wifi,
      title: "WiFi Access",
      description: "Seamless network sharing without password exposure"
    },
    {
      icon: User,
      title: "Digital Cards",
      description: "Complete contact information for networking events"
    },
    {
      icon: Settings,
      title: "Custom Text",
      description: "Any text content for unlimited creative applications"
    }
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-gradient-to-r from-pink-100 to-orange-100 text-pink-800 px-4 py-2 rounded-full mb-4">
            <Crown className="w-4 h-4 mr-2" />
            Elite Features
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need for{' '}
            <span className="instagram-text-gradient">
              Exceptional QR Codes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Design remarkable, functional QR codes with advanced customization tools and enterprise-level performance.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:shadow-2xl hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="instagram-gradient p-3 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs font-medium bg-gradient-to-r from-pink-50 to-orange-50 text-pink-700">
                      {feature.highlight}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* QR Code Types Section */}
        <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-orange-100 text-pink-800 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Supported Code Types
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Design Codes for Every Need
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From simple links to complex contact information, create QR codes for every business and personal requirement.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {qrTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:bg-white/95 transition-all duration-300 border border-white/60 hover:shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="instagram-gradient p-2.5 rounded-xl flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{type.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{type.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="instagram-gradient rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Design Your First Code?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of creators and businesses who trust EQRGen for their visual QR code needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-white/90 text-sm">
                <Shield className="w-4 h-4 mr-2" />
                No signup needed
              </div>
              <div className="flex items-center text-white/90 text-sm">
                <Zap className="w-4 h-4 mr-2" />
                Create instantly
              </div>
              <div className="flex items-center text-white/90 text-sm">
                <Download className="w-4 h-4 mr-2" />
                Download immediately
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}