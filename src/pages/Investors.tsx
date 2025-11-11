import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Briefcase, TrendingUp } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Investors = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [selectedInvestor, setSelectedInvestor] = useState(null);
  const [formData, setFormData] = useState({
    description: "",
    projectIdea: "",
    credits: "",
  });

  const investors = [
    {
      name: "Sarah Chen",
      firm: "TechVentures Capital",
      focus: "AI & ML, SaaS",
      stage: "Seed to Series A",
      location: "San Francisco, CA",
      investments: 24,
    },
    {
      name: "Michael Rodriguez",
      firm: "Growth Equity Partners",
      focus: "FinTech, E-commerce",
      stage: "Series B+",
      location: "New York, NY",
      investments: 18,
    },
    {
      name: "Priya Sharma",
      firm: "Innovation Fund",
      focus: "HealthTech, EdTech",
      stage: "Seed to Series A",
      location: "Bangalore, India",
      investments: 32,
    },
    {
      name: "David Kim",
      firm: "Future Ventures",
      focus: "Enterprise SaaS, Cloud",
      stage: "Series A to B",
      location: "Austin, TX",
      investments: 21,
    },
    {
      name: "Emma Johnson",
      firm: "Impact Investors",
      focus: "Climate Tech, Sustainability",
      stage: "Seed",
      location: "London, UK",
      investments: 15,
    },
    {
      name: "Alex Martinez",
      firm: "Early Stage Capital",
      focus: "Consumer Tech, Mobile",
      stage: "Pre-seed to Seed",
      location: "Los Angeles, CA",
      investments: 28,
    },
  ];

  const handleConnect = (investor) => {
    setSelectedInvestor(investor);
    setOpen(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Connection Request:", { selectedInvestor, ...formData });
    setOpen(false);
    setFormData({ description: "", projectIdea: "", credits: "" });
    toast({
      title: "✅ Request sent successfully!",
      description: `Your connection request has been sent to ${selectedInvestor.name}`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">Find Investors</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with investors who align with your startup's vision and stage
            </p>
          </div>

          {/* Filters */}
          <Card className="mb-8 shadow-soft animate-fade-in-up">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input placeholder="Search investors..." className="pl-10" />
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Industry Focus" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ai">AI & ML</SelectItem>
                    <SelectItem value="fintech">FinTech</SelectItem>
                    <SelectItem value="healthtech">HealthTech</SelectItem>
                    <SelectItem value="saas">SaaS</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Funding Stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="preseed">Pre-seed</SelectItem>
                    <SelectItem value="seed">Seed</SelectItem>
                    <SelectItem value="seriesa">Series A</SelectItem>
                    <SelectItem value="seriesb">Series B+</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="eu">Europe</SelectItem>
                    <SelectItem value="asia">Asia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Investors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {investors.map((investor, index) => (
              <Card key={index} className="hover-lift shadow-soft animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {investor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="text-sm bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                      {investor.investments} investments
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold mb-1">{investor.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{investor.firm}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <Briefcase className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-muted-foreground">{investor.focus}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-muted-foreground">{investor.stage}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-muted-foreground">{investor.location}</span>
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => handleConnect(investor)}
                    className="w-full gradient-primary text-primary-foreground shadow-soft hover:shadow-glow"
                  >
                    Connect
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* Connect Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Connect with {selectedInvestor?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <Textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
            />
            <Textarea
              name="projectIdea"
              placeholder="Project Idea"
              value={formData.projectIdea}
              onChange={handleChange}
              rows={4}
            />
            <Input
              name="credits"
              type="number"
              placeholder="Number of Credits to Use"
              value={formData.credits}
              onChange={handleChange}
              min="0"
            />
          </div>
          <DialogFooter>
            <Button onClick={handleSubmit} className="gradient-primary text-primary-foreground">
              Submit Response
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Investors;
