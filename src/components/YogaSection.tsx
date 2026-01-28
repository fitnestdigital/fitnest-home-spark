import { Leaf, Sun, Heart, Moon, Wind, Check, Clock, Calendar } from "lucide-react";

const yogaFeatures = [
  { icon: Leaf, text: "Mindful Breathing" },
  { icon: Sun, text: "Morning Flow Sessions" },
  { icon: Heart, text: "Stress Relief" },
  { icon: Moon, text: "Relaxation Techniques" },
  { icon: Wind, text: "Flexibility Training" }
];

const yogaProgramFeatures = [
  "Online Live Yoga Classes",
  "Home Based Practice",
  "Certified Yoga Instructor",
  "Mental Wellness Focus",
  "Improved Flexibility & Balance",
  "All Levels Welcome",
  "No Equipment Required",
  "Affordable Monthly Plan"
];

const YogaSection = () => {
  return (
    <section id="yoga" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-background to-teal-500/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-semibold mb-4">
            NEW PROGRAM
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Yoga</span> Program
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find your inner peace and transform your body with our online yoga sessions
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto mb-16">
          <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Monthly Membership</h3>
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-5xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">₹800</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <p className="text-muted-foreground mb-6">Start your mindfulness journey today</p>
            <a
              href="https://wa.me/919173621450?text=Hi!%20I'm%20interested%20in%20joining%20the%20FitNest%20Yoga%20Program"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full py-4 px-8 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
            >
              Join Yoga Program
            </a>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">What's Included</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {yogaFeatures.map((item, index) => (
              <div 
                key={index}
                className="bg-background border border-border rounded-2xl p-6 text-center hover:border-emerald-500/50 transition-all group"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <p className="font-semibold text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Program Features */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Program Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {yogaProgramFeatures.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-background/50 border border-border rounded-xl p-4"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Batch Timings */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Yoga Batch Timings</h3>
          
          {/* Days */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Calendar className="h-6 w-6 text-emerald-400" />
              <span className="text-xl font-bold">Monday to Saturday</span>
            </div>
            <p className="text-muted-foreground">6 days a week • Peaceful mornings</p>
          </div>

          {/* Batch Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Morning Batch */}
            <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 border border-emerald-500/30 rounded-2xl p-8 text-center group hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sun className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-2">Morning Flow</h4>
              <p className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">5:30 AM – 6:30 AM</p>
              <p className="text-muted-foreground">Start your day with energy</p>
            </div>

            {/* Evening Batch */}
            <div className="bg-gradient-to-br from-teal-500/20 to-teal-500/5 border border-teal-500/30 rounded-2xl p-8 text-center group hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] transition-all">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Moon className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-2">Evening Calm</h4>
              <p className="text-3xl font-black bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent mb-2">6:30 PM – 7:30 PM</p>
              <p className="text-muted-foreground">Unwind after a long day</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YogaSection;
