import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar as CalendarIcon, Clock, MapPin, X, Lock, Droplets, Trophy } from "lucide-react";

interface Slot {
  id: string;
  time: string;
  day: string;
  status: "available" | "booked" | "held";
  heldAt?: number;
}

export default function Bookings() {
  const days = ["Mon 21", "Tue 22", "Wed 23", "Thu 24", "Fri 25", "Sat 26", "Sun 27"];
  const times = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];

  const [slots, setSlots] = useState<Slot[]>(() => {
    const initialSlots: Slot[] = [];
    days.forEach(day => {
      times.forEach(time => {
        // Randomly mark some as booked for realism
        const isBooked = Math.random() < 0.2;
        initialSlots.push({
          id: `${day}-${time}`,
          day,
          time,
          status: isBooked ? "booked" : "available"
        });
      });
    });
    return initialSlots;
  });

  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);

  // 10-minute hold logic
  useEffect(() => {
    const interval = setInterval(() => {
      setSlots(prev => prev.map(slot => {
        if (slot.status === "held" && slot.heldAt && Date.now() - slot.heldAt > 600000) { // 10 minutes
          return { ...slot, status: "available", heldAt: undefined };
        }
        return slot;
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSlotClick = (slotId: string) => {
    const slot = slots.find(s => s.id === slotId);
    if (!slot || slot.status === "booked") return;

    setSlots(prev => prev.map(s => {
      // If clicking the already held slot, release it
      if (s.id === slotId && s.status === "held") {
        setSelectedSlotId(null);
        return { ...s, status: "available", heldAt: undefined };
      }
      // Release any other held slot
      if (s.status === "held") {
        return { ...s, status: "available", heldAt: undefined };
      }
      // Hold the new slot
      if (s.id === slotId) {
        setSelectedSlotId(slotId);
        return { ...s, status: "held", heldAt: Date.now() };
      }
      return s;
    }));
  };

  const selectedSlot = slots.find(s => s.id === selectedSlotId);

  return (
    <main className="pt-32 pb-20 px-8 max-w-screen-2xl mx-auto">
      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-primary font-label uppercase tracking-widest text-xs mb-2 block">Premium Facility Management</span>
          <h1 className="text-6xl md:text-7xl font-headline font-black tracking-tighter leading-none">
            AURA ARENA <span className="text-primary">BOOKINGS.</span>
          </h1>
        </div>
        <div className="flex items-center gap-4 bg-surface p-4 rounded-xl border border-white/5">
          <div className="h-10 w-1 bg-primary rounded-full"></div>
          <div>
            <p className="text-on-surface-variant text-xs uppercase tracking-tighter font-medium">Current Venue</p>
            <p className="font-headline font-bold text-lg">Central Pitch 01</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Calendar Grid */}
        <section className="lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between bg-surface p-4 rounded-xl border border-white/5">
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                <ChevronRight className="rotate-180 w-5 h-5" />
              </button>
              <h2 className="font-headline font-bold text-xl">Oct 21 — Oct 27</h2>
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-primary text-black font-bold text-xs uppercase tracking-widest rounded-lg">Week</button>
              <button className="px-4 py-2 text-on-surface-variant hover:text-white font-bold text-xs uppercase tracking-widest rounded-lg transition-colors">Day</button>
            </div>
          </div>

          <div className="bg-surface rounded-xl overflow-hidden border border-white/5 shadow-2xl">
            <div className="grid grid-cols-[80px_repeat(7,1fr)] border-b border-white/5">
              <div className="p-4 border-r border-white/5"></div>
              {days.map(day => (
                <div key={day} className="p-4 text-center border-r border-white/5">
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">{day.split(' ')[0]}</p>
                  <p className="font-headline font-bold">{day.split(' ')[1]}</p>
                </div>
              ))}
            </div>
            
            <div className="max-h-[600px] overflow-y-auto">
              {times.map(time => (
                <div key={time} className="grid grid-cols-[80px_repeat(7,1fr)] border-b border-white/5">
                  <div className="h-20 border-r border-white/5 flex items-center justify-center text-[10px] text-on-surface-variant font-bold">
                    {time}
                  </div>
                  {days.map(day => {
                    const slot = slots.find(s => s.day === day && s.time === time);
                    return (
                      <div key={`${day}-${time}`} className="h-20 border-r border-white/5 p-1">
                        <motion.div
                          whileHover={slot?.status === "available" ? { scale: 0.98 } : {}}
                          onClick={() => handleSlotClick(`${day}-${time}`)}
                          className={`w-full h-full rounded-lg transition-all duration-300 cursor-pointer flex flex-col items-center justify-center ${
                            slot?.status === "booked" 
                              ? "bg-white/5 opacity-50 cursor-not-allowed" 
                              : slot?.status === "held"
                              ? "bg-yellow-400 text-black shadow-[0_0_15px_rgba(250,204,21,0.4)]"
                              : "border-2 border-primary/20 bg-primary/5 hover:border-primary/60"
                          }`}
                        >
                          {slot?.status === "booked" && <X className="w-4 h-4 text-white/20" />}
                          {slot?.status === "held" && (
                            <>
                              <span className="text-[10px] font-black">HOLD</span>
                              <span className="text-sm font-black leading-none">{time}</span>
                            </>
                          )}
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-8 items-center pt-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border-2 border-primary/40 bg-primary/10"></div>
              <span className="text-xs font-label text-on-surface-variant uppercase tracking-widest">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-white/10"></div>
              <span className="text-xs font-label text-on-surface-variant uppercase tracking-widest">Booked</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-yellow-400"></div>
              <span className="text-xs font-label text-on-surface-variant uppercase tracking-widest">Your Selection</span>
            </div>
          </div>
        </section>

        {/* Sidebar Summary */}
        <aside className="lg:col-span-4 sticky top-28">
          <div className="bg-surface rounded-xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-[80px] rounded-full"></div>
            <h3 className="font-headline font-black text-2xl mb-8 tracking-tight">BOOKING <span className="text-primary">SUMMARY.</span></h3>
            
            <AnimatePresence mode="wait">
              {selectedSlot ? (
                <motion.div
                  key="summary"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6 mb-12"
                >
                  <div className="group">
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-bold mb-1">Selected Date</p>
                    <div className="flex items-center justify-between">
                      <span className="font-headline font-bold text-xl">{selectedSlot.day}, Oct 2024</span>
                      <CalendarIcon className="text-primary w-4 h-4" />
                    </div>
                    <div className="h-px w-full bg-white/5 mt-3"></div>
                  </div>
                  <div className="group">
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-bold mb-1">Time Slot</p>
                    <div className="flex items-center justify-between">
                      <span className="font-headline font-bold text-xl">{selectedSlot.time} — {parseInt(selectedSlot.time) + 1}:00</span>
                      <Clock className="text-primary w-4 h-4" />
                    </div>
                    <div className="h-px w-full bg-white/5 mt-3"></div>
                  </div>
                  <div className="group">
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-bold mb-1">Facility Fee</p>
                    <div className="flex items-center justify-between">
                      <span className="font-headline font-bold text-3xl">$85.00</span>
                      <span className="text-[10px] font-bold text-on-surface-variant px-2 py-1 bg-white/5 rounded">TAX INCL.</span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="py-12 text-center text-on-surface-variant">
                  <p className="text-sm">Select an available slot to see summary</p>
                </div>
              )}
            </AnimatePresence>

            <div className="space-y-4">
              <button 
                disabled={!selectedSlotId}
                className={`w-full py-5 rounded-lg font-headline font-black text-lg tracking-tight transition-all ${
                  selectedSlotId 
                    ? "bg-primary text-black hover:scale-[1.02] active:scale-95 shadow-[0_10px_20px_-10px_rgba(142,255,113,0.5)]" 
                    : "bg-white/10 text-white/20 cursor-not-allowed"
                }`}
              >
                SECURE THIS SLOT
              </button>
              <p className="text-center text-[10px] text-on-surface-variant font-medium tracking-wide">
                BY CLICKING YOU AGREE TO OUR <button className="underline hover:text-white">FACILITY RULES</button>
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
              <div className="aspect-video w-full bg-white/5 rounded-lg relative overflow-hidden border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&q=80&w=800" 
                  alt="Pitch View" 
                  className="w-full h-full object-cover opacity-40 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-primary w-3 h-3" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Main Arena, Sector B</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Protocols */}
      <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="group bg-surface p-8 rounded-xl border border-white/5 hover:border-primary/40 transition-all duration-500 flex flex-col justify-between min-h-[240px] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Trophy className="w-24 h-24" />
          </div>
          <div>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Lock className="text-primary w-6 h-6" />
            </div>
            <h3 className="font-headline font-black text-2xl tracking-tight mb-2 uppercase italic">Strictly <span className="text-primary">No Studs.</span></h3>
            <p className="text-on-surface-variant text-sm font-medium max-w-[240px]">Turf shoes or flat-soled trainers only.</p>
          </div>
          <div className="mt-8 flex items-center gap-2">
            <span className="h-px w-8 bg-primary/40"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Pitch Protocol 01</span>
          </div>
        </div>

        <div className="group bg-surface p-8 rounded-xl border border-white/5 hover:border-primary/40 transition-all duration-500 flex flex-col justify-between min-h-[240px] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Droplets className="w-24 h-24" />
          </div>
          <div>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Droplets className="text-primary w-6 h-6" />
            </div>
            <h3 className="font-headline font-black text-2xl tracking-tight mb-2 uppercase italic">Changing <span className="text-primary">Rooms.</span></h3>
            <p className="text-on-surface-variant text-sm font-medium max-w-[280px]">Secure lockers and fresh facilities available for all players.</p>
          </div>
          <div className="mt-8 flex items-center gap-2">
            <span className="h-px w-8 bg-primary/40"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Pitch Protocol 02</span>
          </div>
        </div>
      </section>
    </main>
  );
}

function ChevronRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
