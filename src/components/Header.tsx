import fitnestLogo from "@/assets/fitnest-logo.png";
import { Phone, Mail, Globe } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={fitnestLogo} alt="FitNest Logo" className="h-12 w-auto" />
          <div className="hidden sm:block">
            <span className="text-xl font-bold text-gradient">FitNest</span>
            <p className="text-xs text-muted-foreground">Fitness Simplified</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:text-primary transition-colors">Why FitNest</a>
          <a href="#program" className="hover:text-primary transition-colors">Program</a>
          <a href="#timings" className="hover:text-primary transition-colors">Timings</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="tel:+919173621450" 
            className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>+91-9173621450</span>
          </a>
          <a 
            href="https://wa.me/919173621450?text=Hi,%20I'm%20interested%20in%20joining%20FitNest%20Online%20Weight%20Loss%20Class"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-gold text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Join Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
