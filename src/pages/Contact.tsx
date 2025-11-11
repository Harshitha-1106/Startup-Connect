import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <Card className="hover-lift shadow-soft animate-fade-in-up">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg gradient-primary text-primary-foreground flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Our team is here to help
                  </p>
                  <a href="mailto:hello@startupconnect.com" className="text-primary hover:underline">
                    hello@startupconnect.com
                  </a>
                </CardContent>
              </Card>

              <Card className="hover-lift shadow-soft animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg gradient-accent text-primary-foreground flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">Live Chat</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Chat with our support team
                  </p>
                  <button className="text-primary hover:underline">
                    Start a conversation
                  </button>
                </CardContent>
              </Card>

              <Card className="hover-lift shadow-soft animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg gradient-primary text-primary-foreground flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Mon-Fri from 9am to 6pm
                  </p>
                  <a href="tel:+1234567890" className="text-primary hover:underline">
                    +1 (234) 567-890
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 shadow-medium hover-lift animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-bold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gradient-primary text-primary-foreground shadow-soft hover:shadow-glow"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
