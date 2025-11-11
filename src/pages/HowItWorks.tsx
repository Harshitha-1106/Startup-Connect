import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UserPlus, Search, Users, TrendingUp, Shield, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Your Account",
      description: "Sign up with email or Google. Complete your profile with your startup details, vision, and goals. Get 100 free credits to start connecting.",
      features: ["Quick verification with OTP", "Secure Aadhaar encryption", "Instant credit allocation"],
    },
    {
      icon: Search,
      title: "Find Your Match",
      description: "Use our advanced filters to discover investors, mentors, and users who align with your startup's industry, stage, and location.",
      features: ["Smart matching algorithm", "Industry-specific filters", "Location-based search"],
    },
    {
      icon: Users,
      title: "Connect & Network",
      description: "Send connection requests, schedule meetings, and build meaningful relationships with key stakeholders in your startup journey.",
      features: ["Direct messaging", "Meeting scheduler", "Connection tracking"],
    },
    {
      icon: TrendingUp,
      title: "Track Your Growth",
      description: "Monitor your startup's progress with comprehensive dashboards, analytics, and milestone tracking to showcase your success.",
      features: ["Real-time analytics", "Growth visualization", "Milestone achievements"],
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Your data is protected with AES-256 encryption and secure authentication.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Connect with investors and mentors in minutes, not months.",
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description: "Make informed decisions with comprehensive analytics and reporting.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 animate-fade-in">
              How Startup Connect Works
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
              A simple, powerful platform to accelerate your startup's growth journey
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-12 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-1">
                    <div className="w-16 h-16 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-6 shadow-glow">
                      {index + 1}
                    </div>
                    <h2 className="text-3xl font-heading font-bold mb-4">{step.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                    <ul className="space-y-3">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1">
                    <Card className="hover-lift shadow-medium">
                      <CardContent className="p-8">
                        <div className="w-full h-64 gradient-accent rounded-lg flex items-center justify-center">
                          <step.icon className="h-32 w-32 text-primary-foreground opacity-50" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Startups Choose Us</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="hover-lift shadow-soft animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full gradient-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <Card className="gradient-primary text-primary-foreground p-12 shadow-glow hover-lift">
              <CardContent className="text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-heading font-bold">Ready to Get Started?</h2>
                <p className="text-lg opacity-90 max-w-2xl mx-auto">
                  Join Startup Connect today and start building meaningful connections
                </p>
                <Link to="/signup">
                  <Button size="lg" variant="secondary" className="shadow-soft hover:shadow-medium transition-smooth">
                    Create Your Free Account
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;
