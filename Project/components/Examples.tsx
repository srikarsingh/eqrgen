'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Globe, 
  Mail, 
  Phone, 
  Wifi, 
  User, 
  MapPin,
  Calendar,
  ShoppingBag,
  Star,
  Download,
  Eye,
  Copy
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export function Examples() {
  const [selectedExample, setSelectedExample] = useState<string | null>(null);

  const examples = [
    {
      id: 'cafe-menu',
      title: 'Café Digital Menu',
      description: 'Interactive menu with ordering and location details',
      category: 'Hospitality',
      icon: ShoppingBag,
      color: 'from-pink-500 to-red-500',
      qrData: 'https://cafe-menu.example.com',
      features: ['Touchless ordering', 'Live updates', 'Multiple languages'],
      useCase: 'Ideal for restaurants and cafés wanting to offer digital menus while ensuring hygiene and convenience.'
    },
    {
      id: 'professional-card',
      title: 'Professional Profile',
      description: 'Complete contact details in digital vCard format',
      category: 'Networking',
      icon: User,
      color: 'from-purple-500 to-pink-500',
      qrData: 'BEGIN:VCARD\nVERSION:3.0\nFN:Sarah Johnson\nORG:Creative Solutions Ltd\nTEL:+1234567890\nEMAIL:sarah@creative.com\nURL:https://creative.com\nEND:VCARD',
      features: ['Instant contact save', 'Professional look', 'Always current'],
      useCase: 'Perfect for networking events, business meetings, and professional conferences.'
    },
    {
      id: 'network-access',
      title: 'Network Connection',
      description: 'Secure WiFi access without password sharing',
      category: 'Connectivity',
      icon: Wifi,
      color: 'from-teal-500 to-green-500',
      qrData: 'WIFI:T:WPA;S:CreativeSpace_Guest;P:welcome2024;H:false;;',
      features: ['Password-free access', 'Secure connection', 'Visitor-friendly'],
      useCase: 'Excellent for co-working spaces, offices, and homes to share network access safely and easily.'
    },
    {
      id: 'event-details',
      title: 'Event Information',
      description: 'Event specifics with calendar integration',
      category: 'Events',
      icon: Calendar,
      color: 'from-orange-500 to-yellow-500',
      qrData: 'https://events.example.com/design-summit-2024',
      features: ['Calendar sync', 'Venue details', 'RSVP management'],
      useCase: 'Great for conferences, workshops, and corporate events to share information instantly.'
    },
    {
      id: 'location-guide',
      title: 'Location Guide',
      description: 'GPS coordinates with map integration',
      category: 'Navigation',
      icon: MapPin,
      color: 'from-red-500 to-pink-500',
      qrData: 'geo:37.7749,-122.4194?q=Creative District, San Francisco',
      features: ['GPS navigation', 'Map integration', 'Live directions'],
      useCase: 'Perfect for delivery locations, meeting spots, and tourist destinations.'
    },
    {
      id: 'contact-form',
      title: 'Contact Template',
      description: 'Pre-filled email with subject and message',
      category: 'Communication',
      icon: Mail,
      color: 'from-blue-500 to-purple-500',
      qrData: 'mailto:hello@example.com?subject=Service Inquiry&body=Hi, I would like to learn more about your services.',
      features: ['Pre-filled content', 'Professional templates', 'Quick outreach'],
      useCase: 'Excellent for customer support, feedback collection, and business inquiries.'
    }
  ];

  const handlePreview = (example: any) => {
    setSelectedExample(example.id);
    toast.success(`Previewing ${example.title} QR code`);
  };

  const handleDownload = (example: any) => {
    toast.success(`${example.title} QR code downloaded!`);
  };

  const handleCopy = (example: any) => {
    navigator.clipboard.writeText(example.qrData);
    toast.success('QR code data copied to clipboard!');
  };

  return (
    <section id="examples" className="py-20 lg:py-32 bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-gradient-to-r from-orange-100 to-pink-100 text-orange-800 px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 mr-2" />
            Creative Showcase
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            See QR Codes in{' '}
            <span className="instagram-text-gradient">
              Real Life
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how creators and businesses use QR codes to enhance user experience, 
            streamline processes, and create engaging digital connections.
          </p>
        </div>

        {/* Examples Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example) => {
            const IconComponent = example.icon;
            const isSelected = selectedExample === example.id;
            
            return (
              <Card 
                key={example.id} 
                className={`group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 ${
                  isSelected ? 'ring-2 ring-pink-500 shadow-2xl' : ''
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`bg-gradient-to-br ${example.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs font-medium bg-white/90 text-gray-700">
                      {example.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                    {example.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {example.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0 space-y-4">
                  {/* Features List */}
                  <div className="space-y-2">
                    {example.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Use Case */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      <span className="font-medium text-gray-800">Application:</span> {example.useCase}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handlePreview(example)}
                      className="flex-1 text-xs border-pink-200 text-pink-600 hover:bg-pink-50"
                    >
                      <Eye className="w-3 h-3 mr-1" />
                      Preview
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleCopy(example)}
                      className="flex-1 text-xs border-purple-200 text-purple-600 hover:bg-purple-50"
                    >
                      <Copy className="w-3 h-3 mr-1" />
                      Copy
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleDownload(example)}
                      className={`flex-1 text-xs bg-gradient-to-r ${example.color} hover:opacity-90 text-white border-0`}
                    >
                      <Download className="w-3 h-3 mr-1" />
                      Get
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/60">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Design Your Own?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Start creating professional QR codes for your projects or business. 
              No design experience needed – just enter your content and generate instantly.
            </p>
            <Button 
              size="lg" 
              className="instagram-gradient hover:opacity-90 text-white px-8 py-3 text-lg font-semibold border-0"
            >
              Start Designing Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}