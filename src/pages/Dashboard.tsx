import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TrendingUp, Users, DollarSign, Target } from "lucide-react";

const Dashboard = () => {
  const growthData = [
    { month: "Jan", users: 400, revenue: 2400 },
    { month: "Feb", users: 600, revenue: 3200 },
    { month: "Mar", users: 800, revenue: 4100 },
    { month: "Apr", users: 1200, revenue: 5300 },
    { month: "May", users: 1600, revenue: 7200 },
    { month: "Jun", users: 2000, revenue: 9500 },
  ];

  const revenueData = [
    { category: "Product Sales", value: 45000 },
    { category: "Services", value: 25000 },
    { category: "Subscriptions", value: 18000 },
    { category: "Other", value: 12000 },
  ];

  const fundingData = [
    { name: "Seed", value: 30 },
    { name: "Series A", value: 25 },
    { name: "Series B", value: 20 },
    { name: "Growth", value: 15 },
    { name: "Reserved", value: 10 },
  ];

  const COLORS = ["#4F46E5", "#14B8A6", "#F59E0B", "#EF4444", "#6366F1"];

  const stats = [
    { title: "Total Users", value: "2,450", icon: Users, change: "+12.5%" },
    { title: "Revenue", value: "$95,000", icon: DollarSign, change: "+24.3%" },
    { title: "Growth Rate", value: "145%", icon: TrendingUp, change: "+8.1%" },
    { title: "Target Achievement", value: "87%", icon: Target, change: "+5.2%" },
  ];

  const milestones = [
    { title: "Product Launch", date: "Jan 2024", status: "completed" },
    { title: "First 1000 Users", date: "Mar 2024", status: "completed" },
    { title: "Series A Funding", date: "May 2024", status: "completed" },
    { title: "International Expansion", date: "Aug 2024", status: "in-progress" },
    { title: "10K Users Milestone", date: "Dec 2024", status: "upcoming" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-hero">
      <Navbar />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">Dashboard</h1>
            <p className="text-muted-foreground">Track your startup's growth and performance</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className="h-8 w-8 text-primary" />
                    <span className="text-sm font-medium text-secondary">{stat.change}</span>
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.title}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="hover-lift animate-fade-in">
              <CardHeader>
                <CardTitle>Growth Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={growthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="users" stroke="#4F46E5" strokeWidth={2} />
                    <Line type="monotone" dataKey="revenue" stroke="#14B8A6" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="hover-lift animate-fade-in">
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#4F46E5" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="hover-lift animate-fade-in">
              <CardHeader>
                <CardTitle>Fund Distribution</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={fundingData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {fundingData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="hover-lift animate-fade-in">
              <CardHeader>
                <CardTitle>Milestones Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`mt-1 w-3 h-3 rounded-full ${
                        milestone.status === "completed" ? "bg-secondary" :
                        milestone.status === "in-progress" ? "bg-accent" :
                        "bg-muted"
                      }`} />
                      <div className="flex-1">
                        <div className="font-medium">{milestone.title}</div>
                        <div className="text-sm text-muted-foreground">{milestone.date}</div>
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        milestone.status === "completed" ? "bg-secondary/10 text-secondary" :
                        milestone.status === "in-progress" ? "bg-accent/10 text-accent" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        {milestone.status}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
