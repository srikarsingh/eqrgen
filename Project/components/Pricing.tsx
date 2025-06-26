'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Check, 
  Star, 
  Zap, 
  Crown, 
  Sparkles,
  Shield,
  Download,
  Palette,
  BarChart3,
  Users,
  Headphones,
  Infinity
} from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: 'forever',
      description: 'Perfect for personal projects and creative exploration',
      badge: null,
      color: 'from-gray-500 to-gray-600',
      features: [
        { text: 'Up to 15 QR codes per month', included: true },
        { text: 'Basic code types (URL, Text)', included: true },
        { text: 'Standard resolution (500x500px)', included: true },
        { text: 'Basic color customization', included: true },
        { text: 'PNG export', included: true },
        { text: 'Community support', included: true },
        { text: 'Advanced analytics', included: false },
        { text: 'Custom branding', included: false },
        { text: 'Bulk creation', included: false },
        { text: 'API access', included: false }
      ],
      cta: 'Start Creating',
      popular: false
    },
    {
      name: 'Creator',
      price: '$12',
      period: 'per month',
      description: 'Ideal for designers and marketing professionals',
      badge: { text: 'Most Popular', icon: Star },
      color: 'from-pink-500 to-purple-500',
      features: [
        { text: 'Unlimited QR codes', included: true },
        { text: 'All code types available', included: true },
        { text: 'High resolution up to 2500x2500px', included: true },
        { text: 'Advanced design & color options', included: true },
        { text: 'Multiple formats (PNG, SVG, PDF)', included: true },
        { text: 'Basic analytics & tracking', included: true },
        { text: 'Custom logo integration', included: true },
        { text: 'Bulk code generation', included: true },
        { text: 'Priority email support', included: true },
        { text: 'API access (1500 calls/month)', included: false }
      ],
      cta: 'Start Creator Trial',
      popular: true
    },
    {
      name: 'Studio',
      price: '$35',
      period: 'per month',
      description: 'Advanced tools for agencies and large organizations',
      badge: { text: 'Best Value', icon: Crown },
      color: 'from-orange-500 to-pink-500',
      features: [
        { text: 'Everything in Creator', included: true },
        { text: 'Advanced analytics & insights', included: true },
        { text: 'White-label solution', included: true },
        { text: 'Custom domain integration', included: true },
        { text: 'Team collaboration tools', included: true },
        { text: 'Unlimited API access', included: true },
        { text: 'Advanced security features', included: true },
        { text: 'Dedicated account manager', included: true },
        { text: '24/7 phone & chat support', included: true },
        { text: 'Custom integrations', included: true }
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Speed',
      description: 'Generate stunning QR codes instantly with our optimized engine'
    },
    {
      icon: Shield,
      title: 'Privacy Protected',
      description: 'Your data remains private with client-side generation'
    },
    {
      icon: Palette,
      title: 'Fully Customizable',
      description: 'Brand your codes with colors, logos, and artistic designs'
    },
    {
      icon: BarChart3,
      title: 'Analytics Built-in',
      description: 'Track scans and measure campaign effectiveness'
    },
    {
      icon: Download,
      title: 'Multiple Formats',
      description: 'Export in PNG, SVG, PDF, and more formats'
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      description: '24/7 assistance from our QR code specialists'
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-gradient-to-r from-green-100 to-pink-100 text-green-800 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Transparent Pricing
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose Your{' '}
            <span className="instagram-text-gradient">
              Creative Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free and scale as you grow. All plans include our core QR generation features 
            with transparent pricing and no hidden costs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => {
            const isPopular = plan.popular;
            
            return (
              <Card 
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  isPopular 
                    ? 'border-2 border-pink-500 shadow-xl scale-105' 
                    : 'border border-gray-200 shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className={`absolute top-0 left-0 right-0 bg-gradient-to-r ${plan.color} text-white text-center py-2 text-sm font-medium`}>
                    <plan.badge.icon className="w-4 h-4 inline mr-1" />
                    {plan.badge.text}
                  </div>
                )}

                <CardHeader className={`text-center ${plan.badge ? 'pt-12' : 'pt-6'}`}>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                    {plan.name === 'Starter' && <Zap className="w-8 h-8 text-white" />}
                    {plan.name === 'Creator' && <Star className="w-8 h-8 text-white" />}
                    {plan.name === 'Studio' && <Crown className="w-8 h-8 text-white" />}
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">/{plan.period}</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 mr-3 ${
                          feature.included 
                            ? `bg-gradient-to-br ${plan.color}` 
                            : 'bg-gray-200'
                        }`}>
                          <Check className={`w-3 h-3 ${feature.included ? 'text-white' : 'text-gray-400'}`} />
                        </div>
                        <span className={`text-sm ${feature.included ? 'text-gray-900' : 'text-gray-400'}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className={`w-full ${
                      isPopular 
                        ? `bg-gradient-to-r ${plan.color} hover:opacity-90 text-white border-0` 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Why Choose EQRGen?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're not just another QR generator. We're your creative partner in designing 
              professional, trackable, and stunning QR codes that deliver results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="instagram-gradient w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Common Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Can I change plans anytime?</h4>
              <p className="text-gray-600 text-sm">Yes, you can upgrade or downgrade at any time. Changes are effective immediately with prorated billing.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Do QR codes have expiration dates?</h4>
              <p className="text-gray-600 text-sm">No, QR codes created with EQRGen never expire. They remain functional as long as the linked content exists.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Is there a trial for paid plans?</h4>
              <p className="text-gray-600 text-sm">Yes, we offer a 14-day free trial for all paid plans. No credit card required to begin.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">What payment options are available?</h4>
              <p className="text-gray-600 text-sm">We accept all major credit cards, PayPal, and bank transfers for Studio customers.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}