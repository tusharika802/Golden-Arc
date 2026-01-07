import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, Zap, Check } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  "No credit card required",
  "Free forever for basic features",
  "Cancel anytime",
];

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 blob animate-blob blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/15 blob animate-blob blur-3xl" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 blob animate-blob blur-3xl" style={{ animationDelay: '5s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Card */}
          <div className="relative bg-card/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 lg:p-16 border border-border/50 shadow-elevated overflow-hidden">
            {/* Decorative gradient border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-secondary to-primary opacity-20 blur-sm -z-10" />
            
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6 animate-bounce-in">
                <Compass className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Start Free Today</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-6 leading-tight">
                Ready to <span className="text-gradient">Upskill, Uplift</span> and{" "}
                <span className="text-gradient">Unleash</span> Your Brilliance?
              </h2>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of students transformed by Aryam's Socratic mentorship. 
                Experience the three pillars: precision learning, emotional support, and agentic coaching.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button variant="hero" size="xl" className="group" asChild>
                  <Link to="/auth?tab=signup">
                    <Zap className="w-5 h-5" />
                    Begin Your Journey Free
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl">
                  Schedule a Demo
                </Button>
              </div>
              
              {/* Benefits */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-secondary/20 to-transparent rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
