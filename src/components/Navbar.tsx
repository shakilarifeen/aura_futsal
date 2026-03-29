import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Bookings", path: "/bookings" },
    { name: "Future", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 max-w-7xl mx-auto rounded-xl mt-4 mx-4 bg-neutral-950/60 backdrop-blur-xl shadow-[0_0_40px_rgba(142,255,113,0.1)]">
      <Link to="/" className="text-3xl font-black tracking-widest text-primary font-headline uppercase">
        AURA
      </Link>
      
      <div className="hidden md:flex items-center gap-8 font-headline uppercase tracking-tighter text-sm">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`transition-all duration-300 relative ${
              location.pathname === link.path 
                ? "text-primary" 
                : "text-neutral-400 hover:text-white hover:scale-105"
            }`}
          >
            {link.name}
            {location.pathname === link.path && (
              <motion.div
                layoutId="nav-underline"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
              />
            )}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link 
          to="/bookings"
          className="bg-primary text-black font-bold px-6 py-2 rounded-md hover:scale-105 transition-all duration-300 active:opacity-80 active:scale-95 shadow-[0_0_12px_rgba(142,255,113,0.3)]"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
}
