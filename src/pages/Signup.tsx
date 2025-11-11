import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    aadhaar: "",
    role: "",
    password: "",
  });
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGoogleSignup = () => {
    toast({
      title: "Google Signup",
      description: "Google authentication is coming soon",
    });
  };

  const handleSendOTP = () => {
    if (!formData.email || !formData.mobile) {
      toast({
        title: "Missing Information",
        description: "Please enter your email and mobile number",
        variant: "destructive",
      });
      return;
    }
    setShowOTP(true);
    toast({
      title: "OTP Sent",
      description: "Please check your email for the verification code",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Signup Complete",
      description: "Your account has been created successfully!",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-hero">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md shadow-medium hover-lift animate-scale-in">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-heading">Create Account</CardTitle>
            <CardDescription>Join Startup Connect to accelerate your growth</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={handleGoogleSignup}
              variant="outline" 
              className="w-full hover-lift"
            >
              <Mail className="mr-2 h-5 w-5" />
              Continue with Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or sign up with</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
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
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="aadhaar">Aadhaar Number</Label>
                <Input
                  id="aadhaar"
                  name="aadhaar"
                  value={formData.aadhaar}
                  onChange={handleInputChange}
                  placeholder="12-digit Aadhaar (will be encrypted)"
                  maxLength={12}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Your Aadhaar will be encrypted and masked (XXXX-XXXX-1234)
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, role: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="investor">Investor</SelectItem>
                    <SelectItem value="mentor">Mentor</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Create a strong password"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Credits (Auto-assigned)</Label>
                <Input value="100" disabled className="bg-muted" />
              </div>

              {!showOTP ? (
                <Button
                  type="button"
                  onClick={handleSendOTP}
                  className="w-full gradient-primary text-primary-foreground shadow-soft hover:shadow-glow"
                >
                  Send OTP
                </Button>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="otp">Enter OTP</Label>
                    <Input
                      id="otp"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="6-digit OTP"
                      maxLength={6}
                    />
                    <p className="text-xs text-muted-foreground">
                      OTP expires in 5 minutes. Resend available after 30 seconds.
                    </p>
                  </div>
                  <Button
                    type="submit"
                    className="w-full gradient-primary text-primary-foreground shadow-soft hover:shadow-glow"
                  >
                    Verify & Sign Up
                  </Button>
                </div>
              )}
            </form>

            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline font-medium">
                Login
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Signup;
