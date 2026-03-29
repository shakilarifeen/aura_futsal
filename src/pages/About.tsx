import { motion } from "motion/react";
import { Trophy, Users, Zap, Target } from "lucide-react";

const roadmapItems = [
  {
    title: "Aura Padel",
    icon: Trophy,
    description: "Premium glass-walled courts for the fastest-growing racket sport. Experience professional-grade turf and lighting.",
    status: "COMING SOON",
    color: "text-primary"
  },
  {
    title: "Aura Pickleball",
    icon: Zap,
    description: "Social, fast-paced, and high-energy play for all ages. Our courts are designed for maximum kinetic interaction.",
    status: "COMING SOON",
    color: "text-primary"
  },
  {
    title: "Aura 3x3 Basketball",
    icon: Target,
    description: "FIBA-standard half-courts for the ultimate urban streetball experience. High-rebound flooring and night-lit arena.",
    status: "COMING SOON",
    color: "text-primary"
  },
  {
    title: "Aura Cricket",
    icon: Users,
    description: "High-performance practice nets with pro-grade bowling machines. Perfect for refining your technique under the lights.",
    status: "COMING SOON",
    color: "text-primary"
  }
];

export default function About() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <header className="mb-20 space-y-6">
        <div className="flex items-center gap-4">
          <div className="h-[2px] w-12 bg-primary"></div>
          <span className="font-headline uppercase tracking-[0.3em] text-primary text-xs font-bold">Evolution Roadmap</span>
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-none aura-glow">
          THE FUTURE OF AURA:<br />
          <span className="text-primary italic">BEYOND FUTSAL.</span>
        </h1>
        <p className="max-w-2xl text-on-surface-variant text-lg leading-relaxed font-light">
          We are redefining the athletic landscape. Aura isn't just a pitch; it's an ecosystem of high-velocity movement. Our roadmap charts the expansion into premium racket sports and urban streetball.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {roadmapItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group bg-surface p-8 flex flex-col justify-between border border-white/5 transition-all duration-500 relative overflow-hidden h-[450px]"
          >
            <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <item.icon className="w-64 h-64" />
            </div>
            <div>
              <div className="flex justify-between items-start mb-12">
                <item.icon className="text-primary w-10 h-10" />
                <span className="text-primary font-headline font-bold text-[10px] tracking-widest border border-primary/30 px-2 py-1">
                  {item.status}
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
            <button className="w-full py-4 border border-white/10 text-xs font-headline font-bold uppercase tracking-widest hover:bg-primary hover:text-black hover:border-primary transition-all duration-300">
              Express Interest
            </button>
          </motion.div>
        ))}
      </div>

      <section className="max-w-2xl mx-auto bg-surface border border-primary/20 p-10 relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary shadow-[0_0_15px_#8eff71]"></div>
        <div className="mb-8">
          <h2 className="font-headline text-3xl font-bold mb-2 uppercase tracking-tight">HELP US BUILD THE FUTURE.</h2>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            We are looking for visionary partners, property developers, and sporting enthusiasts to help us bring these elite facilities to life. Let's collaborate to redefine urban movement.
          </p>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest font-bold text-primary">Full Name</label>
              <input 
                className="w-full bg-black border-0 border-b border-white/10 focus:ring-0 focus:border-primary text-white placeholder:text-white/20 py-3 transition-all" 
                placeholder="ALEX RIVERA" 
                type="text" 
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest font-bold text-primary">Phone Number</label>
              <input 
                className="w-full bg-black border-0 border-b border-white/10 focus:ring-0 focus:border-primary text-white placeholder:text-white/20 py-3 transition-all" 
                placeholder="+1 (555) 000-0000" 
                type="tel" 
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest font-bold text-primary">Message (Optional)</label>
            <textarea 
              className="w-full bg-black border-0 border-b border-white/10 focus:ring-0 focus:border-primary text-white placeholder:text-white/20 py-3 transition-all min-h-[100px] resize-none" 
              placeholder="HOW WOULD YOU LIKE TO COLLABORATE?"
            ></textarea>
          </div>
          <button className="w-full bg-primary text-black py-4 font-headline font-bold uppercase tracking-widest hover:brightness-110 transition-all" type="submit">
            Start a Conversation
          </button>
        </form>
      </section>
    </main>
  );
}
