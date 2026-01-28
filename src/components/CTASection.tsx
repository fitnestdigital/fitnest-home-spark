import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Ready to <span className="text-gradient">Transform</span> Your Body?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join FitNest Online Weight Loss Program Today
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/919173621450?text=Hi,%20I'm%20interested%20in%20joining%20FitNest%20Online%20Weight%20Loss%20Class"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 rounded-full font-bold">
                <MessageCircle className="mr-2 h-5 w-5" />
                Join Now on WhatsApp
              </Button>
            </a>
            
            <a href="tel:+919173621450">
              <Button size="lg" className="bg-gradient-gold hover:opacity-90 text-primary-foreground text-lg px-8 py-6 rounded-full font-bold glow-gold">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Price reminder */}
          <div className="mt-10 inline-flex items-center gap-2 bg-background/50 backdrop-blur border border-primary/30 rounded-full px-6 py-3">
            <span className="text-muted-foreground">Limited Time Offer:</span>
            <span className="text-xl font-bold text-gradient">₹1000/month</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
