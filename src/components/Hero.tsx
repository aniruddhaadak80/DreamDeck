
import React from 'react';
import { ArrowDown, Star, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const stats = [
    { icon: Star, label: 'Dreams Achieved', value: '50K+' },
    { icon: Users, label: 'Active Users', value: '25K+' },
    { icon: Heart, label: 'Success Stories', value: '10K+' }
  ];

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in leading-tight">
            Transform Your
            <span className="block text-golden-light">Dreams Into Reality</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in max-w-3xl mx-auto leading-relaxed">
            Create stunning vision boards, track your progress with beautiful charts, celebrate milestones, 
            and connect with accountability partners. Your journey to success starts here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
            <Button size="lg" className="bg-white text-purple hover:bg-white/90 text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
              Create Your Vision Board
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in text-center" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-8 h-8 text-golden-light" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 mx-auto text-white/70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
