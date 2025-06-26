'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Target, 
  Award, 
  Globe,
  Lightbulb,
  Shield,
  Zap,
  Heart,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react';

export function About() {
  const stats = [
    { number: '3M+', label: 'QR Codes Created', icon: Zap },
    { number: '150K+', label: 'Creative Users', icon: Users },
    { number: '75+', label: 'Countries Reached', icon: Globe },
    { number: '99.9%', label: 'Uptime Promise', icon: Shield }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Creative Innovation',
      description: 'We continuously explore new possibilities in QR technology, delivering cutting-edge features and artistic capabilities.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Privacy & Trust',
      description: 'Your creative data privacy is paramount. All QR codes are generated locally with enterprise-grade security.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Heart,
      title: 'User Success',
      description: 'We measure our success by your creative achievements. Our support team ensures you reach your artistic goals.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Target,
      title: 'Design Excellence',
      description: 'Every QR code meets the highest standards for visual appeal, functionality, and professional quality across all platforms.',
      color: 'from-blue-500 to-purple-500'
    }
  ];

  const team = [
    {
      name: 'Vivek',
      role: 'CEO & Co-Founder',
      bio: 'Former Adobe designer with 12+ years in digital creativity and visual innovation.',
      image: ''
    },
    {
      name: 'Amar',
      role: 'Software Engineer',
      bio: 'Award-winning creative director focused on building intuitive and inspiring user experiences.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Akash',
      role: 'Software Engineer',
      bio: 'Award-winning creative director focused on building intuitive and inspiring user experiences.',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const milestones = [
    {
      year: '2021',
      title: 'Company Launch',
      description: 'Founded with a mission to make QR codes visually stunning and accessible to all creators.'
    },
    {
      year: '2022',
      title: 'First Million Codes',
      description: 'Achieved our first major milestone with users across 30 countries.'
    },
    {
      year: '2023',
      title: 'Studio Launch',
      description: 'Introduced professional features serving creative agencies and Fortune 500 companies.'
    },
    {
      year: '2024',
      title: 'AI Design Tools',
      description: 'Launched AI-powered design assistance and creative optimization features.'
    },
    {
      year: '2025',
      title: 'Global Creative Hub',
      description: 'Now serving creators in over 75 countries with 24/7 multilingual support.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="bg-gradient-to-r from-pink-100 to-orange-100 text-pink-800 px-4 py-2 rounded-full mb-4">
            <Users className="w-4 h-4 mr-2" />
            About EQRGen
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Revolutionizing Digital{' '}
            <span className="instagram-text-gradient">
              Creativity
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to bridge the physical and digital worlds through stunning, 
            functional QR codes that inspire creativity and drive meaningful connections.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="instagram-gradient w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Target className="w-6 h-6 text-pink-600" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed mb-4">
                To democratize visual communication by providing the world's most intuitive, 
                powerful, and beautiful QR code creation platform. We believe that every 
                creator and business should have access to professional-grade tools that 
                make digital interactions visually compelling and engaging.
              </p>
              <div className="flex items-center text-pink-600 font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                Empowering creative transformation
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <TrendingUp className="w-6 h-6 text-purple-600" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed mb-4">
                To become the global standard for visual QR technology, enabling billions of 
                creative connections between the physical and digital realms. We envision 
                a future where QR codes are not just functional, but artistic, intelligent, 
                and integral to how we express ourselves digitally.
              </p>
              <div className="flex items-center text-purple-600 font-medium">
                <Star className="w-4 h-4 mr-2" />
                Leading the future of visual connectivity
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from creative development to customer support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Creative innovators dedicated to building the best visual QR experience possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-pink-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Creative Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From a creative idea to serving millions of users worldwide.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 instagram-gradient rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-pink-600">{milestone.year}</span>
                    <Badge variant="secondary" className="text-xs">{milestone.title}</Badge>
                  </div>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="instagram-gradient rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Join Our Creative Mission
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Be part of the visual revolution. Start creating professional QR codes 
              that connect your physical and digital creative presence.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-pink-600 hover:bg-gray-100 font-semibold px-8"
            >
              Start Creating Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}