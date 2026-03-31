import { motion } from "motion/react";
import { ArrowRight, LayoutGrid, Sun, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-start px-8 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000"
            alt="Aura Futsal Pitch"
            className="w-full h-full object-cover opacity-60 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-label text-primary uppercase tracking-[0.4em] text-sm mb-4 font-bold"
          >
            Engineered for Performance
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="font-headline text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-8 aura-glow"
          >
            FIND YOUR<br /><span className="text-primary italic">AURA.</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row gap-6 mt-12"
          >
            <Link
              to="/bookings"
              className="kinetic-gradient text-black font-headline font-bold text-xl px-10 py-5 rounded-md hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              BOOK YOUR PITCH
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>

        <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
          <span className="font-headline text-[30rem] font-black leading-none text-primary select-none pointer-events-none">A</span>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="font-headline text-5xl font-bold tracking-tight mb-4 uppercase">Elite Facilities.</h2>
            <p className="text-on-surface-variant text-lg">Experience the next generation of urban sports. Our courts are designed to match the intensity of the beautiful game.</p>
          </div>
          <div className="h-[2px] flex-grow mx-8 bg-gradient-to-r from-primary/50 to-transparent mb-4 hidden md:block"></div>
          <div className="text-right">
            <p className="font-label text-xs uppercase tracking-widest text-primary mb-1">Status</p>
            <p className="font-headline text-2xl font-black">ALL COURTS ACTIVE</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-7 bg-surface rounded-xl p-8 relative overflow-hidden group border border-white/5 min-h-[400px]"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <LayoutGrid className="text-primary w-8 h-8" />
                </div>
                <h3 className="font-headline text-4xl font-bold mb-4">FIFA GRADE TURF</h3>
                <p className="text-on-surface-variant max-w-md leading-relaxed">Pro-spec synthetic surfaces engineered for high-velocity movement and impact reduction. Play like a professional.</p>
              </div>
              <div className="mt-8">
                <button className="text-primary font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  TECH SPECS <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-20 translate-x-10 translate-y-10 group-hover:scale-110 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&q=80&w=800" 
                alt="Turf Detail" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-5 bg-surface rounded-xl p-8 relative overflow-hidden group border border-white/5 min-h-[400px]"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6">
                  <Sun className="text-cyan-400 w-8 h-8" />
                </div>
                <h3 className="font-headline text-4xl font-bold mb-4">NIGHT PLAY ENABLED</h3>
                <p className="text-on-surface-variant leading-relaxed">4000K Luminescent stadium lighting designed to eliminate shadows and maximize focus during late-night sessions.</p>
              </div>
              <div className="mt-8">
                <button className="text-cyan-400 font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  SYSTEM STATS <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-cyan-500/10 blur-[100px] rounded-full"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
