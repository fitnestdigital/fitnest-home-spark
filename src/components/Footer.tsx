import fitnestLogo from "@/assets/fitnest-logo.png";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <img src={fitnestLogo} alt="FitNest Logo" className="h-16 w-auto" />
              <div>
                <span className="text-2xl font-bold text-gradient">FitNest</span>
                <p className="text-sm text-muted-foreground">Fitness Simplified</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Transform Your Body from Home
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Why FitNest</a>
              <a href="#program" className="text-muted-foreground hover:text-primary transition-colors">Program</a>
              <a href="#timings" className="text-muted-foreground hover:text-primary transition-colors">Batch Timings</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-bold mb-4 text-lg">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="tel:+919173621450" 
                className="flex items-center gap-2 justify-center md:justify-end text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+91-9173621450</span>
              </a>
              <a 
                href="mailto:workout@fitnest.digital" 
                className="flex items-center gap-2 justify-center md:justify-end text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>workout@fitnest.digital</span>
              </a>
              <a 
                href="https://www.fitnest.buzz" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 justify-center md:justify-end text-muted-foreground hover:text-primary transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span>www.fitnest.buzz</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} FitNest – Fitness Simplified. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
