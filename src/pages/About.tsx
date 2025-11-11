import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Zap, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to empowering startups with the connections they need to succeed.",
    },
    {
      icon: Heart,
      title: "Community First",
      description: "Building a supportive ecosystem where everyone can thrive together.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly evolving our platform to serve our users better.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Fostering meaningful partnerships between startups, investors, and mentors.",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Active Users" },
    { number: "500+", label: "Investors" },
    { number: "800+", label: "Mentors" },
    { number: "$2B+", label: "Funding Facilitated" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 animate-fade-in">
              About Startup Connect
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
              We're on a mission to accelerate the growth of startups worldwide by connecting them with the right investors, mentors, and community
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto animate-fade-in-up">
              <h2 className="text-3xl font-heading font-bold mb-6">Our Story</h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Startup Connect was founded in 2023 with a simple yet powerful vision: to democratize access to the resources every startup needs to succeed. We saw too many great ideas fail not because they lacked potential, but because they couldn't find the right connections at the right time.
                </p>
                <p>
                  Our platform brings together startups, investors, mentors, and users in a secure, data-driven environment. We leverage advanced matching algorithms and comprehensive analytics to help startups find their perfect partners and track their growth journey.
                </p>
                <p>
                  Today, we're proud to serve thousands of startups across the globe, facilitating billions in funding and countless mentorship hours. But we're just getting started.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="hover-lift shadow-soft animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full gradient-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team placeholder */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                A passionate team of entrepreneurs, engineers, and innovators dedicated to your success
              </p>
              <Card className="max-w-2xl mx-auto hover-lift shadow-soft">
                <CardContent className="p-12 text-center">
                  <div className="w-24 h-24 rounded-full gradient-primary mx-auto mb-6" />
                  <p className="text-muted-foreground">
                    We're a distributed team working from around the world, united by our mission to help startups succeed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
