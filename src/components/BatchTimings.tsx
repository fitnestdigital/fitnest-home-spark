import { Clock, Calendar } from "lucide-react";

const BatchTimings = () => {
  return (
    <section id="timings" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Batch <span className="text-gradient">Timings</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose your convenient batch!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Days */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Calendar className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Monday to Friday</span>
            </div>
            <p className="text-muted-foreground">5 days a week • Consistent schedule</p>
          </div>

          {/* Batch Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Batch 1 */}
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-8 text-center group hover:glow-gold transition-all">
              <div className="w-16 h-16 mx-auto bg-gradient-gold rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Clock className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Batch 1</h3>
              <p className="text-3xl font-black text-gradient mb-2">6:00 AM – 7:00 AM</p>
              <p className="text-muted-foreground">Early morning energy boost</p>
            </div>

            {/* Batch 2 */}
            <div className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 rounded-2xl p-8 text-center group hover:glow-orange transition-all">
              <div className="w-16 h-16 mx-auto bg-gradient-orange rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Clock className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Batch 2</h3>
              <p className="text-3xl font-black text-gradient mb-2">7:00 AM – 8:00 AM</p>
              <p className="text-muted-foreground">Perfect morning workout</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatchTimings;
