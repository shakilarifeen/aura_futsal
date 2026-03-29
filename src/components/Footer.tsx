import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="w-full flex flex-col items-center gap-8 px-8 py-20 bg-black border-t border-white/5">
      <div class="text-xl font-black text-white font-headline tracking-widest uppercase">AURA</div>
      <div class="flex flex-wrap justify-center gap-10">
        <Link to="/" class="font-body text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-white transition-colors">Home</Link>
        <Link to="/bookings" class="font-body text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-white transition-colors">Bookings</Link>
        <Link to="/about" class="font-body text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-white transition-colors">Future</Link>
        <Link to="/contact" class="font-body text-xs font-medium text-neutral-500 uppercase tracking-widest hover:text-white transition-colors">Contact</Link>
      </div>
      <p class="font-body text-[10px] font-medium text-neutral-500 uppercase tracking-widest opacity-60">
        © 2026 AURA KINETIC SPORTS. ENGINEERED FOR THE NIGHT.
      </p>
    </footer>
  );
}
