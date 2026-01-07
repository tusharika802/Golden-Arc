import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useCountUp } from "@/hooks/useCountUp";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Engineering Student, IIT Delhi",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=faces",
    content: "I was completely lost about my career after 3rd year. PathFinder helped me understand that my love for problem-solving could lead to product management. Now I have a clear roadmap!",
    rating: 5,
    highlight: "Found my path to Product Management",
  },
  {
    name: "Arjun Patel",
    role: "Commerce Graduate, Mumbai",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=faces",
    content: "The AI felt like talking to a friend who actually understands. It asked questions I never thought about and helped me realize I want to pursue sustainable finance.",
    rating: 5,
    highlight: "Discovered passion for Sustainable Finance",
  },
  {
    name: "Sneha Reddy",
    role: "Arts Student, Hyderabad",
    image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=faces",
    content: "Everyone told me arts degrees don't lead anywhere. PathFinder showed me so many creative career paths I never knew existed. Finally feeling confident about my future!",
    rating: 5,
    highlight: "Exploring Creative Career Paths",
  },
];

interface StatCardProps {
  end: number;
  label: string;
  emoji: string;
  suffix?: string;
  decimals?: number;
  format?: "number" | "percentage" | "rating" | "time";
}

const StatCard = ({ end, label, emoji, suffix = "", decimals = 0, format = "number" }: StatCardProps) => {
  const { count, elementRef } = useCountUp({
    end,
    duration: 2000,
    decimals,
    suffix: format === "percentage" ? "%" : suffix,
    separator: format === "time" ? "" : ",",
  });

  const displayValue = format === "rating" 
    ? `${count}/5` 
    : format === "time"
    ? "24/7"
    : count;

  return (
    <div 
      ref={elementRef}
      className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50"
    >
      <span className="text-3xl mb-2 block">{emoji}</span>
      <p className="text-2xl md:text-3xl font-extrabold text-gradient">{displayValue}</p>
      <p className="text-muted-foreground text-sm font-medium">{label}</p>
    </div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary mb-4">
            Success Stories ✨
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Real Stories, Real <span className="text-gradient">Transformations</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from students who found their path with our AI guidance.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-elevated overflow-hidden">
            {/* Quote decoration */}
            <Quote className="absolute top-6 right-6 w-16 h-16 text-primary/10" />
            
            {/* Content */}
            <div className="relative flex flex-col md:flex-row items-center gap-8">
              {/* Author Image */}
              <div className="relative flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl overflow-hidden border-4 border-primary/20 shadow-glow">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  Verified ✓
                </div>
              </div>
              
              {/* Text Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Highlight badge */}
                <span className="inline-block px-3 py-1 bg-success/10 text-success rounded-full text-sm font-medium mb-4">
                  {testimonials[activeIndex].highlight}
                </span>
                
                {/* Rating */}
                <div className="flex gap-1 justify-center md:justify-start mb-4">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed italic">
                  "{testimonials[activeIndex].content}"
                </p>
                
                {/* Author */}
                <div>
                  <p className="font-bold text-foreground text-lg">{testimonials[activeIndex].name}</p>
                  <p className="text-muted-foreground">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index 
                        ? "bg-primary w-6" 
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard
            end={10000}
            label="Students Helped"
            emoji="🎓"
            suffix="+"
            format="number"
          />
          <StatCard
            end={95}
            label="Found Clarity"
            emoji="✨"
            format="percentage"
          />
          <StatCard
            end={4.9}
            label="User Rating"
            emoji="⭐"
            decimals={1}
            format="rating"
          />
          <StatCard
            end={24}
            label="Available"
            emoji="🌙"
            format="time"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
