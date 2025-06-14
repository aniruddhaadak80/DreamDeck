
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Star, Users, Heart, Plus, Image } from 'lucide-react';

const Dashboard = () => {
  const [goals] = useState([
    { id: 1, title: 'Launch My Business', progress: 75, category: 'Career', color: 'bg-sunset' },
    { id: 2, title: 'Run a Marathon', progress: 45, category: 'Health', color: 'bg-teal' },
    { id: 3, title: 'Learn Spanish', progress: 60, category: 'Personal', color: 'bg-purple' },
    { id: 4, title: 'Buy a House', progress: 30, category: 'Financial', color: 'bg-golden' }
  ]);

  const stats = [
    { label: 'Active Goals', value: '12', icon: Star, color: 'text-sunset' },
    { label: 'Completed', value: '8', icon: Heart, color: 'text-teal' },
    { label: 'Partners', value: '3', icon: Users, color: 'text-purple' }
  ];

  return (
    <section id="dashboard" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-4">
            Your Personal Command Center
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track progress, celebrate wins, and stay motivated with your personalized dashboard.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg animate-scale-in">
              <CardContent className="pt-6">
                <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Active Goals */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-2xl font-semibold">Active Goals</span>
                <Button size="sm" className="btn-gradient">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Goal
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {goals.map((goal) => (
                <div key={goal.id} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-800">{goal.title}</h4>
                      <p className="text-sm text-gray-500">{goal.category}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-800">{goal.progress}%</div>
                    </div>
                  </div>
                  <Progress value={goal.progress} className="h-3" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Vision Board Preview */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-2xl font-semibold">Vision Board</span>
                <Button size="sm" variant="outline">
                  <Image className="w-4 h-4 mr-2" />
                  Edit Board
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gradient-hero rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Image className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-semibold mb-2">Your Vision Board</p>
                  <p className="text-sm opacity-80">Click to start creating your visual goals</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
