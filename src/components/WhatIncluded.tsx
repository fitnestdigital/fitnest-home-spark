import { Video, Flame, Users, Dumbbell, Activity, Check } from "lucide-react";

const included = [
  { icon: Video, text: "Live Workout Sessions" },
  { icon: Flame, text: "Fat Loss Focused Training" },
  { icon: Users, text: "Beginner Friendly" },
  { icon: Dumbbell, text: "No Equipment Needed" },
  { icon: Activity, text: "Full Body Workouts" }
];

const programFeatures = [
  "Online Live Classes",
  "Home Based Workout",
  "Personal Trainer Guidance",
  "Weight Loss Focus",
  "Full Body Fat Burn",
  "Beginner to Intermediate Friendly",
  "No Gym Required",
  "Affordable Monthly Plan"
];

const WhatIncluded = () => {
  return (
    <section id="program" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What's <span className="text-gradient">Included</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to kickstart your fitness transformation
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16 max-w-5xl mx-auto">
          {included.map((item, index) => (
            <div 
              key={index}
              className="bg-background border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all group"
            >
              <div className="w-16 h-16 mx-auto bg-gradient-orange rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon className="h-8 w-8 text-secondary-foreground" />
              </div>
              <p className="font-semibold text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Program Features Grid */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Program Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {programFeatures.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-background/50 border border-border rounded-xl p-4"
              >
                <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIncluded;
