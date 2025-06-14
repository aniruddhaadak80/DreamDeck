
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Heart, Star } from 'lucide-react';

const Community = () => {
  const partners = [
    {
      name: 'Sarah Chen',
      goal: 'Fitness Journey',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616c86d0f0b?w=100&h=100&fit=crop&crop=face&auto=format',
      match: '95%'
    },
    {
      name: 'Marcus Johnson',
      goal: 'Career Growth',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format',
      match: '88%'
    },
    {
      name: 'Emma Rodriguez',
      goal: 'Learning Spanish',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format',
      match: '92%'
    }
  ];

  const successStories = [
    {
      name: 'Alex Thompson',
      achievement: 'Launched successful startup',
      story: 'Thanks to DreamDeck\'s vision board and accountability partners, I turned my business idea into reality in just 8 months!',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format'
    },
    {
      name: 'Maria Silva',
      achievement: 'Completed marathon',
      story: 'Never thought I\'d run 26.2 miles, but with daily progress tracking and community support, I crossed that finish line!',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face&auto=format'
    }
  ];

  return (
    <section id="community" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Join Our Thriving Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with accountability partners and get inspired by success stories from dreamers who made it happen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Accountability Partners */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Users className="w-6 h-6 mr-3 text-purple" />
              Find Your Accountability Partner
            </h3>
            
            <div className="space-y-4 mb-6">
              {partners.map((partner, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={partner.avatar} 
                        alt={partner.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold">{partner.name}</h4>
                        <p className="text-sm text-gray-600">{partner.goal}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-teal font-semibold mb-1">{partner.match} match</div>
                      <Button size="sm" className="bg-teal hover:bg-teal-dark text-white">
                        Connect
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button className="w-full btn-gradient">
              <Users className="w-4 h-4 mr-2" />
              Browse All Partners
            </Button>
          </div>

          {/* Success Stories */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Star className="w-6 h-6 mr-3 text-golden" />
              Success Stories
            </h3>

            <div className="space-y-6 mb-6">
              {successStories.map((story, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <img 
                        src={story.avatar} 
                        alt={story.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <CardTitle className="text-lg">{story.name}</CardTitle>
                        <CardDescription className="text-sunset font-medium">
                          {story.achievement}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 italic">"{story.story}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button className="w-full" variant="outline">
              <Heart className="w-4 h-4 mr-2" />
              Read More Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
