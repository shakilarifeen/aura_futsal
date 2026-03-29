import { motion } from "motion/react";
import { Send, MapPin, Phone, Mail, Instagram, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <main className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <header className="mb-16 md:mb-24">
        <span className="text-primary font-label text-xs uppercase tracking-[0.4em] mb-4 block">Get in touch</span>
        <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter leading-none aura-glow">
          Connect with <span className="text-primary">Aura.</span>
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32">
        {/* Left Side: Form */}
        <section className="flex flex-col justify-center">
          <form className="space-y-8">
            <div className="group relative">
              <label className="block text-on-surface-variant text-[10px] uppercase tracking-widest mb-2 transition-colors group-focus-within:text-primary">Name</label>
              <input 
                className="w-full bg-transparent border-0 border-b border-white/10 py-4 px-0 text-white focus:ring-0 focus:border-primary placeholder:text-white/10 transition-all" 
                placeholder="Enter your full name" 
                type="text" 
              />
            </div>
            <div className="group relative">
              <label className="block text-on-surface-variant text-[10px] uppercase tracking-widest mb-2 transition-colors group-focus-within:text-primary">Phone Number</label>
              <input 
                className="w-full bg-transparent border-0 border-b border-white/10 py-4 px-0 text-white focus:ring-0 focus:border-primary placeholder:text-white/10 transition-all" 
                placeholder="+94 XX XXX XXXX" 
                type="tel" 
              />
            </div>
            <div className="group relative">
              <label className="block text-on-surface-variant text-[10px] uppercase tracking-widest mb-2 transition-colors group-focus-within:text-primary">Inquiry Type</label>
              <select className="w-full bg-transparent border-0 border-b border-white/10 py-4 px-0 text-white focus:ring-0 focus:border-primary appearance-none transition-all">
                <option disabled selected value="" className="bg-background">Select option</option>
                <option value="league" className="bg-background">League</option>
                <option value="corporate" className="bg-background">Corporate Event</option>
                <option value="casual" className="bg-background">Casual Play</option>
              </select>
            </div>
            <button className="w-fit mt-8 group flex items-center gap-4 text-primary font-headline font-bold text-lg uppercase tracking-wider" type="submit">
              Send Message
              <span className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-300">
                <Send className="w-5 h-5" />
              </span>
            </button>
          </form>
        </section>

        {/* Right Side: Map */}
        <section className="relative min-h-[400px] lg:min-h-full rounded-xl overflow-hidden border border-white/5">
          <div className="absolute inset-0 bg-surface flex items-center justify-center">
            {/* Mock Map Background */}
            <div className="absolute inset-0 opacity-40 grayscale contrast-125">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
                alt="Map Background" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            
            {/* Neon Pin */}
            <div className="relative z-20 flex flex-col items-center">
              <motion.div 
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-4 h-4 bg-primary rounded-full absolute"
              />
              <div className="w-4 h-4 bg-primary rounded-full relative shadow-[0_0_20px_#8eff71]"></div>
              <div className="mt-4 bg-surface/90 backdrop-blur-md px-4 py-2 rounded border border-primary/20">
                <p className="font-headline font-bold text-xs tracking-tighter">AURA FUTSAL HQ</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-surface rounded-xl border border-white/5 space-y-4">
          <MapPin className="text-primary w-6 h-6" />
          <h3 className="font-headline font-bold text-xl">Location</h3>
          <p className="text-on-surface-variant text-sm">123 Kinetic Way, Colombo 07, Sri Lanka</p>
        </div>
        <div className="p-8 bg-surface rounded-xl border border-white/5 space-y-4">
          <Phone className="text-primary w-6 h-6" />
          <h3 className="font-headline font-bold text-xl">Phone</h3>
          <p className="text-on-surface-variant text-sm">+94 11 234 5678<br />+94 77 123 4567</p>
        </div>
        <div className="p-8 bg-surface rounded-xl border border-white/5 space-y-4">
          <Mail className="text-primary w-6 h-6" />
          <h3 className="font-headline font-bold text-xl">Email</h3>
          <p className="text-on-surface-variant text-sm">play@aurafutsal.com<br />events@aurafutsal.com</p>
        </div>
      </div>
    </main>
  );
}
