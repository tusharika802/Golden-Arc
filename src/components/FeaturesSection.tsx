import { 
  Heart, 
  Shield, 
  Lightbulb, 
  Users, 
  TrendingUp, 
  BookOpen,
  Clock,
  Target,
  Compass,
  Rocket,
  Brain,
  MessageCircle
} from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: BookOpen,
    title: "Upskill: Precision Learning",
    description: "Aryam's Instructor mode delivers precise, cited knowledge through Socratic questioning. Build deep understanding, not just memorization.",
    gradient: "from-blue-600 to-blue-500",
    emoji: "📚",
  },
  {
    icon: Heart,
    title: "Uplift: Emotional Intelligence",
    description: "Aryam's Confidante mode provides empathetic support, validates your struggles, and builds resilience through understanding.",
    gradient: "from-green-500 to-emerald-500",
    emoji: "💙",
  },
  {
    icon: Rocket,
    title: "Unleash: Agentic Coaching",
    description: "Aryam's Coach mode drives accountability, tracks goals, schedules sessions, and helps you achieve flow state for peak performance.",
    gradient: "from-indigo-500 to-purple-500",
    emoji: "🚀",
  },
  {
    icon: Brain,
    title: "Socratic Method",
    description: "Unlike standard chatbots, Aryam guides you to discover answers through thoughtful questions, fostering critical thinking.",
    gradient: "from-cyan-500 to-blue-500",
    emoji: "🧠",
  },
  {
    icon: Target,
    title: "Long-Term Memory",
    description: "Aryam remembers your journey, preferences, and context across sessions, creating a true mentorship relationship.",
    gradient: "from-teal-500 to-cyan-500",
    emoji: "🎯",
  },
  {
    icon: Shield,
    title: "DPDP Compliant",
    description: "Fully compliant with India's Digital Personal Data Protection Act. Your data is secure, encrypted, and you control it.",
    gradient: "from-slate-600 to-slate-500",
    emoji: "🔒",
  },
  {
    icon: MessageCircle,
    title: "Voice-First Interface",
    description: "Experience natural voice conversations with low-latency AI. Build emotional connection through voice, not just text.",
    gradient: "from-violet-500 to-purple-500",
    emoji: "🎤",
  },
  {
    icon: TrendingUp,
    title: "Agentic Capabilities",
    description: "Aryam doesn't just talk—it acts. Schedule meetings, track goals, and negotiate your calendar to keep you accountable.",
    gradient: "from-orange-500 to-amber-500",
    emoji: "📈",
  },
];

const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1 bg-secondary/10 border border-secondary/20 rounded-full text-sm font-semibold text-secondary mb-4">
            <Compass className="w-4 h-4" />
            Powerful Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            The Eight Pillars of <span className="text-gradient">Transformation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Golden ARC Institute's comprehensive mentorship ecosystem powered by Aryam's cognitive architecture.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 blur-2xl rounded-3xl transition-opacity duration-500`} />
              
              <div className="relative h-full bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-500 card-interactive overflow-hidden">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <span className="text-2xl">{feature.emoji}</span>
                </div>
                
                <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Decorative corner */}
                <div className={`absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-xl transition-opacity duration-500`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
