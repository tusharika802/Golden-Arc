import { Compass, Mail, Phone, MapPin, Heart, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "Pricing", href: "#" },
      { name: "Testimonials", href: "#testimonials" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "Twitter", icon: "𝕏" },
    { name: "LinkedIn", icon: "in" },
    { name: "Instagram", icon: "📷" },
    { name: "YouTube", icon: "▶" },
  ];

  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
      
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <Compass className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">Golden ARC Institute Gen AI</span>
            </div>
            <p className="text-background/70 mb-6 max-w-sm leading-relaxed">
              Upskill, Uplift, and Unleash Brilliance. Experience AI-powered mentorship with Aryam—your Socratic guide to career transformation.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-background/70 mb-6">
              <a href="mailto:hello@goldenarcinstitute.com" className="flex items-center gap-3 hover:text-background transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>hello@goldenarcinstitute.com</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-background transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 98765 43210</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Bangalore, India</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-background/10 hover:bg-primary flex items-center justify-center text-sm font-bold transition-all duration-300 hover:scale-110"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-6 text-lg">Product</h4>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-background transition-colors flex items-center gap-1 group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-background transition-colors flex items-center gap-1 group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg">Support</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-background transition-colors flex items-center gap-1 group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © {currentYear} Golden ARC Institute. All rights reserved. DPDP Compliant.
          </p>
          <div className="flex items-center gap-2 text-sm text-background/60">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-secondary fill-secondary animate-pulse" />
            <span>for students</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
