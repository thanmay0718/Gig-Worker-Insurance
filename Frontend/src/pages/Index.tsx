import { Link } from "react-router-dom";
import {
  Shield, Brain, Calculator, Zap, Search, CloudRain,
  ArrowRight, CheckCircle, Code, Database, Cloud, BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  { icon: Brain, title: "AI Risk Prediction", desc: "ML models analyze environmental data to predict disruptions before they happen." },
  { icon: Calculator, title: "Dynamic Premium Calculation", desc: "Fair, data-driven premiums that adjust based on real-time risk assessment." },
  { icon: Zap, title: "Automatic Claims", desc: "Claims are triggered automatically when environmental disruptions are detected." },
  { icon: Search, title: "Fraud Detection", desc: "AI-powered fraud detection ensures system integrity and fair payouts." },
  { icon: CloudRain, title: "Real-time Monitoring", desc: "24/7 environmental monitoring using weather APIs and satellite data." },
];

const steps = [
  "Worker registers on the platform",
  "AI analyzes environmental risk",
  "Premium is calculated dynamically",
  "Worker purchases policy",
  "System monitors weather events",
  "Disruption → automatic compensation",
];

const techStack = [
  { name: "React", icon: Code },
  { name: "Spring Boot", icon: Database },
  { name: "Python", icon: BarChart3 },
  { name: "MySQL", icon: Database },
  { name: "Weather API", icon: Cloud },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Shield className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold font-display text-foreground">GigShield AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a>
            <a href="#tech" className="hover:text-foreground transition-colors">Technology</a>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/dashboard">
              <Button variant="ghost" size="sm">Worker Login</Button>
            </Link>
            <Link to="/admin">
              <Button size="sm">Admin Panel</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-info/5" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-info/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Shield className="h-4 w-4" />
              AI-Powered Insurance Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold font-display text-foreground leading-tight mb-6">
              AI-Powered Insurance for{" "}
              <span className="text-primary">Gig Workers</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Protecting gig workers from income loss caused by environmental disruptions.
              Smart, automated, and fair coverage powered by artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="text-base px-8 gap-2">
                  Get Protected Today <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button size="lg" variant="outline" className="text-base px-8">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
              Why Choose GigShield AI?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with real-time environmental data to provide comprehensive protection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <Card
                key={i}
                className="group border-border/50 bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <f.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold font-display text-foreground mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg">Simple, transparent, and fully automated</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <p className="text-foreground font-medium">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="tech" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">Built With Modern Technology</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
            {techStack.map((t, i) => (
              <Card key={i} className="border-border/50 bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardContent className="flex flex-col items-center gap-3 p-6 min-w-[120px]">
                  <t.icon className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium text-foreground">{t.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-12 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
            <h2 className="text-3xl md:text-4xl font-bold font-display text-primary-foreground mb-4 relative">
              Get Protected Today
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto relative">
              Join thousands of gig workers who trust GigShield AI to protect their earnings.
            </p>
            <Link to="/dashboard" className="relative">
              <Button size="lg" variant="secondary" className="text-base px-8 gap-2 font-semibold">
                Start Your Protection <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-bold font-display text-foreground">GigShield AI</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 GigShield AI. Built for Hackathon Demo.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
