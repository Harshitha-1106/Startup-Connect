import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Heart, Share2 } from "lucide-react";

const Users = () => {
  const activities = [
    {
      user: "Alex Kumar",
      action: "just joined the platform",
      time: "2 mins ago",
      credits: 100,
    },
    {
      user: "Maria Santos",
      action: "connected with TechVentures Capital",
      time: "15 mins ago",
      credits: 95,
    },
    {
      user: "John Doe",
      action: "completed mentorship session with Jennifer Lee",
      time: "1 hour ago",
      credits: 88,
    },
    {
      user: "Sarah Johnson",
      action: "reached 1000 users milestone",
      time: "2 hours ago",
      credits: 120,
    },
    {
      user: "David Chen",
      action: "launched new product feature",
      time: "3 hours ago",
      credits: 105,
    },
    {
      user: "Emma Wilson",
      action: "secured Series A funding",
      time: "5 hours ago",
      credits: 150,
    },
  ];

  const topUsers = [
    {
      name: "Sarah Johnson",
      role: "Founder at HealthAI",
      credits: 250,
      connections: 45,
      badge: "Top Contributor",
    },
    {
      name: "David Chen",
      role: "CEO at FinFlow",
      credits: 220,
      connections: 38,
      badge: "Rising Star",
    },
    {
      name: "Emma Wilson",
      role: "Founder at EduTech Pro",
      credits: 200,
      connections: 42,
      badge: "Community Leader",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">User Community</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with fellow entrepreneurs and track community activity
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Activity Feed */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-heading font-semibold mb-4 animate-fade-in">Recent Activity</h2>
              {activities.map((activity, index) => (
                <Card key={index} className="hover-lift shadow-soft animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                          {activity.user.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <div className="mb-1">
                            <span className="font-semibold">{activity.user}</span>
                            <span className="text-muted-foreground"> {activity.action}</span>
                          </div>
                          <div className="text-sm text-muted-foreground">{activity.time}</div>
                        </div>
                      </div>
                      <div className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
                        {activity.credits} credits
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-border">
                      <Button variant="ghost" size="sm" className="hover:text-primary">
                        <Heart className="h-4 w-4 mr-1" />
                        Like
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:text-primary">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Comment
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:text-primary">
                        <Share2 className="h-4 w-4 mr-1" />
                        Share
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Top Users Sidebar */}
            <div className="space-y-6">
              <Card className="shadow-soft animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-4">Top Contributors</h3>
                  <div className="space-y-4">
                    {topUsers.map((user, index) => (
                      <div key={index} className="flex items-start space-x-3 pb-4 border-b border-border last:border-0">
                        <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">{user.name}</div>
                          <div className="text-xs text-muted-foreground mb-2">{user.role}</div>
                          <Badge variant="secondary" className="text-xs">{user.badge}</Badge>
                          <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                            <span>{user.credits} credits</span>
                            <span>{user.connections} connections</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft gradient-primary text-primary-foreground animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-3">Join the Community</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Connect with other entrepreneurs, share your journey, and grow together.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Users;
