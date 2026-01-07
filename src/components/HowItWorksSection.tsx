import { MessageCircle, Brain, Heart, Rocket, ArrowRight } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    icon: MessageCircle,
    title: "Meet Aryam",
    description: "Start a conversation with your AI mentor. Aryam uses Socratic questioning to guide you, not just provide answers. Share your goals, challenges, or confusion.",
    color: "from-primary to-primary/70",
    emoji: "💬",
  },
  {
    icon: Brain,
    title: "Upskill Mode",
    description: "Aryam switches to Instructor mode for technical learning. Get precise, cited knowledge with guided discovery that builds deep understanding.",
    color: "from-secondary to-secondary/70",
    emoji: "📚",
  },
  {
    icon: Heart,
    title: "Uplift Mode",
    description: "When you need emotional support, Aryam becomes your Confidante. Empathetic, patient, and validating—helping you build resilience and confidence.",
    color: "from-success to-success/70",
    emoji: "💙",
  },
  {
    icon: Rocket,
    title: "Unleash Mode",
    description: "Aryam transforms into your Coach—driving accountability, tracking goals, scheduling sessions, and helping you achieve flow state.",
    color: "from-info to-info/70",
    emoji: "🚀",
  },
];

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-success" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            How <span className="text-gradient">Aryam</span> Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the three pillars: Upskill with precision, Uplift with empathy, and Unleash your potential.
          </p>
        </div>

        {/* Interactive Steps */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps List */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  activeStep === index ? "scale-100" : "scale-95 opacity-70"
                }`}
                onClick={() => setActiveStep(index)}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className={`flex items-start gap-4 p-6 rounded-2xl border-2 transition-all duration-300 ${
                  activeStep === index 
                    ? "bg-card border-primary/30 shadow-glow" 
                    : "bg-card/50 border-border/50 hover:border-primary/20"
                }`}>
                  {/* Step Number */}
                  <div className={`relative flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transition-transform duration-300 ${
                    activeStep === index ? "scale-110" : ""
                  }`}>
                    <span className="text-2xl">{step.emoji}</span>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-card border-2 border-primary flex items-center justify-center text-xs font-bold text-primary">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-foreground flex items-center gap-2">
                      {step.title}
                      {activeStep === index && (
                        <ArrowRight className="w-5 h-5 text-primary animate-pulse" />
                      )}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="absolute left-10 top-full w-0.5 h-4 bg-gradient-to-b from-primary/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
          
          {/* Visual Display */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-primary opacity-10 blur-3xl rounded-full" />
            
            <div className="relative bg-card rounded-3xl border border-border/50 p-10 shadow-elevated min-h-[500px] flex items-center justify-center">
              {/* Active Step Display */}
              <div className="text-center w-full">
                <div className={`inline-flex w-28 h-28 rounded-3xl bg-gradient-to-br ${steps[activeStep].color} items-center justify-center mb-8 shadow-lg animate-bounce-in`} key={activeStep}>
                  <span className="text-6xl">{steps[activeStep].emoji}</span>
                </div>
                
                <h3 className="text-3xl font-bold mb-4">{steps[activeStep].title}</h3>
                <p className="text-muted-foreground max-w-sm mx-auto text-lg leading-relaxed">
                  {steps[activeStep].description}
                </p>
                
                {/* Progress dots */}
                <div className="flex justify-center gap-2 mt-12">
                  {steps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeStep === index 
                          ? "bg-primary w-8" 
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
