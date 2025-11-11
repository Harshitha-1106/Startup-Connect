import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Award, Briefcase, Users } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Mentors = () => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [formData, setFormData] = useState({
    description: "",
    projectIdea: "",
    credits: "",
  });

  const mentors = [
    {
      name: "Jennifer Lee",
      title: "Former VP Product at Stripe",
      expertise: ["Product Strategy", "Growth Hacking", "Team Building"],
      experience: "15+ years",
      mentees: 45,
    },
    {
      name: "Robert Zhang",
      title: "Serial Entrepreneur",
      expertise: ["Fundraising", "Go-to-Market", "Sales"],
      experience: "20+ years",
      mentees: 38,
    },
    {
      name: "Anjali Patel",
      title: "CTO at TechCorp",
      expertise: ["Engineering", "Architecture", "DevOps"],
      experience: "12+ years",
      mentees: 52,
    },
    {
      name: "Marcus Williams",
      title: "Marketing Director",
      expertise: ["Brand Strategy", "Digital Marketing", "Content"],
      experience: "18+ years",
      mentees: 41,
    },
    {
      name: "Sofia Garcia",
      title: "Legal & Compliance Expert",
      expertise: ["Startup Law", "IP", "Compliance"],
      experience: "10+ years",
      mentees: 29,
    },
    {
      name: "James Thompson",
      title: "Finance & Operations",
      expertise: ["Financial Planning", "Operations", "Scaling"],
      experience: "16+ years",
      mentees: 35,
    },
  ];

  const handleRequestMentorship = (mentor) => {
    setSelectedMentor(mentor);
    setOpen(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Mentorship Request:", { selectedMentor, ...formData });
    setOpen(false);
    setFormData({ description: "", projectIdea: "", credits: "" });
    toast({
      title: "✅ Request sent successfully!",
      description: `Your mentorship request has been sent to ${selectedMentor.name}`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">Find Mentors</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get guidance from experienced entrepreneurs and industry experts
            </p>
          </div>

          {/* Filters */}
          <Card className="mb-8 shadow-soft animate-fade-in-up">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input placeholder="Search mentors..." className="pl-10" />
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Expertise Area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="product">Product Strategy</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="fundraising">Fundraising</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Experience Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10+ years</SelectItem>
                    <SelectItem value="15">15+ years</SelectItem>
                    <SelectItem value="20">20+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Mentors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor, index) => (
              <Card key={index} className="hover-lift shadow-soft animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center text-primary-foreground font-bold text-xl">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                      <Users className="inline h-3 w-3 mr-1" />
                      {mentor.mentees}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold mb-1">{mentor.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{mentor.title}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <Award className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-muted-foreground">{mentor.experience} experience</span>
                    </div>
                    <div className="flex items-start text-sm">
                      <Briefcase className="h-4 w-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                      <div className="flex flex-wrap gap-1">
                        {mentor.expertise.map((skill, idx) => (
                          <span key={idx} className="text-xs bg-muted px-2 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleRequestMentorship(mentor)}
                    className="w-full gradient-primary text-primary-foreground shadow-soft hover:shadow-glow"
                  >
                    Request Mentorship
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* Request Mentorship Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Request Mentorship from {selectedMentor?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <Textarea
              name="description"
              placeholder="Description of what guidance is needed"
              value={formData.description}
              onChange={handleChange}
              rows={3}
            />
            <Textarea
              name="projectIdea"
              placeholder="Project Idea / Goal"
              value={formData.projectIdea}
              onChange={handleChange}
              rows={4}
            />
            <Input
              name="credits"
              type="number"
              placeholder="Credits to Use"
              value={formData.credits}
              onChange={handleChange}
              min="0"
            />
          </div>
          <DialogFooter>
            <Button onClick={handleSubmit} className="gradient-primary text-primary-foreground">
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Mentors;
