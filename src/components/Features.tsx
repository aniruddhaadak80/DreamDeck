
import React from 'react';
import { Star, Users, Heart, Image, Search, Plus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Image,
      title: 'Visual Goal Boards',
      description: 'Create stunning vision boards with drag-and-drop simplicity. Upload images, add text, and design your perfect future.',
      color: 'bg-gradient-sunset',
      delay: '0s'
    },
    {
      icon: Search,
      title: 'Progress Tracking',
      description: 'Monitor your journey with beautiful, colorful charts and analytics. See how far you\'ve come and where you\'re heading.',
      color: 'bg-gradient-purple',
      delay: '0.1s'
    },
    {
      icon: Star,
      title: 'Milestone Celebrations',
      description: 'Celebrate every achievement with our gamified system. Unlock badges, share victories, and stay motivated.',
      color: 'bg-gradient-teal',
      delay: '0.2s'
    },
    {
      icon: Users,
      title: 'Accountability Partners',
      description: 'Connect with like-minded individuals. Share goals, give support, and achieve more together.',
      color: 'bg-gradient-sunset',
      delay: '0.3s'
    },
    {
      icon: Plus,
      title: 'Vision Board Templates',
      description: 'Start with professionally designed templates or create from scratch. Career, health, relationships - we\'ve got you covered.',
      color: 'bg-gradient-purple',
      delay: '0.4s'
    },
    {
      icon: Heart,
      title: 'Success Stories',
      description: 'Get inspired by real success stories from our community. Share your journey and motivate others.',
      color: 'bg-gradient-teal',
      delay: '0.5s'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DreamDeck provides all the tools and support you need to turn your dreams into achievable goals 
            and your goals into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-hover border-0 shadow-lg bg-white animate-fade-in"
              style={{ animationDelay: feature.delay }}
            >
              <CardHeader>
                <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
