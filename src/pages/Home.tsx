import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, TrendingUp, Users, Target, Shield, Zap, BarChart3 } from "lucide-react";

const Home = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Accelerate Growth",
      description: "Connect with investors and mentors who can help scale your startup faster.",
    },
    {
      icon: Users,
      title: "Build Network",
      description: "Access a community of entrepreneurs, investors, and industry experts.",
    },
    {
      icon: Target,
      title: "Find Your Match",
      description: "Advanced filtering to find the perfect investors and mentors for your niche.",
    },
    {
      icon: BarChart3,
      title: "Track Progress",
      description: "Visualize your startup's growth with comprehensive analytics and dashboards.",
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Bank-grade security with encrypted data and Aadhaar verification.",
    },
    {
      icon: Zap,
      title: "Quick Setup",
      description: "Get started in minutes with our streamlined onboarding process.",
    },
  ];

  const steps = [
    { step: "01", title: "Sign Up", description: "Create your account and verify with OTP" },
    { step: "02", title: "Build Profile", description: "Showcase your startup's vision and progress" },
    { step: "03", title: "Connect", description: "Find and connect with investors, mentors, users" },
    { step: "04", title: "Grow", description: "Track metrics and accelerate your growth journey" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Connect Startups with Investors, Mentors & Users to Accelerate Growth
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                A modern platform that brings together startups, investors, mentors, and users to create meaningful connections and drive exponential growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <Button size="lg" className="gradient-primary text-primary-foreground shadow-soft hover:shadow-glow transition-smooth group">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="hover-lift">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Choose Startup Connect?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to connect, grow, and succeed in one platform
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover-lift card-glass border-border/50 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get started in four simple steps
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((item, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="w-16 h-16 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-glow">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <Card className="gradient-primary text-primary-foreground p-8 md:p-12 shadow-glow hover-lift">
              <CardContent className="text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-heading font-bold">Ready to Accelerate Your Growth?</h2>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  Join thousands of startups already growing with Startup Connect
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/signup">
                    <Button size="lg" variant="secondary" className="shadow-soft hover:shadow-medium transition-smooth">
                      Create Free Account
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
