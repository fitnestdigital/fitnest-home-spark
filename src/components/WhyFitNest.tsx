import { Award, Target, Home, IndianRupee, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Professional Trainer",
    description: "Get guidance from certified fitness experts"
  },
  {
    icon: Target,
    title: "Structured Weight Loss Plan",
    description: "Science-backed program designed for results"
  },
  {
    icon: Home,
    title: "Home Comfort Workout",
    description: "Exercise from the comfort of your home"
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Premium fitness training at just ₹1000/month"
  },
  {
    icon: TrendingUp,
    title: "Consistent Results",
    description: "Track your progress and see real transformation"
  }
];

const WhyFitNest = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why <span className="text-gradient">FitNest</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join hundreds of satisfied members who transformed their lives with our online fitness program
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:glow-gold"
            >
              <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFitNest;
