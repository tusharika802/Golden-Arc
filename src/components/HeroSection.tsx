import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles, Heart, Play, Zap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isTyping, setIsTyping] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      
      {/* Floating Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 blob animate-blob opacity-60 blur-3xl" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/15 blob animate-blob opacity-50 blur-3xl" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent/30 blob animate-blob opacity-40 blur-3xl" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6 animate-bounce-in">
              <span className="text-sm font-semibold text-primary">AI-Powered Career Guidance</span>
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-6 animate-slide-up">
              From <span className="text-gradient">Confusion</span>
              <br />
              to <span className="text-gradient">Clarity</span>
              <span className="inline-block ml-2 animate-wiggle">✨</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up-delayed leading-relaxed">
              An empathetic AI companion that truly <strong className="text-foreground">understands</strong> your journey. 
              Get personalized career guidance tailored to your personality, interests, and dreams.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
              <Button variant="hero" size="xl" className="group" asChild>
                <Link to="/auth?tab=signup">
                  <Zap className="w-5 h-5" />
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" className="group" asChild>
                <Link to="/demo-guide">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 mt-10 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
                <Heart className="w-5 h-5 text-secondary fill-secondary" />
                <span className="text-sm font-medium">10,000+ Students Helped</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Interactive Chat Preview */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-3xl scale-95" />
            
            <div className="relative bg-card rounded-3xl shadow-elevated border border-border/50 p-6 max-w-md mx-auto overflow-hidden">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
              
              {/* Chat Header */}
              <div className="relative flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="relative w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground">Aryam</h3>
                  <p className="text-sm text-muted-foreground">Your AI Mentor</p>
                </div>
                <div className="flex items-center gap-2 bg-success/10 px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-success">Online</span>
                </div>
              </div>
              
              {/* Chat Messages */}
              <div className="relative space-y-4">
                <div className="bg-muted/50 rounded-2xl rounded-tl-sm p-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
                  <p className="text-sm text-foreground leading-relaxed">
                    Hi there! 👋 I'm here to help you discover your career path. There's no pressure — let's just have a friendly chat. What's been on your mind lately?
                  </p>
                </div>
                
                <div className="bg-gradient-primary rounded-2xl rounded-tr-sm p-4 ml-8 animate-slide-up" style={{ animationDelay: '0.7s' }}>
                  <p className="text-sm text-primary-foreground">
                    I'm feeling really confused about what to do after graduation... 😔
                  </p>
                </div>
                
                <div className="bg-muted/50 rounded-2xl rounded-tl-sm p-4 animate-slide-up" style={{ animationDelay: '0.9s' }}>
                  <p className="text-sm text-foreground leading-relaxed">
                    That's completely normal, and you're definitely not alone! 💙 Let me ask you — when was the last time you felt truly <strong>excited</strong> about something?
                  </p>
                </div>
                
                {/* Typing indicator */}
                <div 
                  className="flex items-center gap-2 p-3 cursor-pointer group"
                  onMouseEnter={() => setIsTyping(true)}
                  onMouseLeave={() => setIsTyping(false)}
                >
                  {isTyping && (
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  )}
                </div>
              </div>
              
              {/* Input Field Preview */}
              <div className="relative mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-3 bg-muted/50 rounded-2xl px-4 py-3 border border-border/50 focus-within:border-primary/50 transition-colors">
                  <input
                    type="text"
                    placeholder="Share what's on your mind..."
                    className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  />
                  <Button size="sm" variant="default" className="rounded-xl">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
