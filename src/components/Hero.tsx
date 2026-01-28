import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-orange-950/20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Limited Seats Available</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight">
            Start Your{" "}
            <span className="text-gradient">Fitness Journey</span>
            {" "}Today
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Online Weight Loss Class • Get Fit from Home 💪
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Trainer-Led Live Sessions
          </p>

          {/* Offer Highlight */}
          <div className="inline-block bg-gradient-gold text-primary-foreground px-8 py-4 rounded-2xl mb-10 glow-gold">
            <span className="text-2xl md:text-3xl font-bold">1 Month – ₹1000 Only</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/919173621450?text=Hi,%20I'm%20interested%20in%20joining%20FitNest%20Online%20Weight%20Loss%20Class"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-gradient-gold hover:opacity-90 text-primary-foreground text-lg px-8 py-6 rounded-full font-bold glow-gold">
                JOIN NOW
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="tel:+919173621450">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full border-primary/50 hover:bg-primary/10">
                Call: +91-9173621450
              </Button>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Live Sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>No Equipment Needed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Beginner Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
